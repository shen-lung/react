import {connect} from 'react-redux';

import TaskList from '../components/TaskList';
import {addTask, completeTask} from '../actions/task_list';

const _mapStateToProps = (state) => ({
    task_name: state.taskList,
});

const _mapDispatchToProps = {
	addTask,
	completeTask
};

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(TaskList);
