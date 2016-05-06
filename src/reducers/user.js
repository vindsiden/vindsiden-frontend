import createReducer from './createReducer';
import {
    LOG_IN,
    LOG_OUT
} from 'constants';

const initialState = {
    loggedIn: false,
    profile: {},
    token: null
};

export default createReducer(initialState, {
    [LOG_IN]: (state, action) => {
        return Object.assign({}, state, {loggedIn: true, profile: action.profile, token: action.token});
    },
    [LOG_OUT]: (state) => {
        return Object.assign({}, state, initialState);
    }
})