import axios from 'axios';

export function loginAdmin(loginData) {
    return axios.post('/admin/3', {loginData})
        .then(({data}) => {
            return {
                type: 'LOGIN_USER',
                loggedIn: data
            }
        })
}

export function updateAbout(data) {
    return axios.post('/edit-profile', {data})
        .then(() => {
            console.log('in here');
        })
}

export function updateCV(data) {
    return axios.post('/edit-cv', {data})
        .then(() => {
            console.log('in here');
        })
}


export function getProfileData() {
    return axios.get('/get-profile-data')
        .then(data => {
            return {
                type: 'PROFILE_DATA',
                data: data.data
            }
        })
}


export function uploadImage(formData) {
    console.log('in actions uplaod image', formData);
    return axios.post('/upload-image', {formData})
        .then(image => {
            console.log('image data?', image);
        })
}
