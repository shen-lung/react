export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';

export const addTask = (taskName) => ({type: ADD_TASK, payload: taskName});

export const completeTask = (key) => ({type: COMPLETE_TASK, payload: key});
