import { loginAdmin } from './actions';


export default function(state = {}, action) {
    if (action.type == 'LOGIN_USER') {
        state = Object.assign({}, state, {
            loggedIn: action.loggedIn
        });
    }
    return state;
}
