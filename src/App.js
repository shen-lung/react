import React, { Component } from 'react';
import {Provider} from 'react-redux';

import logo from './logo.svg';
import './App.css';

import ConnectedCalculation from './containers/ConnectedCalculation';
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
          <div className="App-intro">
            <ConnectedCalculation />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
