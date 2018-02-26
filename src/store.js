import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';

const configureStore = ({reducer, initialState, middleware = [thunk]}) => (
    createStore(
        reducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middleware, createLogger({collapsed: true})),
        ),
    )
);

export default configureStore;
