import { allTasksArray } from "./projectmanager";
import { v4 as uuidv4 } from 'uuid';
import { ntform } from "./forms";
import { deleteTask } from "./projectmanager.js";
import Trash from './images/trash-2.svg';
import Plus from './images/plus-circle-black.svg';
import Edit from './images/edit.svg';

// import PlusRed from './images/plus-circle.red.svg';

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

  // task box
  const taskBox = document.createElement('div');
  taskBox.classList.add('maintaskbox');
  const uniqueID = uuidv4();
  taskBox.id = `taskbox-${uniqueID}`;
  task.tBoxID = uniqueID;
  console.log(task.tBoxID);
  

  // task rows
  const taskRow = document.createElement('div');
  taskRow.classList.add('maintaskrow');


  // task checkbox div
  let taskCheckBoxDiv = document.createElement('div');
  taskCheckBoxDiv.classList.add('taskcheckboxdiv');
  // task checkbox label
  let taskCheckBoxLabel = document.createElement('label');
  taskCheckBoxLabel.setAttribute("for", `checkbox-${uniqueID}`);
  taskCheckBoxLabel.classList.add('taskcheckboxlabel');
  // taskcheckbox
  let taskCheckBox = document.createElement('input');
  taskCheckBox.setAttribute("type", "checkbox");
  taskCheckBox.id=`checkbox-${uniqueID}`;
  taskCheckBox.classList.add('taskcheckbox');

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

  // task item grid
  let taskItemGrid = document.createElement('div');
  taskItemGrid.classList.add('taskitemgrid');


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


  // Delete icon
  const myTrash = new Image();
  myTrash.src = Trash;
  myTrash.classList.add('icon');
  myTrash.classList.add('taskrowgriditem');
  let taskDelete = document.createElement('div');
  taskDelete.classList.add('taskrowtrash');
  taskDelete.appendChild(myTrash);
  taskDelete.addEventListener('click', function() {
    console.log('X was clicked');
    deleteTask(task);
  });

  // Edit icon
  const myEdit = new Image();
  myEdit.src = Edit;
  myEdit.classList.add('icon');
  myEdit.classList.add('taskrowgriditem');
  let taskEdit = document.createElement('div');
  taskEdit.classList.add('taskrowedit');
  taskEdit.appendChild(myEdit);
  taskEdit.addEventListener('click', function() {
    console.log('Edit was clicked');
    taskDetailArea.classList.remove('hidden');
  });

  // Detail Area - starts out hidden
  let taskDetailArea = document.createElement('div');
  taskDetailArea.classList.add('taskdetailarea');
  taskDetailArea.classList.add('hidden');
  taskDetailArea.id = `detailarea-${uniqueID}`;
  // Title Row
  let detailTitle = document.createElement('h4');
  detailTitle.classList.add('detailtitle');
  detailTitle.textContent = task.tTitle;
  // Task Detail Grid
  let taskDetailGrid = document.createElement('div');
  taskDetailGrid.classList.add('taskdetailgrid');
  // Date Row
  let detailDateLabel = document.createElement('p');
  detailDateLabel.classList.add('detaillabel');
  detailDateLabel.textContent = 'Due Date:';
  let detailDate = document.createElement('p');
  detailDate.classList.add('detailvalue');
  detailDate.textContent = task.tDueDate;
  // Description Row
  let detailDescriptionLabel = document.createElement('p');
  detailDescriptionLabel.classList.add('detaillabel');
  detailDescriptionLabel.textContent = 'Description:';
  let detailDescription = document.createElement('p');
  detailDescription.classList.add('detailvalue');
  detailDescription.textContent = task.tDescription;
  // Priority Row
  let detailPriorityLabel = document.createElement('p');
  detailPriorityLabel.classList.add('detaillabel');
  detailPriorityLabel.textContent = 'Priority:';
  let detailPriority = document.createElement('p');
  detailPriority.classList.add('detailvalue');
  detailPriority.textContent = task.tPriority;
  // Project Row
  let detailProjectLabel = document.createElement('p');
  detailProjectLabel.classList.add('detaillabel');
  detailProjectLabel.textContent = 'Project:';
  let detailProject = document.createElement('p');
  detailProject.classList.add('detailvalue');
  detailProject.textContent = task.tAssociatedProject.pTitle;
  // put detail area together
  taskDetailArea.appendChild(detailTitle);
  taskDetailArea.appendChild(taskDetailGrid);
  taskDetailGrid.appendChild(detailDateLabel);
  taskDetailGrid.appendChild(detailDate);
  taskDetailGrid.appendChild(detailDescriptionLabel);
  taskDetailGrid.appendChild(detailDescription);
  taskDetailGrid.appendChild(detailPriorityLabel);
  taskDetailGrid.appendChild(detailPriority);
  taskDetailGrid.appendChild(detailProjectLabel);
  taskDetailGrid.appendChild(detailProject);

  // put it together
  mainTaskArea.appendChild(taskBox);
  taskBox.appendChild(taskRow);
  taskRow.appendChild(taskCheckBoxDiv);
  taskCheckBoxDiv.appendChild(taskCheckBoxLabel);
  taskCheckBoxLabel.appendChild(taskCheckBox);
  taskRow.appendChild(taskItemGrid);
  taskItemGrid.appendChild(taskTitleDisplay);
  taskItemGrid.appendChild(taskDueDateDisplay);
  taskItemGrid.appendChild(taskEdit);
  taskItemGrid.appendChild(taskDelete);
  taskBox.appendChild(taskDetailArea);
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
  addTaskRow.classList.add('addtaskrow');

  // inside row, add plus sign on the left
  const myPlus = new Image();
  myPlus.src = Plus;
  myPlus.classList.add('icon');
  myPlus.classList.add('taskrowgriditem');

  // add add task button
  const addTaskText = document.createElement('p');
  addTaskText.classList.add('addtaskp');
  addTaskText.classList.add('taskrowgriditem');
  addTaskText.textContent = 'Add task ...';
  addTaskText.id = `addtoproject${project.projectUUID};`

  // event listener for adding a task
  addTaskRow.addEventListener('click', function() {
    const main = document.getElementById('main');
    main.appendChild(ntform(project));
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'visible';
  });

  // put plus sign and button inside row
  addTaskRow.appendChild(myPlus);
  addTaskRow.appendChild(addTaskText);

  // put row at the end of task list
  mainTaskArea.appendChild(addTaskRow);

}

// TASK DETAIL VIEW

function displayTaskDetails(task){
  // add a row to the row task?
  // or it should already have one but it's hidden!
}




export { mainProjectLayout, removeChildElements, displayOneProject, pickRandomTask, displayARandomTask, main };