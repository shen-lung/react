export const ADD_NUMBER = 'ADD_NUMBER';
export const SUBTRACT_NUMBER = 'SUBTRACT_NUMBER';
export const RESET_NUMBER = 'RESET_NUMBER';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SHOW_ERROR = 'SHOW_ERROR';

export const addNumber = () => ({type: ADD_NUMBER});

export const subtractNumber = () => ({type: SUBTRACT_NUMBER});

export const resetNumber = () => ({type: RESET_NUMBER});

export const setIsLoading = (value) => ({type: SET_IS_LOADING, payload: value});

export const showError = (error) => ({type: SHOW_ERROR, payload: error});
