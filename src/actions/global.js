import {getUser} from './user';

export function startApp() {
    return dispatch => {
        dispatch(getUser());
    }
}