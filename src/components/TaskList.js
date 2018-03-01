import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../css/Style.css';


class TaskList extends Component {
	static propTypes = {
		task_name: PropTypes.array.isRequired,
		addTask: PropTypes.func.isRequired,
		completeTask: PropTypes.func.isRequired
	}
	render() {
		let {task_name, addTask, completeTask} = this.props;

		return (
			<div className="task_list_content">
				<input type="text"/>
				<button onClick={addTask}>Add Tast</button>
				<p>
					{task_name}
					<button onClick={completeTask}>Complited</button>
				</p>
			</div>
		)
	}
}
export default TaskList;
