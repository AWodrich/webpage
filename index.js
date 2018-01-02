const express = require('express');
const app = express();

const compression = require('compression');

const bodyParser = require('body-parser');
// avoiding malicious injection
const csrf = require('csurf');
const csrfProtection = csrf();
const uidSafe = require('uid-safe');
// for Password hashing, setting sessions
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
// for uploading purposes
const multer = require('multer');
const path = require('path');
// importing files
const pw = require('./password');
const database = require('./database.js');
const s3 = require('./s3');
// creating server
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

const description = require('./description.json');

const { email, password } = require('./logincreds.json');


if (process.env.NODE_ENV != 'production') {
    app.use('/bundle.js', require('http-proxy-middleware')({
        target: 'http://localhost:8081/'
    }));
}


// Storing images
const diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + '/uploads');
    },
    filename: function (req, file, callback) {
      uidSafe(24).then(function(uid) {
          callback(null, uid + path.extname(file.originalname));
      });
    }
});

const uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 2097152
    }
});

// make webpage secure
app.disable('x-powered-by');

// make sure that webpage cannot be put into a frame for misusage
app.use((req, res, next) => {
    res.setHeader('x-frame-options', 'deny');
    next();
});

// serve static directory
app.use(express.static("public"));
app.use(express.static('uploads'));

// cookie, cookie-session, bodyParser, compression
app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieSession({
    secret: 'my secret is a secret that secretly secrets itself',
    maxAge: 1000 * 60 * 60 * 24 * 14
}));

app.use(bodyParser.json())

app.use(compression());



// 1. Main Page
app.get('/', function(req, res){
    if(!req.session && req.sessio != '/'){
        res.redirect('/home/')
        return;
    }
    if(req.session && req.session.url == '/') {
        res.redirect('/home')
    }
    res.sendFile(__dirname + '/index.html');
});


app.post('/admin/:id', (req, res) => {
    if (email === req.body.loginData.email) {
        if (password === req.body.loginData.password) {
            req.session.user = {
                user: req.body.loginData.email
            }
            res.json({success: true})
        } else {
            res.json({error: 'wrong password'})
        }
    } else {
        res.json({error: 'wrong email'})
    }
})

app.post('/edit-profile', (req, res) => {
        database.updateAbout(req.body.data.about)
            .then(result => console.log('updated about'))
})


app.post('/edit-cv', (req, res) => {
    const dataJson = JSON.stringify(req.body.data);
    database.editCV(dataJson)
        .then(() => console.log('cv updated'))
})

app.get('/get-profile-data', (req, res) => {
    database.getProfileData()
        .then(profiledata => {
            res.json(profiledata[0])
        })
})


app.post('/upload-image', uploader.single('file'), (req, res) => {
    console.log('is there a req.file?====server side', req.body);
    if (req.file) {
        s3.upload(req.file)
        .then(()  => {
            database.uploadImages(req.file.filename)
            .then(result=> {
                res.json({
                    success: true,
                    imgUrl: req.file.filename
                });
            })
            .catch(err => {
                console.log(err);
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
})




app.get('*', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function() {
    console.log("I'm listening.")
});
