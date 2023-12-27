// declare all variables
const addButton = document.querySelector(".btn-add");
const errorHandlingTaskInput = document.querySelector(".error-handling");
const taskInputField = document.querySelector("#add-task");
const taskCount = document.querySelector(".task-count");
const taskListContainer = document.querySelector(".task-list-container");
let counter = 0;

const displayTaskCounter = (counter) => {
   counter = Math.max(0, counter);
   taskCount.innerText = counter;
   console.log(counter);
};

const createTaskListElement = (taskName) => {
   return `
   <div class="task-list">
         <input type="checkbox" onchange="taskCheck(this)" class="task-check"/>
         <div class="task-name">${taskName}</div>
         <button class="edit-button" onclick="editTask(this)">Edit</button>
         <button class="delete-button" onclick="deleteTask(this)">Delete</button>
   </div>
   `;
};

const addTask = () => {
   const taskName = taskInputField.value.trim();
   errorHandlingTaskInput.style.display = "none";
   if (!taskName) {
      setTimeout(() => {
         errorHandlingTaskInput.style.display = "block";
      }, 200);
      return;
   }
   const taskList = createTaskListElement(taskName);
   taskListContainer.insertAdjacentHTML("beforeend", taskList);
   taskInputField.value = "";
   counter++;
   displayTaskCounter(counter);
};

const deleteTask = (deleteButton) => {
   const taskList = deleteButton.closest(".task-list");
   const taskInputCheckBox = taskList.querySelector(".task-check");
   taskList.remove();
   if (!taskInputCheckBox.checked) {
      counter--;
   }
   displayTaskCounter(counter);
};

const editTask = (editButton) => {
   const taskList = editButton.closest(".task-list");
   const taskName = taskList.querySelector(".task-name");
   const taskInputCheckBox = taskList.querySelector(".task-check");
   taskInputField.value = taskName?.innerText;
   taskList.remove();
   if (!taskInputCheckBox.checked) {
      counter--;
   }
   displayTaskCounter(counter);
};

const taskCheck = (inputChecked) => {
   const taskList = inputChecked.closest(".task-list");
   const taskInputCheckBox = taskList.querySelector(".task-check");
   taskInputCheckBox.classList.toggle("completed");
   taskInputCheckBox.checked ? counter-- : counter++;
   displayTaskCounter(counter);
};

addButton.addEventListener("click", addTask);

feather.replace();
