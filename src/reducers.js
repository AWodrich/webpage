import { loginAdmin, getProfileData } from './actions';


export default function(state = {}, action) {
    if (action.type == 'LOGIN_USER') {
        state = Object.assign({}, state, {
            loggedIn: action.loggedIn
        });
    }
    if (action.type == 'PROFILE_DATA') {
        state = Object.assign({}, state, {
            data: action.data
        });
    }
    return state;
}
