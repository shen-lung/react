export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const RETURN_TO_DO_TASK = 'RETURN_TO_DO_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';


export const addTask = (taskName) => ({type: ADD_TASK, payload: taskName});

export const completeTask = (key) => ({type: COMPLETE_TASK, payload: key});

export const returnToDoTask = (key) => ({type: RETURN_TO_DO_TASK, payload: key});

export const removeTask = (key) => ({type: REMOVE_TASK, payload: key});
