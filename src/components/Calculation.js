import React, { Component} from 'react';
import PropTypes from 'prop-types';

import '../css/Style.css';

class Calculation extends Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
        addNumber: PropTypes.func.isRequired,
        subtractNumber: PropTypes.func.isRequired,
        resetNumber: PropTypes.func.isRequired,
        goToHome: PropTypes.func.isRequired,
    }

    render() {
        let {
            number,
            addNumber,
            subtractNumber,
            resetNumber,
            goToHome
        } = this.props;

        return (
            <div className="Content">
                <button data-spec="addNumber" onClick={addNumber}>Add</button>
                <button onClick={subtractNumber}>Subtract</button>
                <button onClick={resetNumber}>Reset</button>
                <p data-spec="number">{number}</p>
                <button onClick={goToHome}>Go Home</button>
            </div>
        );
    }
}

export default Calculation;
