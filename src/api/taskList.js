export const getAllTodos = () => (
    fetch('http://localhost:8080/todos').then(response => response.json())
)
