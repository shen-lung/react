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
    "id": 123,
    "name": "todo name",
    "status": "todo"
}
```

* get all the todo tasks (accessed via GET from http://localhost:8080/todos) (available query params: **q** _String_, **deleted** _Boolean_)

response:
```
[
    {
        "id": 123,
        "name": "todo name",
        "status": "todo"
    },
    {
        "id": 456,
        "name": "todo name 2",
        "status": "completed"
    }
]
```

* get an specific todo (accessed via GET from http://localhost:8080/todos/:todoId)

response:
```
{
    "id": 123,
    "name": "todo name",
    "status": "todo"
}
```

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

response:
```
{
    "id": 123,
    "name": "todo name",
    "status": "todo"
}
```

* delete the todo this id (accessed via DELETE on http://localhost:8080/todos/:todoId)

## Additional Notes

* wipe your local database

```
rm data/_todos.json
```
