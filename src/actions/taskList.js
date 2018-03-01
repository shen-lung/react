export const ADD_TASK = 'ADD_TASK';
export const COMPLITE_TASK = 'COMPLITE_TASK';

export const addTask = (taskName) => ({type: ADD_TASK, payload: taskName});

export const completeTask = (key) => ({type: COMPLITE_TASK, payload: key});
