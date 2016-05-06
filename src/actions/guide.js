import axios from 'axios';
import {
    GET_SPOTS_REQUEST,
    GET_SPOTS_SUCCESS,
    GET_SPOTS_FAILED
} from 'constants';

export function getSpots() {
    return dispatch => {
        dispatch({type: GET_SPOTS_REQUEST});
        axios.get('/api/spots')
            .then(response => {
                dispatch({
                    type: GET_SPOTS_SUCCESS,
                    properties: response.data
                });
            })
            .catch(response => dispatch({type: GET_SPOTS_FAILED}));

    }
}