const fs = require('fs');
const path = require('path');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

// Using a JSON file as our 'database'
const _ORIGINAL_TODOS_FILE = path.join(__dirname, '../data/todos.json');
const TODOS_FILE = path.join(__dirname, '../data/_todos.json');
fs.createReadStream(_ORIGINAL_TODOS_FILE).pipe(fs.createWriteStream(TODOS_FILE));

const getTodos = (callback) => {
    fs.readFile(TODOS_FILE, (err, fileContents) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }

        callback(JSON.parse(fileContents));
    });
}

const saveTodos = (todos, callback) => {
    fs.writeFile(TODOS_FILE, JSON.stringify(todos, null, 4), (err) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }

        callback();
    });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// allow for cross-origin API requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});

// routes that end in /todos
router.route('/todos')

    // create an todo (accessed via POST to http://localhost:8080/todos)
    .post((req, res) => {
        getTodos((todos) => {
            let todo = {
                id: Date.now(),
                status: 'todo',
                name: req.body.name,
            };

            todos = [...todos, todo];
            // write out file back to disk
            saveTodos(todos, () => {
                res.json({
                    success: true,
                    id: todo.id,
                });
            });
        });
    })

    // get all the todos (access via GET from http://localhost:8080/todos)
    .get((req, res) => {
        getTodos((todos) => {
            let {deleted, q} = req.query;
            let processedTodos = _.chain(todos)
                .filter((todo) => {
                    if (deleted === 'true') {
                        return todo.deleted;
                    }
                    return !todo.deleted;
                })
                .filter((todo) => {
                    if (q) {
                        return todo.name.toLowerCase().indexOf(q.toLowerCase()) > -1;
                    }
                    return true;
                })
                .reverse()
                .value();

            // Return back the full list of todos
            res.setHeader('Cache-Control', 'no-cache');
            res.json(processedTodos);
        });
    });

// routes that end in todos/:emailId
router.route('/todos/:todoId')

    // get the todo with this id (accessed via GET from http://localhost:8080/todos/:todoId)
    .get((req, res) => {
        getTodos((todos) => {
            let todoId = +req.params.todoId;
            let todo = _.find(todos, (todo) => todo.id === todoId);

            res.json(todo);
        });
    })

    // update the todo this id (accessed via PUT on http://localhost:8080/todos/:todoId)
    .put((req, res) => {
        getTodos((todos) => {
            let todoId = +req.params.todoId;
            // make a new copy of the todos list, updating the appropriate todo
            let updatedTodos = todos.map((todo) => {
                if (todo.id === todoId) {
                    if (_.has(req.body, 'status')) {
                        todo = {
                            ...todo,
                            status: req.body.status
                        };
                    }
                }

                return todo;
            });

            saveTodos(updatedTodos, () => {
                res.json({success: true});
            });
        });
    })

    // delete the todo this id (accessed via PUT on http://localhost:8080/todos/:todoId)
    .delete((req, res) => {
        getTodos((todos) => {
            let todoId = +req.params.todoId;
            // make a new copy of the todos list, marking the appropriate todo as deleted
            let updatedEmails = todos.map((todo) => {
                if (todo.id === todoId) {
                    // make a copy of the todo to update before updating
                    return {
                        ...todo,
                        deleted: true
                    }
                }

                return todo;
            });

            saveTodos(updatedEmails, () => {
                res.json({success: true});
            });
        });
    });

// Register the routes
app.use('/', router);

app.get('/ping', (req, res) => {
    res.json({success: true});
});

app.listen(port, () => {
    console.log('Server started: http://localhost:' + port + '/');
});
