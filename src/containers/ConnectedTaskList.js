import {connect} from 'react-redux';

import TaskList from '../components/TaskList';
import {addTask, completeTask} from '../actions/taskList';

const _mapStateToProps = (state) => ({
    taskList: state.taskList,
});

const _mapDispatchToProps = {
	addTask,
	completeTask
};

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(TaskList);
