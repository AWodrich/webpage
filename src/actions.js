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
