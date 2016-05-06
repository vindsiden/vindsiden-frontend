import createReducer from './createReducer';
import {
    GET_SPOT_REQUEST,
    GET_SPOT_SUCCESS,
    GET_SPOT_FAILED
} from 'constants';

const initialState = {
    iLoading: false,
    error: false,
    properties: []
};

export default createReducer(initialState, {
    [GET_SPOT_REQUEST]: state => {
        return Object.assign({}, state, {isLoading: true, error: false});
    },
    [GET_SPOT_SUCCESS]: (state, action) => {
        return Object.assign({}, state, {isLoading: false, properties: action.properties});
    },
    [GET_SPOT_FAILED]: state => {
        return Object.assign({}, state, {isLoading: false, error: true});
    }
});