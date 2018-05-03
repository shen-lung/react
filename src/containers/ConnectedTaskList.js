import {connect} from 'react-redux';

import TaskList from '../components/TaskList';
import {
    addTask,
    completeTask,
    returnToDoTask,
    removeTask,
    selectTask,
    getTasksFromServer,
    selectAllTasks,
    deselectAllTasks
} from '../actions/taskList';
import {goToHome}  from '../actions/indexScreen';

const _mapStateToProps = (state) => ({
    taskList: state.taskList,
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
});

const _mapDispatchToProps = {
    addTask,
    completeTask,
    returnToDoTask,
    removeTask,
    goToHome,
    selectTask,
    getTasksFromServer,
    selectAllTasks,
    deselectAllTasks
};

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(TaskList);
