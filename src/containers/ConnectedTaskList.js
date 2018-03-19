import {connect} from 'react-redux';

import TaskList from '../components/TaskList';
import {
    addTask,
    completeTask,
    returnToDoTask,
    removeTask
} from '../actions/taskList';
import {goToHome}  from '../actions/indexScreen';

const _mapStateToProps = (state) => ({
    taskList: state.taskList,
});

const _mapDispatchToProps = {
    addTask,
    completeTask,
    returnToDoTask,
    removeTask,
    goToHome,
};

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(TaskList);
