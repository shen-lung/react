export const getAllTodos = () => (
    fetch('http://localhost:8080/todos').then(response => response.json())
);

export const addTask = (taskName) => (
    fetch('http://localhost:8080/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: taskName,
        })
    }).then(response => response.json())
)

export const updateTaskStatus = (taskId, status) => (
    fetch(`http://localhost:8080/todos/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            status,
        })
    }).then(response => response.json())
)

export const deleteTask = (taskId) => (
    fetch(`http://localhost:8080/todos/${taskId}`, {
        method: 'DELETE',
    }).then(response => response.json())
)
