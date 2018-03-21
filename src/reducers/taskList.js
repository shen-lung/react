import _ from 'lodash';

import {
    ADD_TASK,
    COMPLETE_TASK,
    RETURN_TO_DO_TASK,
    REMOVE_TASK
} from '../actions/taskList'


const taskList = (state = [], {type, payload}) => {
    let newState = state;

    if (type === ADD_TASK) {
        newState = [
            ...newState,
            {
                key: _.uniqueId('task'),
                name: payload,
                status: 'todo',
            },
        ];
    }

    if (type === COMPLETE_TASK) {
        newState = _.reduce(newState, (memo, {key, ...task}) => {
            if (payload === key) {
                return [
                    ...memo,
                    {
                        ...task,
                        key: payload,
                        status: 'completed',
                    }
                ];
            }

            return [
                ...memo,
                {
                    key,
                    ...task,
                }
            ];
        }, []);
    }

    if (type === RETURN_TO_DO_TASK) {
        newState = _.reduce(newState, (memo, {key, ...task}) => {
            if (payload === key) {
                return [
                    ...memo,
                    {
                        ...task,
                        key: payload,
                        status: 'todo',
                    }
                ];
            }

            return [
                ...memo,
                {
                    key,
                    ...task,
                }
            ];
        }, []);
    }

    if (type === REMOVE_TASK) {
        newState = _.reduce(newState, (memo, {key, ...task}) => {
            if (payload === key) {
                return memo;
            }

            return [
                ...memo,
                {
                    key,
                    ...task,
                }
            ];
        }, []);
    }

    return newState;
};

export default taskList;
