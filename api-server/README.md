## Installation
```sh
npm install
```

## Running
```sh
npm start
```

by default, application will run on port `8080` if you want to change it, you can run the app as `PORT=3000 npm start`

## Usage

* create a todo task (accessed via POST to http://localhost:8080/todos)

```
{
    "name": "todo name"
}
```

response:
```
{
    "success": true,
    "id": 123,
    "name": "todo name",
    "status": "todo"
}
```

* get all the todo tasks (accessed via GET from http://localhost:8080/todos) (available query params: **q** _String_, **deleted** _Boolean_)

* get an specific todo (accessed via GET from http://localhost:8080/todos/:todoId)

* update an specific todo (accessed via PUT on http://localhost:8080/todos/:todoId)

```
{
    "status": "completed"
}
```
```
{
    "status": "todo"
}
```

* delete the todo this id (accessed via DELETE on http://localhost:8080/todos/:todoId)
