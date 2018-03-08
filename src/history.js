import {browserHistory, createMemoryHistory} from 'react-router';

const getHistory = () => {
    let hasBrowserHistory = typeof(browserHistory) !== 'undefined';

    return hasBrowserHistory ? browserHistory : createMemoryHistory();
};

export default getHistory;
