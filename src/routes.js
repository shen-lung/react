import React from 'react';
import {Route, IndexRoute} from 'react-router';

import ConnectedCalculation from './containers/ConnectedCalculation';
import CalculationWithReact from './containers/CalculationWithReact';
import ConnectedTaskList from './containers/ConnectedTaskList';
import TaskListWithReact from './containers/TaskListWithReact';
import ConnectedIndexScreen from './containers/ConnectedIndexScreen';

import Page from './components/Page';

const BASE_URL = '/';

const getRoutes = () => {
    return (
        <Route path={BASE_URL} component={Page}>
            <IndexRoute component={ConnectedIndexScreen} />
            <Route path="calculation-redux" component={ConnectedCalculation} />
            <Route path="calculation-react" component={CalculationWithReact} />
            <Route path="tasklist-redux" component={ConnectedTaskList} />
            <Route path="tasklist-react" component={TaskListWithReact} />
        </Route>
    );
};

export default getRoutes;
