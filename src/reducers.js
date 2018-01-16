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
    if (action.type == 'UPDATE_CV_FIELD') {
        state = Object.assign({}, state, {
            cv: action.data
        })
    }
    if (action.type == 'GET_PROJECTS') {
        state = Object.assign({}, state, {
            projects: action.data
        })
    }
    return state;
}
