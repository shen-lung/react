import {combineReducers} from 'redux';

import {ADD_TASK, COMPLITE_TASK} from '../actions/task_list'


const taskList = (state = [], {type, payload}) => {
    let newState = state;

    if (type === ADD_TASK) {
        newState = newState.push('payload');
    }

    // if (type === COMPLITE_TASK) {
    //     newState = newState.push('payload');
    // }

    return newState;
};

export default combineReducers({
    taskList,
});