import _ from 'lodash';

import {ADD_TASK, COMPLITE_TASK} from '../actions/taskList'


const taskList = (state = {}, {type, payload}) => {
    let newState = state;

    if (type === ADD_TASK) {
    	let key = _.uniqueId('task');

        newState = {
        	...newState,
        	[key]: {
	        	name: payload,
	        	status: 'todo',
        	},
        };
    }

    if (type === COMPLITE_TASK) {
		let key = payload;

        newState = {
        	...newState,
        	[key]: {
	    		...newState[key],
	        	status: 'completed',
        	},
        };
    }

    return newState;
};

export default taskList;