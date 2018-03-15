import {connect} from 'react-redux';

import IndexScreen from '../components/IndexScreen';
import {
    goToCalculation,
    goToCalculationWithReact,
    goToTaskList,
    goToTaskListWithReact
} from '../actions/indexScreen';

const _mapStateToProps = () => ({});

const _mapDispatchToProps = {
    goToCalculation,
    goToCalculationWithReact,
    goToTaskList,
    goToTaskListWithReact,
};

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(IndexScreen);
