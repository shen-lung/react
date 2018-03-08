import React, { Component } from 'react';
import {Provider} from 'react-redux';

import logo from './logo.svg';
import './App.css';

import ConnectedCalculation from './containers/ConnectedCalculation';
import CalculationWithoutRedux from './containers/CalculationWithoutRedux';
import ConnectedTaskList from './containers/ConnectedTaskList';
import TaskListWithoutRedux from './containers/TaskListWithoutRedux';
import reducer from './reducers';
import configureStore from './store';


class App extends Component {
    constructor(props) {
        super(props);

        this._store = configureStore({
            reducer,
            initialState: {}
        });
    }

    render() {
        return (
            <Provider store={this._store}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                    </header>
                    <h2>Calculation</h2>
                    <div className="App-intro">
                        Redux
                        <ConnectedCalculation />
                    </div>
                    <div className="App-intro">
                        React
                        <CalculationWithoutRedux />
                    </div>
                    <hr/>
                    <h2>Task list</h2>
                    <div className="App-intro">
                        Redux
                        <ConnectedTaskList />
                    </div>
                    <div className="App-intro">
                        React
                        <TaskListWithoutRedux />
                    </div>
                    <hr/>
                </div>
            </Provider>
        );
    }
}

export default App;
