import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import thunk from 'redux-thunk';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';

import './App.css';

import reducer from './reducers';
import configureStore from './store';

import getRoutes from './routes';
import getHistory from './history';


class App extends Component {
    constructor(props) {
        super(props);

        let historyManagement = getHistory();

        this._store = configureStore({
            reducer,
            initialState: {},
            middleware: [thunk, routerMiddleware(historyManagement)]
        });

        this._history = syncHistoryWithStore(historyManagement, this._store);
    }

    render() {
        let routes = getRoutes();

        return (
            <Provider store={this._store}>
                <Router history={this._history} routes={routes} />
            </Provider>
        );
    }
}

export default App;
