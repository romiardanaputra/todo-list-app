// declare all variables
const addButton = document.querySelector(".btn-add");
const errorHandlingTaskInput = document.querySelector(".error-handling");
const taskInputField = document.querySelector("#add-task");
const taskCount = document.querySelector(".task-count");
const taskListContainer = document.querySelector(".task-list-container");
let counter = 0;

const displayTaskCounter = (counter) => {
   taskCount.innerText = counter;
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
};

const createTaskListElement = (taskName) => {
   return `
   <div class="task-list">
       <input type="checkbox" class="task-check"/>
       <span class="task-name">${taskName}</span>
       <div class="btn-wrappers">
         <button class="edit-button" onclick="editTask(this)">Edit</button>
         <button class="delete-button" onclick="deleteTask(this)">Delete</button>
       </div>
   </div>
   `;
};

const deleteTask = (deleteButton) => {
   const taskList = deleteButton.closest(".task-list");
   taskList.remove();
   counter--;
   displayTaskCounter(counter);
};

const editTask = (editButton) => {
   const taskList = editButton.closest(".task-list");
   const taskName = taskList.querySelector(".task-name");
   taskInputField.value = taskName?.innerText;
   taskList.remove();
   console.log(taskInputField.value);
};

addButton.addEventListener("click", addTask);

feather.replace();
