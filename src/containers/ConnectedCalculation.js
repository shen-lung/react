import {connect} from 'react-redux';

import Calculation from '../components/Calculation';
import {addNumber, subtractNumber, resetNumber} from '../actions';

const _mapStateToProps = (state) => ({
    number: state.calculation,
});

const _mapDispatchToProps = {
    addNumber,
    subtractNumber,
    resetNumber
};

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(Calculation);
