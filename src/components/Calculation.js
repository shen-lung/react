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
                <button onClick={addNumber}>Add</button>
                <button onClick={subtractNumber}>Subtract</button>
                <button onClick={resetNumber}>Reset</button>
                <button onClick={goToHome}>Go Home</button>
                <p>{number}</p>
            </div>
        );
    }
}

export default Calculation;
