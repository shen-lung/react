import React, {PureComponent} from 'react';
import _ from 'lodash';

import TaskList from '../components/TaskList';

const _goToHome = () => window.location = '/';

export default class TaskListWithReact extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            taskList: []
        };
    }

    _addTask = (taskName) => {
        this.setState(({taskList}) => ({
            taskList: [
                ...taskList,
                {
                    key: _.uniqueId('task'),
                    name: taskName,
                    status: 'todo',
                },
            ],
        }));
    }

    _completeTask = (taskKey) => {
        this.setState(({taskList}) => {
            let newState = _.reduce(taskList, (memo, {key, ...task}) => {
                if (taskKey === key) {
                    return [
                        ...memo,
                        {
                            ...task,
                            key: taskKey,
                            status: 'completed',
                        }
                    ];
                }

                return [
                    ...memo,
                    {
                        key,
                        ...task,
                    }
                ];
            }, []);

            return {
                taskList: [
                    ...newState,
                ],
            };
        });
    }

    _returnToDoTask = (taskKey) => {
        this.setState(({taskList}) => {
            let newState = _.reduce(taskList, (memo, {key, ...task}) => {
                if (taskKey === key) {
                    return [
                        ...memo,
                        {
                            ...task,
                            key: taskKey,
                            status: 'todo',
                        }
                    ];
                }

                return [
                    ...memo,
                    {
                        key,
                        ...task,
                    }
                ];
            }, []);

            return {
                taskList: [
                    ...newState,
                ],
            };
        });
    }

    _removeTask = (taskKey) => {
        this.setState(({taskList}) => {
            let newState = _.reduce(taskList, (memo, {key, ...task}) => {
                if (taskKey === key) {
                    return memo;
                }

                return [
                    ...memo,
                    {
                        key,
                        ...task,
                    }
                ];
            }, []);

            return {
                taskList: [
                    ...newState,
                ],
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
                goToHome={_goToHome}
            />
        );
    }
}
