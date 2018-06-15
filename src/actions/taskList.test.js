import {
    getTasksFromServer,
    addTask
} from './taskList';
import * as taskListApi from '../api/taskList';

describe('getTasksFromServer', () => {
    it('should go thru fail path', () => {
        // create a mock dispatch function
        let dispatch = jest.fn();

        // mock the api
        let mockGetAllTodos = jest.spyOn(taskListApi, 'getAllTodos').mockImplementation(() => Promise.reject());

        // call the action with the mock dispatch and get the response
        let promise = getTasksFromServer()(dispatch);

        // restore the mock
        mockGetAllTodos.mockRestore();

        // asserts
        expect(dispatch.mock.calls[0][0]).toEqual({
            type: 'SET_IS_LOADING',
            payload: true,
        });
        expect(dispatch.mock.calls[1][0]).toEqual({
            type: 'SHOW_ERROR',
            payload: '',
        });

        // wait for promise to end and do more asserts
        return promise.then(() => {
            expect(dispatch.mock.calls[2][0]).toEqual({
                type: 'SHOW_ERROR',
                payload: 'SERVER ERROR.',
            });
            expect(dispatch.mock.calls[3][0]).toEqual({
                type: 'SET_IS_LOADING',
                payload: false,
            });
        });
    });

    it('should go thru success path', () => {
        // create a mock dispatch function
        let dispatch = jest.fn();

        // mock the api
        let mockGetAllTodos = jest.spyOn(taskListApi, 'getAllTodos').mockImplementation(() => Promise.resolve({
            foo: 'bar',
        }));

        // call the action with the mock dispatch and get the response
        let promise = getTasksFromServer()(dispatch);

        // restore the mock
        mockGetAllTodos.mockRestore();

        // asserts
        expect(dispatch.mock.calls[0][0]).toEqual({
            type: 'SET_IS_LOADING',
            payload: true,
        });
        expect(dispatch.mock.calls[1][0]).toEqual({
            type: 'SHOW_ERROR',
            payload: '',
        });

        // wait for promise to end and do more asserts
        return promise.then(() => {
            expect(dispatch.mock.calls[2][0]).toEqual({
                type: 'ADD_MULTIPLE_TASKS',
                payload: {
                    foo: 'bar',
                },
            });
            expect(dispatch.mock.calls[3][0]).toEqual({
                type: 'SET_IS_LOADING',
                payload: false,
            });
        });
    });
});

describe('addTask', () => {
    it('add new task to the list. success flow', () => {
        let dispatch = jest.fn();

        let mockAddTask = jest.spyOn(taskListApi, 'addTask').mockImplementation(() => Promise.resolve({
            name: 'foo',
        }));

        let promise = addTask({foo: 'bar'})(dispatch);

        expect(dispatch.mock.calls[0][0]).toEqual({
            type: 'SET_IS_LOADING',
            payload: true,
        });
        expect(dispatch.mock.calls[1][0]).toEqual({
            type: 'SHOW_ERROR',
            payload: '',
        });

        return promise.then(() => {
            expect(dispatch.mock.calls[2][0]).toEqual({
                type: 'ADD_TASK',
                payload: {
                    name: 'foo',
                },
            });
            expect(dispatch.mock.calls[3][0]).toEqual({
                type: 'SET_IS_LOADING',
                payload: false,
            });
        });
    });

    it('add new task to the list. fail flow', () => {
        let dispatch = jest.fn();

        let mockAddTask = jest.spyOn(taskListApi, 'addTask').mockImplementation(() => Promise.reject());

        let promise = addTask({foo: 'bar'})(dispatch);

        expect(dispatch.mock.calls[0][0]).toEqual({
            type: 'SET_IS_LOADING',
            payload: true,
        });
        expect(dispatch.mock.calls[1][0]).toEqual({
            type: 'SHOW_ERROR',
            payload: '',
        });

        return promise.then(() => {
            expect(dispatch.mock.calls[2][0]).toEqual({
                type: 'SHOW_ERROR',
                payload: 'SERVER ERROR.',
            });
            expect(dispatch.mock.calls[3][0]).toEqual({
                type: 'SET_IS_LOADING',
                payload: false,
            });
        });
    });
});
