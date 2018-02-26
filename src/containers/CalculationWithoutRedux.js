import React, {PureComponent} from 'react';

import Calculation from '../components/Calculation';

export default class CalculationWithoutRedux extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            calulationValue: 0
        };
    }

    _addNumber = () => {
        this.setState(({calulationValue: oldCalulationValue}) => {
            return {
                calulationValue: oldCalulationValue + 1
            };
        });
    }

    _subtractNumber = () => {
        this.setState(({calulationValue: oldCalulationValue}) => {
            return {
                calulationValue: oldCalulationValue - 1
            };
        });
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
            />
        );
    }
}
