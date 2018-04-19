import _ from 'lodash';

import {
    ADD_TASK,
    COMPLETE_TASK,
    RETURN_TO_DO_TASK,
    REMOVE_TASK,
    SELECT_TASK,
    ADD_MULTIPLE_TASKS
} from '../actions/taskList'


const taskList = (state = {}, {type, payload}) => {
    let newState = state;

    if (type === ADD_MULTIPLE_TASKS) {
        _.each(payload, (item) => {
            newState = {
                ...newState,
                [item.id]: {
                    id: item.id,
                    name: item.name,
                    status: item.status,
                    selected: false,
                },
            };
        });
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
