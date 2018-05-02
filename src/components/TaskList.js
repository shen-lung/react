import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../css/Style.css';


const _getTotalTask = (taskList) => _.size(taskList);

const _getTotalToDoTask = (taskList) => _.chain(taskList).filter({status: 'todo'}).size().value();

const _getTotalCompletedTask = (taskList) => _.chain(taskList).filter({status: 'completed'}).size().value();

const _getTotalSelected = (taskList) => _.chain(taskList).filter({selected: true}).size().value();

const _isTaskListEmpty = (taskList) => _getTotalTask(taskList) === 0;

const _isEmpty = (textValue) => textValue.length === 0;

export default class TaskList extends Component {
    static propTypes = {
        taskList: PropTypes.object.isRequired,
        addTask: PropTypes.func.isRequired,
        completeTask: PropTypes.func.isRequired,
        returnToDoTask: PropTypes.func.isRequired,
        removeTask: PropTypes.func.isRequired,
        selectTask: PropTypes.func.isRequired,
        goToHome: PropTypes.func.isRequired,
        getTasksFromServer: PropTypes.func.isRequired,
        isLoading: PropTypes.bool,
        errorMessage: PropTypes.string,
    }

    constructor(props) {
        super(props);
        
        this.state = {
            textValue: '',
            taskList: props.taskList,
        };
    }

    componentDidMount() {
        this.props.getTasksFromServer();
    }

    _handleOnChange = (e) => {
        this.setState({
            textValue: e.target.value,
        });
    }

    _handleActionButtons = (key, e) => {
        this.props.selectTask(key, e.target.checked);
    }

    _handleOnAddTask = () => {
        let {addTask} = this.props;
        let {textValue} = this.state;

        this.setState({
            textValue: '',
        });

        addTask(textValue)
    }

    _selectAllTickets = (taskList) => {
        this.setState({
            taskList: _.map(taskList, (task) => task.selected = true),
        });
    }

    _deselectAllTickets = (taskList) => {
        _.map(taskList, (task) => task.selected = false);
    }

    render() {
        let {
            taskList,
            completeTask,
            returnToDoTask,
            removeTask,
            goToHome,
            isLoading,
            errorMessage,
        } = this.props;
        let {
            textValue,
        } = this.state;

        let listItems = _.reduce(taskList, (memo, {name, status, selected}, key) => ([
            ...memo,
            (
                <li key={key}>
                    {name} - {status} <input type="checkbox" checked={selected} onChange={this._handleActionButtons.bind(null, key)}/>
                </li>
            )
        ]), []);

        let disabledSelectAllButton = _isTaskListEmpty(taskList);
        let disabledAddButton = isLoading || _isEmpty(textValue);
        let disabledActionButtons = isLoading || !_getTotalSelected(taskList);

        let syncingComponent = null;

        if (isLoading) {
            syncingComponent = (<span>syncing...</span>);
        }

        let errorComponent = null;

        if (errorMessage) {
            errorComponent = (<span>{errorMessage}</span>);
        }

        return (
            <div className="task_list_content">
                {syncingComponent}
                {errorComponent}
                <div>
                    <input
                        type="text"
                        value={textValue}
                        onChange={this._handleOnChange}
                    />
                    <button disabled={disabledAddButton} onClick={this._handleOnAddTask}>Add Tast</button>
                    <p>
                        <label>Total: {_getTotalTask(taskList)}</label>
                        <label>ToDo: {_getTotalToDoTask(taskList)}</label>
                        <label>Complited: {_getTotalCompletedTask(taskList)}</label>
                    </p>
                    <button disabled={disabledSelectAllButton} onClick={() => this._selectAllTickets(taskList)}>Select All</button>
                    <button disabled={disabledActionButtons} onClick={() => this._deselectAllTickets(taskList)}>Deselect All</button>
                    <ul>{listItems}</ul>
                    <button disabled={disabledActionButtons} onClick={completeTask}>Complited</button>
                    <button disabled={disabledActionButtons} onClick={returnToDoTask}>ToDo</button>
                    <button disabled={disabledActionButtons} onClick={removeTask}>Remove</button>
                </div>
                <button onClick={goToHome}>Go Home</button>
            </div>
        )
    }
};
