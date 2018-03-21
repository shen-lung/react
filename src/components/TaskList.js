import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../css/Style.css';

const _getTotalTask = (taskList) => _.size(taskList);

const _getTotalToDoTask = (taskList) => _.chain(taskList).filter({status: 'todo'}).size().value();

const _getTotalCompletedTask = (taskList) => _.chain(taskList).filter({status: 'completed'}).size().value();

export default class TaskList extends Component {
    static propTypes = {
        taskList: PropTypes.object.isRequired,
        addTask: PropTypes.func.isRequired,
        completeTask: PropTypes.func.isRequired,
        returnToDoTask: PropTypes.func.isRequired,
        removeTask: PropTypes.func.isRequired,
        goToHome: PropTypes.func.isRequired,
        isLoading: PropTypes.bool
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
        let {
            taskList,
            completeTask,
            returnToDoTask,
            removeTask,
            goToHome,
            isLoading,
        } = this.props;
        let {
            textValue,
        } = this.state;

        let listItems = _.reduce(taskList,(memo, {name, status}, key) => ([
            ...memo,
            (
                <li key={key}>
                    {name} - {status}
                    <button disabled={isLoading} onClick={completeTask.bind(null, key)}>Complited</button>
                    <button disabled={isLoading} onClick={returnToDoTask.bind(null, key)}>ToDo</button>
                    <button disabled={isLoading} onClick={removeTask.bind(null, key)}>Remove</button>
                </li>
            )
        ]), []);

        let syncingComponent = null;

        if (isLoading) {
            syncingComponent = (<span>syncing...</span>);
        }

        return (
            <div className="task_list_content">
                {syncingComponent}
                <div>
                    <input
                        type="text"
                        value={textValue}
                        onChange={this._handleOnChange}
                    />
                    <button disabled={isLoading} onClick={this._handleOnAddTask}>Add Tast</button>
                    <p>
                        <label htmlFor="">Total: {_getTotalTask(taskList)}</label>
                        <label htmlFor="">ToDo: {_getTotalToDoTask(taskList)}</label>
                        <label htmlFor="">Complited: {_getTotalCompletedTask(taskList)}</label>
                    </p>
                    <ul>{listItems}</ul>
                </div>
                <button onClick={goToHome}>Go Home</button>
            </div>
        )
    }
};
