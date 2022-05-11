import { allTasksArray } from "./projectmanager";
import { v4 as uuidv4 } from 'uuid';
import { ntform } from "./forms";
import { deleteTask } from "./projectmanager.js";

const main = document.getElementById('main');

function removeChildElements(parent) {
  while (parent.firstChild) {
     parent.firstChild.remove()
  }
}


// LAYOUT OF MAIN AREA

// LAYOUT PROJECT AREA
function mainProjectLayout() {
  const main = document.getElementById('main');
  removeChildElements(main);
  const mainHeader = document.createElement('h2');
  mainHeader.classList.add('mainheader');
  const mainDescription = document.createElement('div');
  mainDescription.classList.add('maindescription');
  const mainTaskArea = document.createElement('div');
  mainTaskArea.classList.add('maintaskarea');
  main.appendChild(mainHeader);
  main.appendChild(mainDescription);
  main.appendChild(mainTaskArea);
}

// FILL MAIN HEADER
function fillMainHeader(text) {
  const mainHeader = document.querySelector('.mainheader');
  mainHeader.textContent = text;
}

// FILL DESCRIPTION
function fillMainDescription(text) {
  const mainDescription = document.querySelector('.maindescription');
  mainDescription.textContent = text;
}

// MAKE A TASK ROW
function createTaskRow(task) {

  const mainTaskArea = document.querySelector('.maintaskarea');

  // task rows
  const taskRow = document.createElement('div');
  taskRow.classList.add('maintaskrow');
  const uniqueID = uuidv4();
  taskRow.id = `taskrow-${uniqueID}`;

  // task checkbox
  let taskCheckBoxLabel = document.createElement('label');
  taskCheckBoxLabel.setAttribute("for", `checkbox-${uniqueID}`);
  taskCheckBoxLabel.classList.add('taskcheckboxlabel');
  let taskCheckBox = document.createElement('input');
  taskCheckBox.setAttribute("type", "checkbox");
  taskCheckBox.id=`checkbox-${uniqueID}`;
  taskCheckBox.classList.add('taskrowgriditem')
  taskCheckBox.classList.add('taskrowcheckbox')

  taskCheckBox.addEventListener('change', function() {
    if (taskCheckBox.checked == true) {
      console.log("Checkbox is checked..");
      taskTitleDisplay.classList.remove('undone');
      taskTitleDisplay.classList.add('completed')
      // change task status to closed
    } else {
      taskTitleDisplay.classList.remove('completed');
      taskTitleDisplay.classList.add('undone');
      console.log("Checkbox is not checked..");
      // change task status to open
    }
  });

  // task title
  let taskTitleDisplay = document.createElement('div');
  taskTitleDisplay.classList.add('taskrowgriditem')
  taskTitleDisplay.classList.add('taskrowtitle')
  taskTitleDisplay.textContent = task.tTitle;

  // task due date
  let taskDueDateDisplay = document.createElement('div');
  taskDueDateDisplay.classList.add('taskrowgriditem')
  taskDueDateDisplay.classList.add('taskrowduedate')
  taskDueDateDisplay.textContent = task.tDueDate;

  // X Out
  let taskDelete = document.createElement('div');
  taskDelete.classList.add('delete');
  taskDelete.textContent='X';

  taskDelete.addEventListener('click', function() {
    deleteTask(task);
  });
  


  // put it together
  mainTaskArea.appendChild(taskRow);
  taskRow.appendChild(taskCheckBoxLabel);
  taskCheckBoxLabel.appendChild(taskCheckBox);
  taskRow.appendChild(taskTitleDisplay);
  taskRow.appendChild(taskDueDateDisplay);
  taskRow.appendChild(taskDelete);
}

// RANDOM TASK
function pickRandomTask() {
  // set min and max as lowest and highest index numbers
  var min = 0;
  var max = allTasksArray.length-1;
  min = Math.ceil(min);
  max = Math.floor(max)
  const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
  // generate random index number
  console.log(allTasksArray[randomIndex]);
  return randomIndex;
}

function displayARandomTask() {
  removeChildElements(main);
  // pick random task from allTasksArray
  let randomIndex = pickRandomTask();
  // create header for main area
  fillMainHeader('Random Task');
  // create row for random task
  createTaskRow(allTasksArray[randomIndex]);
}


// DISPLAY A PROJECT IN MAIN AREA

function displayOneProject(project){

  mainProjectLayout();
  const mainTaskArea = document.querySelector('.maintaskarea');

  // in this function, it appends it to main
  fillMainHeader(project.pTitle);

  // display project description
  fillMainDescription(project.pDescription);

  // loop over this project's task array
  // for (var i = 0; i < projectArray[index].taskArray.length; i++) {
  for (var i = 0; i < project.taskArray.length; i++) {
    createTaskRow(project.taskArray[i]);
  }

  // add row with an add task button that saves task to this project
  const addTaskRow = document.createElement('div');
  addTaskRow.classList.add('maintaskrow');

  // inside row, add plus sign on the left
  const plusSignDiv = document.createElement('p');
  plusSignDiv.classList.add('plussigndiv');
  plusSignDiv.textContent = '+';

  // add add task button
  const addTaskButton = document.createElement('button');
  addTaskButton.classList.add('addtaskbutton');
  addTaskButton.textContent = 'Add task ...';
  addTaskButton.id = `addtoproject${project.projectUUID};`
  // put ID of this button as something related to the project it's in
  // event listener for new project button
  addTaskButton.addEventListener('click', function() {
    const main = document.getElementById('main');
    main.appendChild(ntform(project));
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'visible';
  });

  // put plus sign and button inside row
  addTaskRow.appendChild(plusSignDiv);
  addTaskRow.appendChild(addTaskButton);

  // put row at the end of task list
  mainTaskArea.appendChild(addTaskRow);

}




export { mainProjectLayout, removeChildElements, displayOneProject, pickRandomTask, displayARandomTask, main };