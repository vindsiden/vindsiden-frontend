import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import user from './user';
import guide from './guide';

const rootReducer = combineReducers({
    routing: routerReducer,
    user,
    guide
});

export default rootReducer;
