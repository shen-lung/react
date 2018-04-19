import _ from 'lodash';

import {setIsLoading} from './index';
import {getAllTodos} from '../api/taskList';

export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const RETURN_TO_DO_TASK = 'RETURN_TO_DO_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const SELECT_TASK = 'SELECT_TASK';
export const GET_TASKS_FROM_SERVER = 'GET_TASKS_FROM_SERVER';


export const getTasksFromServer = () => (
    (dispatch) => {
        getAllTodos().then((data) => {
            dispatch(fetchSuccess(data));
        })
    }
);

export const fetchSuccess = (data) => (
    (dispatch) => {
        dispatch({type: GET_TASKS_FROM_SERVER, payload: data});
    }
);

export const addTask = (taskName) => (
    (dispatch) => {
        dispatch(setIsLoading(true));
        setTimeout(() => {
            dispatch({type: ADD_TASK, payload: taskName});
            dispatch(setIsLoading(false));
        }, 1000);
    }
);

export const completeTask = () => (
    (dispatch, getState) => {
        let {taskList} = getState();
        let selectedTasks = _.chain(taskList).filter({selected: true}).map(({id}) => id).value();

        dispatch(setIsLoading(true));
        setTimeout(() => {
            _.each(selectedTasks, (id) => {
                dispatch({type: COMPLETE_TASK, payload: id});
            })
            dispatch(setIsLoading(false));
        }, 1000);
    }
);

export const returnToDoTask = (key) => (
    (dispatch, getState) => {
        let {taskList} = getState();
        let selectedTasks = _.chain(taskList).filter({selected: true}).map(({id}) => id).value();

        dispatch(setIsLoading(true));
        setTimeout(() => {
            _.each(selectedTasks, (id) => {
                dispatch({type: RETURN_TO_DO_TASK, payload: id});
            })
            dispatch(setIsLoading(false));
        }, 1000);
    }
);

export const removeTask = (key) => (
    (dispatch, getState) => {
        let {taskList} = getState();
        let selectedTasks = _.chain(taskList).filter({selected: true}).map(({id}) => id).value();

        dispatch(setIsLoading(true));
        setTimeout(() => {
            _.each(selectedTasks, (id) => {
                dispatch({type: REMOVE_TASK, payload: id});
            })
            dispatch(setIsLoading(false));
        }, 1000);
    }
);

export const selectTask = (key, selected) => ({type: SELECT_TASK, payload: {key, selected}});
