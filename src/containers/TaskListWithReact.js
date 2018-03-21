import React, {PureComponent} from 'react';
import _ from 'lodash';

import TaskList from '../components/TaskList';

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

    render() {
        let {taskList} = this.state;

        return (
            <TaskList
                taskList={taskList}
                addTask={this._addTask}
                completeTask={this._completeTask}
            />
        );
    }
}
