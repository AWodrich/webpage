import { loginAdmin } from './actions';


export default function(state = {}, action) {
    console.log('what is action?', action);
    if (action.type == 'LOGIN_USER') {
        console.log('action now?', action);
        state = Object.assign({}, state, {
            user: action
        });
    }
    return state;
}
