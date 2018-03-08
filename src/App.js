import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';

import logo from './logo.svg';
import './App.css';

import reducer from './reducers';
import configureStore from './store';

import getRoutes from './routes';


class App extends Component {
    constructor(props) {
        super(props);

        this._store = configureStore({
            reducer,
            initialState: {}
        });
    }

    render() {
        let routes = getRoutes();

        return (
            <Provider store={this._store}>
                <Router routes={routes} />
            </Provider>
        );
    }
}

export default App;
