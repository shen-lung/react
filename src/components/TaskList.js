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
            textValue: '',
            disabledAddButton: true,
            disabledActionButtons: true,
        };
    }

    _handleOnChange = (e) => {
        this.setState({textValue: e.target.value});
        this.setState({disabledAddButton: false});
    }

    _handleActionButtons = (e) => {
        if (e.target.checked) {
            this.setState({disabledActionButtons: false});
        } else {
            this.setState({disabledActionButtons: true});
        }
    }

    _handleOnAddTask = () => {
        let {addTask} = this.props;
        let {textValue} = this.state;

        this.setState({textValue: ''});
        this.setState({disabledAddButton: true});

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
            disabledAddButton,
            disabledActionButtons,
        } = this.state;

        let listItems = _.reduce(taskList,(memo, {name, status}, key) => ([
            ...memo,
            (
                <li key={key}>
                    {name} - {status} <input type="text" type="checkbox" onChange={this._handleActionButtons}/>

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
                    <button disabled={isLoading, disabledAddButton} onClick={this._handleOnAddTask}>Add Tast</button>
                    <p>
                        <label htmlFor="">Total: {_getTotalTask(taskList)}</label>
                        <label htmlFor="">ToDo: {_getTotalToDoTask(taskList)}</label>
                        <label htmlFor="">Complited: {_getTotalCompletedTask(taskList)}</label>
                    </p>
                    <ul>{listItems}</ul>
                    <button disabled={isLoading, disabledActionButtons}>Complited</button>
                    <button disabled={isLoading, disabledActionButtons}>ToDo</button>
                    <button disabled={isLoading, disabledActionButtons}>Remove</button>
                </div>
                <button onClick={goToHome}>Go Home</button>
            </div>
        )
    }
};
