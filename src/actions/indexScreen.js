import {push, replace} from 'react-router-redux';

export const goToCalculation = () => (
    (dispatch) => {
        dispatch(push('/calculation-redux'))
    }
);

export const goToCalculationWithReact = () => (
    (dispatch) => {
        dispatch(push('/calculation-react'))
    }
);

export const goToTaskList = () => (
    (dispatch) => {
        dispatch(push('/tasklist-redux'))
    }
);

export const goToTaskListWithReact = () => (
    (dispatch) => {
        dispatch(push('/tasklist-react'))
    }
);

export const goToHome = () => (
    (dispatch) => {
        dispatch(replace('/'))
    }
);
