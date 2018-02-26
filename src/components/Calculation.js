import React, { Component} from 'react';
import PropTypes from 'prop-types';

import '../css/Style.css';


class Calculation extends Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
        addNumber: PropTypes.func.isRequired,
        subtractNumber: PropTypes.func.isRequired,
        resetNumber: PropTypes.func.isRequired
    }

    render() {
        let {number, addNumber, subtractNumber, resetNumber} = this.props;

        return (
            <div className="Content">
                <button onClick={addNumber}>Add</button>
                <button onClick={subtractNumber}>Subtract</button>
                <button onClick={resetNumber}>Reset</button>
                <p>{number}</p>
            </div>
        );
    }
}

export default Calculation;
