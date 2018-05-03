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

    _completeTask = () => {
        // this.setState(({taskList}) => ({
        //     taskList: {
        //         ...taskList,
        //         [taskKey]: {
        //             ...taskList[taskKey],
        //             status: 'completed',
        //         },
        //     },
        // }));
    }

    _returnToDoTask = () => {
        // this.setState(({taskList}) => ({
        //     taskList: {
        //         ...taskList,
        //         [taskKey]: {
        //             ...taskList[taskKey],
        //             status: 'todo',
        //         },
        //     },
        // }));
    }

    _removeTask = () => {
        // this.setState(({taskList}) => {
        //     let newState = taskList;
        //
        //     delete newState[taskKey];
        //
        //     return {
        //         taskList: {
        //             ...newState
        //         }
        //     };
        // });
    }

    _selectTask = (taskKey, selected) => {
        this.setState(({taskList}) => ({
            taskList: {
                ...taskList,
                [taskKey]: {
                    ...taskList[taskKey],
                    selected,
                },
            },
        }));
    }

    _selectAllTasks = () => {
        this.setState(({taskList}) => ({
            taskList: _.reduce(taskList, (memo, task, key) => ({
                ...memo,
                [key]: {
                    ...task,
                    selected: true,
                },
            }), {}),
        }));
    }

    _deselectAllTasks = () => {
        this.setState(({taskList}) => ({
            taskList: _.reduce(taskList, (memo, task, key) => ({
                ...memo,
                [key]: {
                    ...task,
                    selected: false,
                },
            }), {}),
        }));
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
                selectAllTasks={this._selectAllTasks}
                deselectAllTasks={this._deselectAllTasks}
                goToHome={_goToHome}
                getTasksFromServer={_.noop}
            />
        );
    }
}
