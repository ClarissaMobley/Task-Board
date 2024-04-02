
// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = parseInt(localStorage.getItem("nextId")) || 1;

const taskForm = $("#taskForm");
const inputTitle = $("#formTitle");
const inputDueDate = $("#formDate");
const inputDescription = $("#formDescription");

// Function to generate a unique task id
function generateTaskId() {
    const id = nextId++;
    localStorage.setItem("nextId", nextId);
    return id;
}

// Function to create a task card
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
            $card.addClass("bg-danger text-white");
        } else if (taskDueDate.isSame(currentDate, "day")) {
            $card.addClass("bg-warning text-white");
        } else if (taskDueDate.isAfter(currentDate, "day")) {
            $card.addClass("bg-light text-dark");
        }
    }

    $cardBody.append($cardTitle, $cardText, $cardDueDate, $deleteButton);
    $card.append($cardBody);

    return $card;
}

// Function to render the task list and make cards draggable
function renderTaskList() {
    $(".lane .card").remove();

    for (const task of taskList) {
        const $taskCard = createTaskCard(task);

        if (task.status === "to-do") {
            $("#todo-cards").append($taskCard);
        } else if (task.status === "in-progress") {
            $("#in-progress-cards").append($taskCard);
        } else if (task.status === "done") {
            $("#done-cards").append($taskCard);
        }
    }

    $(".card").draggable({
        revert: "invalid",
        helper: "clone",
        zIndex: 100
    });

    $(".lane").droppable({
        accept: ".draggable",
        drop: handleDrop,
    });
}


// Function to handle adding a new task
function handleAddTask(event) {
    event.preventDefault();

    const title = inputTitle.val().trim();
    const dueDate = inputDueDate.val().trim();
    const description = inputDescription.val().trim();

    if (!title || !dueDate || !description) {
        alert("Please fill out all fields.");
        return;
    }

    const newTask = {
        id: generateTaskId(),
        title: title,
        dueDate: dueDate,
        description: description,
        status: "to-do"
    };

    taskList.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(taskList)); // Update local storage

    renderTaskList();

    // Clear input fields
    inputTitle.val("");
    inputDueDate.val("");
    inputDescription.val("");

    // Close the modal
    $("#formModal").modal("hide");
}


// Function to handle deleting a task
function handleDeleteTask(event) {
    event.preventDefault();
    const taskId = $(event.currentTarget).closest('.card').attr("id");
    taskList = taskList.filter(task => task.id !== parseInt(taskId));
    localStorage.setItem("tasks", JSON.stringify(taskList));
    renderTaskList();
}

// Event listener for adding a new task
$("#addTaskButton").click(handleAddTask);


// Function to handle dropping a task card into a lane
function handleDrop(event, ui) {
    const taskId = ui.helper.attr("id");
    const laneId = $(event.target).attr("id");

    const task = taskList.find(task => task.id === parseInt(taskId));
    task.status = laneId;

    localStorage.setItem("tasks", JSON.stringify(taskList));
    renderTaskList();
    
}

// When the page loads, render the task list and set up event listeners
$(document).ready(function () {
    renderTaskList();
    if (!inputDueDate.hasClass('hasDatepicker')) {
        inputDueDate.datepicker({
            dateFormat: "yy-mm-dd"
        });

    }
});
