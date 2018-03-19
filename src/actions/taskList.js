import {setIsLoading} from './index';

export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const RETURN_TO_DO_TASK = 'RETURN_TO_DO_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';


export const addTask = (taskName) => (
    (dispatch) => {
        dispatch(setIsLoading(true));
        setTimeout(() => {
            dispatch({type: ADD_TASK, payload: taskName});
            dispatch(setIsLoading(false));
        }, 3000);
    }
);

export const completeTask = (key) => (
    (dispatch) => {
        dispatch(setIsLoading(true));
        setTimeout(() => {
            dispatch({type: COMPLETE_TASK, payload: key});
            dispatch(setIsLoading(false));
        }, 3000);
    }
);

export const returnToDoTask = (key) => (
    (dispatch) => {
        dispatch(setIsLoading(true));
        setTimeout(() => {
            dispatch({type: RETURN_TO_DO_TASK, payload: key});
            dispatch(setIsLoading(false));
        }, 3000);
    }
);

export const removeTask = (key) => (
    (dispatch) => {
        dispatch(setIsLoading(true));
        setTimeout(() => {
            dispatch({type: REMOVE_TASK, payload: key});
            dispatch(setIsLoading(false));
        }, 3000);
    }
);
