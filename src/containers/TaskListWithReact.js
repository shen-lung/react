import React, {PureComponent} from 'react';
import _ from 'lodash';

import TaskList from '../components/TaskList';

const _goToHome = () => window.location = '/';

export default class TaskListWithReact extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            taskList: {}
        };
    }

    _addTask = (taskName) => {
        this.setState(({taskList}) => {
            let key = _.uniqueId('task');

            return {
                taskList: {
                    ...taskList,
                    [key]: {
                        name: taskName,
                        status: 'todo',
                    },
                },
            };
        });
    }

    _completeTask = (taskKey) => {
        this.setState(({taskList}) => {
            return {
                taskList: {
                    ...taskList,
                    [taskKey]: {
                        ...taskList[taskKey],
                        status: 'completed',
                    },
                },
            };
        });
    }

    _returnToDoTask = (taskKey) => {
        this.setState(({taskList}) => {
            return {
                taskList: {
                    ...taskList,
                    [taskKey]: {
                        ...taskList[taskKey],
                        status: 'todo',
                    },
                },
            };
        });
    }

    _removeTask = (taskKey) => {
        this.setState(({taskList}) => {
            let newState = taskList;

            delete newState[taskKey];

            return {
                taskList: {
                    ...newState
                }
            };
        });
    }

    _selectTask = (taskKey, selected) => {
        this.setState(({taskList}) => {
            return {
                taskList: {
                    ...taskList,
                    [taskKey]: {
                        ...taskList[taskKey],
                        selected,
                    },
                },
            };
        });
    }

    render() {
        let {taskList} = this.state;

        return (
            <TaskList
                taskList={taskList}
                addTask={this._addTask}
                completeTask={this._completeTask}
                returnToDoTask={this._returnToDoTask}
                removeTask={this._removeTask}
                selectTask={this._selectTask}
                goToHome={_goToHome}
                getTasksFromServer={_.noop}
            />
        );
    }
}
