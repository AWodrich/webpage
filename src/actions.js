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


export function updateProfile(data) {
    console.log('data in actions updateProfile', data);
    return axios.post('/edit-profile', {about: data})
        .then(() => {
            console.log('in here');
        })
}
