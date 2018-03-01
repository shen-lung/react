export const ADD_TASK = 'ADD_TASK';
export const COMPLITE_TASK = 'COMPLITE_TASK';

const add = (task_name) => ({type: ADD_TASK, payload: task_name});

export const addTask = (task_name) => (
    (dispatch) => {
        dispatch(add(task_name));
    }
);

export const completeTask = () => ({type: COMPLITE_TASK});
