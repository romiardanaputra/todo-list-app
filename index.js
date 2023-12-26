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

   const taskList = `
   <div class="task-list">
       <input type="checkbox" class="task-check"/>
       <span class="task-name">${taskName}</span>
       <button class="edit-button"><i data-feather="edit-3"></i></button>
       <button class="delete-button"><i data-feather="x"></i></button>
   </div>
`;

   taskListContainer.insertAdjacentHTML("beforeend", taskList);
};

addButton.addEventListener("click", addTask);

feather.replace();
