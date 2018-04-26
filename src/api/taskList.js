import {fetchVadim} from './base';

export const getAllTodos = () => (
    fetchVadim('http://localhost:8080/todos')
);

export const addTask = (taskName) => (
    fetchVadim('http://localhost:8080/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: taskName,
        })
    })
)

export const updateTaskStatus = (taskId, status) => (
    fetchVadim(`http://localhost:8080/todos/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            status,
        })
    })
)

export const deleteTask = (taskId) => (
    fetchVadim(`http://localhost:8080/todos/${taskId}`, {
        method: 'DELETE',
    })
)
