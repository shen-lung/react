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

import FBLogin from './components/FacebookLogin';

import myFoo from './components/Foo';

const MyButton = ({onClick}) => (
    <button onClick={onClick}>hola</button>
);

const MyFoo = myFoo(MyButton);

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
            <div>
                <Provider store={this._store}>
                    <Router history={this._history} routes={routes} />
                </Provider>
                <FBLogin />
                <MyFoo />
            </div>
        );
    }
}

export default App;
