// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

const taskForm = $("#taskForm");
const inputTitle = $("#formTitle");
const inputDueDate = $("#formDueDate");
const inputDescription = $("#formDescription");

// Todo: create a function to generate a unique task id
function generateTaskId() {
    return nextId++;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const $card = $("<div>").addClass("card").attr("id", task.id);
    const $cardBody = $("<div>").addClass("card-body");
    const $cardTitle = $("<h5>").addClass("card-title").text(task.title);
    const $cardText = $("<p>").addClass("card-text").text(task.description);
    const $cardDueDate = $("<p>").addClass("card-text").text('Due Date: ' + task.dueDate);
    const $deleteButton = $("<button>").addClass("btn btn-danger").text("Delete");
    $deleteButton.click(handleDeleteTask);

    if (task.dueDate && task.status !== "done") {
        let taskDueDate = dayjs(task.dueDate, "YYYY-MM-DD");
        let currentDate = dayjs();

        if (taskDueDate.isBefore(currentDate, "day")) {
            $card.addClass("bg-light text-dark");
        } else if (taskDueDate.isSame(currentDate, "day")) {
            $card.addClass("bg-warning text-white");
        } else if (taskDueDate.isAfter(currentDate, "day")) {
            $card.addClass("bg-danger text-white");
        }
    }

    $cardBody.append($cardTitle, $cardText, $cardDueDate, $deleteButton);
    $card.append($cardBody);

    return $card;
}


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
     // TODO: Implement rendering of the task list and making cards draggable
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
     // TODO: Implement handling of adding a new task
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
     // TODO: Implement handling of deleting a task
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
     // TODO: Implement handling of dropping a task into a new status lane
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
     // TODO: Implement initial rendering of the task list, adding event listeners, making lanes droppable, and making the due date field a date picker
});

// Initial rendering of the task list
renderTaskList();

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    // TODO: Implement rendering of the task list and making cards draggable
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    // TODO: Implement handling of adding a new task
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    // TODO: Implement handling of deleting a task
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    // TODO: Implement handling of dropping a task into a new status lane
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // TODO: Implement initial rendering of the task list, adding event listeners, making lanes droppable, and making the due date field a date picker
});

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    
}

// Initial rendering of the task list
renderTaskList();{
    

}

// Todo: create a function to handle adding a new task


function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
