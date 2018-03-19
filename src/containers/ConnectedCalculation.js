import {connect} from 'react-redux';

import Calculation from '../components/Calculation';
import {addNumber, subtractNumber, resetNumber} from '../actions';
import {goToHome}  from '../actions/indexScreen';

const _mapStateToProps = (state) => ({
    number: state.calculation,
});

const _mapDispatchToProps = {
    addNumber,
    subtractNumber,
    resetNumber,
    goToHome
};

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(Calculation);
