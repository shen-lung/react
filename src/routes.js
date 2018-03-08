import React from 'react';
import {Route, IndexRoute} from 'react-router';

import ConnectedCalculation from './containers/ConnectedCalculation';
import CalculationWithoutRedux from './containers/CalculationWithoutRedux';
import ConnectedTaskList from './containers/ConnectedTaskList';
import TaskListWithoutRedux from './containers/TaskListWithoutRedux';

import Page from './components/Page';
import IndexScreen from './components/IndexScreen';

const BASE_URL = '/';

const getRoutes = () => {
    return (
        <Route path={BASE_URL} component={Page}>
            <IndexRoute component={IndexScreen} />
            <Route path="calculation-redux" component={ConnectedCalculation} />
            <Route path="calculation-react" component={CalculationWithoutRedux} />
            <Route path="tasklist-redux" component={ConnectedTaskList} />
            <Route path="tasklist-react" component={TaskListWithoutRedux} />
        </Route>
    );
};

export default getRoutes;
