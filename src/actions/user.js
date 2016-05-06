import {
    LOG_IN,
    LOG_OUT
} from 'constants';

const AUTH0_PROFILE = 'AUTH0_PROFILE';
const AUTH0_TOKEN = 'AUTH0_TOKEN';

export function logIn(profile, token) {
    try {
        localStorage.setItem(AUTH0_PROFILE, JSON.stringify(profile));
        localStorage.setItem(AUTH0_TOKEN, token);
    } catch (e) {
        // ios safari....
    }
    return {
        type: LOG_IN,
        profile,
        token
    };
}

export function logOut() {
    try {
        localStorage.removeItem(AUTH0_PROFILE);
        localStorage.removeItem(AUTH0_TOKEN);
    } catch (e) {
        // ios safari....
    }
    return {
        type: LOG_OUT
    };
}

export function getUser() {
    const profile = JSON.parse(localStorage.getItem(AUTH0_PROFILE));
    const token = localStorage.getItem(AUTH0_TOKEN);
    return {
        type: profile ? LOG_IN : LOG_OUT,
        profile,
        token
    };
}
