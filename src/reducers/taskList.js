import _ from 'lodash';

import {
    ADD_TASK,
    COMPLETE_TASK,
    RETURN_TO_DO_TASK,
    REMOVE_TASK
} from '../actions/taskList'


const taskList = (state = {}, {type, payload}) => {
    let newState = state;

    if (type === ADD_TASK) {
        let key = _.uniqueId('task');

        newState = {
            ...newState,
            [key]: {
                name: payload,
                status: 'todo',
            },
        };
    }

    if (type === COMPLETE_TASK) {
        let key = payload;

        newState = {
            ...newState,
            [key]: {
                ...newState[key],
                status: 'completed',
            },
        };
    }

    if (type === RETURN_TO_DO_TASK) {
        let key = payload;

        newState = {
            ...newState,
            [key]: {
                ...newState[key],
                status: 'todo',
            },
        };
    }

    if (type === REMOVE_TASK) {
        let key = payload;

        delete newState[key];

        newState = {
            ...newState,
        };
    }

    return newState;
};

export default taskList;
