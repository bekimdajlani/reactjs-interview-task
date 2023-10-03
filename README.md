# Getting Started with the task

In the project directory, you can run:

## `npm install`
Installs necessary dependencies for project to run
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Click Create Category 
A modal will pop up which makes possible to name the category we are creating the structure of category will have an id a name and an empty array for notes to be added.Click Add Category for category to be added.

## Add Note
Click Category in which we want to add a new note and on the right at add note section user input is got.
Click Add Note the note will be added to the seleced category.
Note cannot be added if there is no categories.

## Click on the note
It shows the note full text on the right and it is editable or can be deleted.
Click save Changes the note will be edited.
Click Delete Note the note will be deleted.

## Click Create Note Button
Opens on the right Add Note section and it ads new note to the last clicked Category

## i.
App needs a login and logout using https so each user has its own account where their data is showing after authentication.The state of field validity can be managed thorugh context in this case.
User input validation to protect against SQL injection when working with databases.
Sensitive data should be encrypted in datavases and during transfer.
Avoid revealing system details in error messages.

## ii.
Instead of contex we will use redux which manages state better supports middleware for better hadling side-effects and it prevets unnecessary re-renders.
If possible the app should be broken in small pieces which can be mantained individually.
Load balancing should be monitored and incoming traffic to be distributed across multiple servers so that one server is not overwhelmed with requests.
Pacakages for data to be processed asynchronously should be added.
Implement backup servers and fail mechanisms to redirect traffic in case of failures.

