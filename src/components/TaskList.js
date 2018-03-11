import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../css/Style.css';

export default class TaskList extends Component {
    static propTypes = {
        taskList: PropTypes.object.isRequired,
        addTask: PropTypes.func.isRequired,
        completeTask: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            textValue: ''
        };
    }

    _handleOnChange = (e) => {
        this.setState({textValue: e.target.value})
    }

    _handleOnAddTask = () => {
        let {addTask} = this.props;
        let {textValue} = this.state;

        this.setState({textValue: ''})

        addTask(textValue)
    }

    render() {
        let {taskList, completeTask} = this.props;
        let {textValue} = this.state;

        const listItems = _.reduce(taskList,(memo, {name, status}, key) => ([
            ...memo,
            (
                <li key={key}>
                    {name} - {status}
                    <button onClick={completeTask.bind(null, key)}>Complited</button>
                </li>
            )
        ]), []);

        return (
            <div className="task_list_content">
                <input
                    type="text"
                    value={textValue}
                    onChange={this._handleOnChange}
                />
                <button onClick={this._handleOnAddTask}>Add Tast</button>
                <ul>{listItems}</ul>
            </div>
        )
    }
};
