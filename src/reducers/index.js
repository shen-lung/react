import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {ADD_NUMBER, SUBTRACT_NUMBER, RESET_NUMBER, SET_IS_LOADING} from '../actions';
import taskList from './taskList'


const calculation = (state = 0, {type}) => {
    let newState = state;

    if (type === ADD_NUMBER) {
        newState = newState + 1;
    }

    if (type === SUBTRACT_NUMBER) {
        newState = newState - 1;
    }

    if (type === RESET_NUMBER) {
        newState = 0;
    }

    return newState;
};

const isLoading = (state=false, {type, payload}) => {
    let newState = state;

    if (type === SET_IS_LOADING) {
        newState = payload;
    }

    return newState;
}

export default combineReducers({
    routing: routerReducer,
    calculation,
    taskList,
    isLoading,
});
