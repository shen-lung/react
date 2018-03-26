# Exercises

## Counter application :white_check_mark:

Create a counter application using redux in where the screen has three buttons, one for adding a number, one for subtracting a number and one for resetting the state to 0

## TODO list application :white_check_mark:

Create a TODO list application using redux in where there is an input text field in where I can write the task and a "Add Task" button for adding that task to the list. Also, I would like to be able to mark the tasks as completed by clicking on a button right next to the task. NOTE: task status should be displayed right next to task name

### TODO list application v2 :white_check_mark:

To the existing TODO list application add a button to put back the task in a TODO state and also a "Remove" button so I can delete them if I made a mistake

Add also a label with the amount of task I have on the list and how many of them are in TODO and COMPLETED

Bonus point: simulate that our backend is a server. That means that adding, marking as completed, marking as todo and removing a task need to be async. To do this every action should take 3 seconds to complete and all the buttons / input text field should be disabled so I cannot do another action at the same time. It would be really great if while buttons are disabled, a label appear with the legend "syncing" so we can know something is going on underneath the app

## Go home feature :white_check_mark:

In both Calculation and TaskList applications add a "home" button that will send us to `/` (you need to use `goToHome` redux action)
