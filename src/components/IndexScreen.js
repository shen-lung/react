import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../css/Style.css';

class Index extends Component {
    static propTypes = {
        goToCalculation: PropTypes.func.isRequired,
        goToCalculationWithReact: PropTypes.func.isRequired,
        goToTaskList: PropTypes.func.isRequired,
        goToTaskListWithReact: PropTypes.func.isRequired,
    }

    render() {
        let {
            goToCalculation,
            goToCalculationWithReact,
            goToTaskList,
            goToTaskListWithReact
        } = this.props;

        return (
            <div>
                <p>
                    <button onClick={goToCalculation}>Calculation</button>
                </p>
                <p>
                    <button onClick={goToCalculationWithReact}>Calculation with React</button>
                </p>
                <p>
                    <button onClick={goToTaskList}>Task List</button>
                </p>
                <p>
                    <button onClick={goToTaskListWithReact}>Task List with React</button>
                </p>
            </div>
        );
    }
}

export default Index;
