import _ from 'lodash';

import {setIsLoading} from './index';
import {
    getAllTodos,
    addTask as addTaskApi,
    updateTaskStatus as updateTaskStatusApi,
    deleteTask as deleteTaskApi
} from '../api/taskList';

export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const RETURN_TO_DO_TASK = 'RETURN_TO_DO_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const SELECT_TASK = 'SELECT_TASK';
export const ADD_MULTIPLE_TASKS = 'ADD_MULTIPLE_TASKS';


export const getTasksFromServer = () => (
    (dispatch) => {
        dispatch(setIsLoading(true));

        return getAllTodos().then((data) => {
            dispatch({type: ADD_MULTIPLE_TASKS, payload: data});
            dispatch(setIsLoading(false));
        });
    }
);

export const addTask = (taskName) => (
    (dispatch) => {
        dispatch(setIsLoading(true));

        return addTaskApi(taskName).then((data) => {
            dispatch({type: ADD_TASK, payload: data});
            dispatch(setIsLoading(false));
        });
    }
);

export const completeTask = () => (
    (dispatch, getState) => {
        let {taskList} = getState();
        let selectedTasks = _.chain(taskList).filter({selected: true}).map(({id}) => id).value();

        dispatch(setIsLoading(true));

        // parallel
        // let promisess = _.map(selectedTasks, (id) => updateTaskStatusApi(id, 'completed'));
        //
        // Promise.all(promisess).then((values) => {
        //     _.each(values, ({id}) => {
        //         dispatch({type: COMPLETE_TASK, payload: id});
        //     });
        //     dispatch(setIsLoading(false));
        // }).catch(() => {
        //     dispatch(setIsLoading(false));
        // });

        // serie
        let promise = Promise.resolve();

        _.each(selectedTasks, (id) => {
            promise = promise.then(() => updateTaskStatusApi(id, 'completed'));
        });

        promise.then(() => {
            _.each(selectedTasks, (id) => {
                dispatch({type: COMPLETE_TASK, payload: id});
            });
            dispatch(setIsLoading(false));
        }).catch(() => {
            dispatch(setIsLoading(false));
        });
    }
);

export const returnToDoTask = (key) => (
    (dispatch, getState) => {
        let {taskList} = getState();
        let selectedTasks = _.chain(taskList).filter({selected: true}).map(({id}) => id).value();

        dispatch(setIsLoading(true));
        
        // serie
        let promise = Promise.resolve();

        _.each(selectedTasks, (id) => {
            promise = promise.then(() => updateTaskStatusApi(id, 'todo'));
        });

        promise.then(() => {
            _.each(selectedTasks, (id) => {
                dispatch({type: RETURN_TO_DO_TASK, payload: id});
            });
            dispatch(setIsLoading(false));
        }).catch(() => {
            dispatch(setIsLoading(false));
        });
    }
);

export const removeTask = (key) => (
    (dispatch, getState) => {
        let {taskList} = getState();
        let selectedTasks = _.chain(taskList).filter({selected: true}).map(({id}) => id).value();

        dispatch(setIsLoading(true));
        // serie
        let promise = Promise.resolve();

        _.each(selectedTasks, (id) => {
            promise = promise.then(() => deleteTaskApi(id));
        });

        promise.then(() => {
            _.each(selectedTasks, (id) => {
                dispatch({type: REMOVE_TASK, payload: id});
            });
            dispatch(setIsLoading(false));
        }).catch(() => {
            dispatch(setIsLoading(false));
        });
    }
);

export const selectTask = (key, selected) => ({type: SELECT_TASK, payload: {key, selected}});
