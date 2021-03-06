import React, {PureComponent} from 'react';

import Calculation from '../components/Calculation';

const _goToHome = () => window.location = '/';

export default class CalculationWithReact extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            calulationValue: 0
        };
    }

    _addNumber = () => {
        this.setState(({calulationValue: oldCalulationValue}) => ({
            calulationValue: oldCalulationValue + 1
        }));
    }

    _subtractNumber = () => {
        this.setState(({calulationValue: oldCalulationValue}) => ({
            calulationValue: oldCalulationValue - 1
        }));
    }

    _resetNumber = () => {
        this.setState({calulationValue: 0});
    }

    render() {
        let {calulationValue} = this.state;

        return (
            <Calculation
                number={calulationValue}
                addNumber={this._addNumber}
                subtractNumber={this._subtractNumber}
                resetNumber={this._resetNumber}
                goToHome={_goToHome}
            />
        );
    }
}
