import _ from 'lodash';

import {
    ADD_TASK,
    COMPLETE_TASK,
    RETURN_TO_DO_TASK,
    REMOVE_TASK,
    SELECT_TASK,
    GET_TASKS_FROM_SERVER
} from '../actions/taskList'


const taskList = (state = {}, {type, payload}) => {
    let newState = state;

    if (type === GET_TASKS_FROM_SERVER) {
        let key = '';
        _.each(payload, (item) => {
            key = _.uniqueId('task');

            newState = {
                ...newState,
                [key]: {
                    id: key,
                    name: item.name,
                    status: item.status,
                    selected: false,
                },
            };
        })
    }

    if (type === ADD_TASK) {
        let key = _.uniqueId('task');

        newState = {
            ...newState,
            [key]: {
                id: key,
                name: payload,
                status: 'todo',
                selected: false,
            },
        };
    }

    if (type === COMPLETE_TASK) {
        let key = payload;

        newState = {
            ...newState,
            [key]: {
                ...newState[key],
                selected: false,
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
                selected: false,
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

    if (type === SELECT_TASK) {
        let {key, selected} = payload;

        newState = {
            ...newState,
            [key]: {
                ...newState[key],
                selected,
            },
        };
    }

    return newState;
};

export default taskList;
