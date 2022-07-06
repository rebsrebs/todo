import { projectArray, allTasksArray } from "./projectmanager";
import { ntform } from "./forms";
import { deleteTask } from "./projectmanager.js";
import { editTaskForm } from "./forms";
import Trash from './images/trash-2.svg';
import Plus from './images/plus-circle-black.svg';
import Edit from './images/edit.svg';
import Magnify from './images/zoom-in.svg';
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
// END MAIN PROJECT LAYOUT

// FILL MAIN HEADER
function fillMainHeader(text) {
  const mainHeader = document.querySelector('.mainheader');
  mainHeader.textContent = text;
}
// END FILL MAIN HEADER

// FILL DESCRIPTION
function fillMainDescription(text) {
  const mainDescription = document.querySelector('.maindescription');
  mainDescription.textContent = text;
}
// END FILL DESCRIPTION

// DISPLAY TASK IN MAIN AREA
function displayTask(task) {
  // get main area
  const mainTaskArea = document.querySelector('.maintaskarea');
  // create task box
  const taskBox = document.createElement('div');
  taskBox.classList.add('maintaskbox');
  console.log(`The task ID is ${task.taskUUID}`);
  taskBox.id = `taskbox-${task.taskUUID}`;
  // put task box in main task area
  mainTaskArea.appendChild(taskBox);
  // create task row
  taskBox.appendChild(createTaskRow(task));
  // create detail row, append, and hide it
  const taskDetailRow = document.createElement('div');
  taskBox.appendChild(taskDetailRow);
  taskDetailRow.id = `taskdetailrow-${task.taskUUID}`;
  taskDetailRow.classList.add('visuallyhidden');
  // create edit row, append, and hide it
  const taskEditRow = document.createElement('div');
  taskBox.appendChild(taskEditRow);
  taskEditRow.id = `taskeditrow-${task.taskUUID}`; 
  taskEditRow.classList.add('visuallyhidden');
}
// END DISPLAY TASK IN MAIN AREA

// MAKE A TASK ROW
function createTaskRow(task) {
  // create task row
  const taskRow = document.createElement('div');
  taskRow.classList.add('maintaskrow');
  taskRow.id = (`taskrow-${task.taskUUID}`);
  // assign color based on priority
  switch (task.tPriority) {
    case 'Urgent':
      taskRow.classList.add('p1');
      break;
    case 'High':
      taskRow.classList.add('p2');
      break;
    case 'Medium':
      taskRow.classList.add('p3');
        break;
    case 'Low':
      taskRow.classList.add('p4');
        break;
  }
  // create task checkbox div inside task row
  let taskCheckBoxDiv = document.createElement('div');
  taskCheckBoxDiv.classList.add('taskcheckboxdiv');
  // task checkbox label
  let taskCheckBoxLabel = document.createElement('label');
  taskCheckBoxLabel.setAttribute("for", `checkbox-${task.taskUUID}`);
  taskCheckBoxLabel.classList.add('taskcheckboxlabel');
  // taskcheckbox
  let taskCheckBox = document.createElement('input');
  taskCheckBox.setAttribute("type", "checkbox");
  taskCheckBox.id=`checkbox-${task.taskUUID}`;
  taskCheckBox.classList.add('taskcheckbox');
  // event listener for task checkbox
  taskCheckBox.addEventListener('change', function() {
    if (taskCheckBox.checked == true) {
      console.log("Checkbox is checked..");
      taskTitleDisplay.classList.remove('undone');
      taskDueDateDisplay.classList.remove('undone');
      taskTitleDisplay.classList.add('completed')
      taskDueDateDisplay.classList.add('completed')
      // change task status to closed
      task.tStatus = 'closed';
      console.log(`task status is ${task.tStatus}`);
    } else {
      taskTitleDisplay.classList.remove('completed');
      taskDueDateDisplay.classList.remove('completed');
      taskTitleDisplay.classList.add('undone');
      taskDueDateDisplay.classList.add('undone');
      console.log("Checkbox is not checked..");
      // change task status to open
      task.tStatus = 'open';
      console.log(`task status is ${task.tStatus}`);
    }
  });
  // task item grid
  let taskItemGrid = document.createElement('div');
  taskItemGrid.classList.add('taskitemgrid');
  // task title
  let taskTitleDisplay = document.createElement('p');
  taskTitleDisplay.classList.add('taskrowgriditem')
  taskTitleDisplay.classList.add('taskrowtitle')
  taskTitleDisplay.id = `taskrowtitle-${task.taskUUID}`;
  taskTitleDisplay.textContent = task.tTitle;
  // task due date
  let taskDueDateDisplay = document.createElement('p');
  taskDueDateDisplay.classList.add('taskrowgriditem')
  taskDueDateDisplay.classList.add('taskrowduedate')
  taskDueDateDisplay.id = `taskrowduedate-${task.taskUUID}`;
  taskDueDateDisplay.textContent = task.tDueDate;
  // taskDueDateDisplay.textContent = (new Date(task.tDueDate)).toDateString();
  console.log(new Date(task.tDueDate).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}))
  console.log(task.tDueDate);
  // Delete icon
  const myTrash = new Image();
  myTrash.src = Trash;
  myTrash.classList.add('icon');
  myTrash.classList.add('taskrowgriditem');
  let taskDelete = document.createElement('div');
  taskDelete.classList.add('taskrowicon');
  taskDelete.appendChild(myTrash);
  taskDelete.addEventListener('click', function() {
    console.log('X was clicked');
    deleteTask(task);
  });
  // Magnifying icon
  const myMagnify = new Image();
  myMagnify.src = Magnify;
  myMagnify.classList.add('icon');
  myMagnify.classList.add('taskrowgriditem');
  let taskMagnify = document.createElement('div');
  taskMagnify.classList.add('taskrowicon');
  taskMagnify.appendChild(myMagnify);
  console.log(`task id is ${task.taskUUID}`);
  // Edit icon
  const myEdit = new Image();
  myEdit.src = Edit;
  myEdit.classList.add('icon');
  myEdit.classList.add('taskrowgriditem');
  let taskEdit = document.createElement('div');
  taskEdit.classList.add('taskrowicon');
  taskEdit.appendChild(myEdit);
  // put the row together
  taskRow.appendChild(taskCheckBoxDiv);
  taskCheckBoxDiv.appendChild(taskCheckBoxLabel);
  taskCheckBoxLabel.appendChild(taskCheckBox);
  taskRow.appendChild(taskItemGrid);
  taskItemGrid.appendChild(taskTitleDisplay);
  taskItemGrid.appendChild(taskDueDateDisplay);
  taskItemGrid.appendChild(taskMagnify);
  taskItemGrid.appendChild(taskEdit);
  taskItemGrid.appendChild(taskDelete);
  // EVENT LISTENER - when you click magnify icon in task row to see details
  taskMagnify.addEventListener('click', function() {
    let theTaskEditRow = document.getElementById(`taskeditrow-${task.taskUUID}`);
    removeChildElements(theTaskEditRow);
    theTaskEditRow.classList.add('visuallyhidden');
    let theTaskDetailRow = document.getElementById(`taskdetailrow-${task.taskUUID}`);
    theTaskDetailRow.classList.remove('visuallyhidden');
    removeChildElements(theTaskDetailRow);
    theTaskDetailRow.appendChild(createTaskDetailArea(task));
  });
  // EVENT LISTENER - when you click edit icon in task row
  taskEdit.addEventListener('click', function() {
    let theTaskDetailRow = document.getElementById(`taskdetailrow-${task.taskUUID}`);
    removeChildElements(theTaskDetailRow);
    theTaskDetailRow.classList.add('visuallyhidden');
    let theTaskEditRow = document.getElementById(`taskeditrow-${task.taskUUID}`);
    removeChildElements(theTaskEditRow);
    theTaskEditRow.classList.remove('visuallyhidden');
    theTaskEditRow.appendChild(editTaskForm(task));
  });
return taskRow;
}
// END MAKE A TASK ROW

// CREATE TASK DETAIL AREA
function createTaskDetailArea(task) {
  // Detail Area - starts out hidden
  let taskDetailArea = document.createElement('div');
  taskDetailArea.classList.add('taskdetailarea');
  // taskDetailArea.classList.add('hidden');
  taskDetailArea.id = `detailarea-${task.taskUUID}`;
  // create heading
  const taskDetailHeading = document.createElement('h4');
  taskDetailHeading.textContent = 'Task Details:'
  taskDetailHeading.classList.add('formheading');
  // Task Detail Grid
  let taskDetailGrid = document.createElement('div');
  taskDetailGrid.classList.add('taskdetailgrid');
  // Title Row
  let detailTitleLabel = document.createElement('p');
  detailTitleLabel.classList.add('detaillabel');
  detailTitleLabel.textContent = 'Title:';
  let detailTitle = document.createElement('p');
  detailTitle.classList.add('detailvalue');
  detailTitle.textContent = task.tTitle;
  // Description Row
  let detailDescriptionLabel = document.createElement('p');
  detailDescriptionLabel.classList.add('detaillabel');
  detailDescriptionLabel.textContent = 'Description:';
  let detailDescription = document.createElement('p');
  detailDescription.classList.add('detailvalue');
  detailDescription.textContent = task.tDescription;
  // Date Row
  let detailDateLabel = document.createElement('p');
  detailDateLabel.classList.add('detaillabel');
  detailDateLabel.textContent = 'Due Date:';
  let detailDate = document.createElement('p');
  detailDate.classList.add('detailvalue');
  detailDate.textContent = task.tDueDate;
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
  //added code below to fix displaying project after task has been edited
  const index = projectArray.map(e => e.projectUUID).indexOf(task.tAssociatedProject);
  detailProject.textContent = projectArray[index].pTitle;
  // Button row
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');
  // Buttons
  let taskDetailEdit = document.createElement('button');
  taskDetailEdit.classList.add('taskdetailbutton');
  taskDetailEdit.textContent = 'Edit';
  let taskDetailClose = document.createElement('button');
  taskDetailClose.classList.add('taskdetailbutton');
  taskDetailClose.textContent = 'Close';
      // event listener for edit button
      taskDetailEdit.addEventListener('click', function() {
        console.log('Task detail edit button was clicked');
        let theTaskDetailRow = document.getElementById(`taskdetailrow-${task.taskUUID}`);
        removeChildElements(theTaskDetailRow);
        theTaskDetailRow.classList.add('visuallyhidden');
        let theTaskEditRow = document.getElementById(`taskeditrow-${task.taskUUID}`);
        removeChildElements(theTaskEditRow);
        theTaskEditRow.classList.remove('visuallyhidden');
        theTaskEditRow.appendChild(editTaskForm(task));
      });
      // event listener for close button
      taskDetailClose.addEventListener('click', function() {
        console.log('task detail close button was clicked');
        removeChildElements(taskDetailArea);
        taskDetailArea.classList.add('visuallyhidden');
      });
  // put detail area together
  taskDetailArea.appendChild(taskDetailHeading);
  taskDetailArea.appendChild(taskDetailGrid);
  taskDetailGrid.appendChild(detailTitleLabel);
  taskDetailGrid.appendChild(detailTitle);
  taskDetailGrid.appendChild(detailDescriptionLabel);
  taskDetailGrid.appendChild(detailDescription);
  taskDetailGrid.appendChild(detailDateLabel);
  taskDetailGrid.appendChild(detailDate);
  taskDetailGrid.appendChild(detailPriorityLabel);
  taskDetailGrid.appendChild(detailPriority);
  taskDetailGrid.appendChild(detailProjectLabel);
  taskDetailGrid.appendChild(detailProject);
  taskDetailGrid.appendChild(buttonsDiv);
  buttonsDiv.appendChild(taskDetailEdit);
  buttonsDiv.appendChild(taskDetailClose);
  return taskDetailArea;
}

// DISPLAY A PROJECT IN MAIN AREA
function displayOneProject(project){
  console.log(`The length of the project to display's taskArray is ${project.taskArray.length}`);

  mainProjectLayout();
  const mainTaskArea = document.querySelector('.maintaskarea');

  // in this function, it appends it to main
  fillMainHeader(project.pTitle);

  // display project description
  fillMainDescription(project.pDescription);

  // loop over this project's task array
  for (var i = 0; i < project.taskArray.length; i++) {
    displayTask(project.taskArray[i]);
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

// FOR LATER
// RANDOM TASK
// function pickRandomTask() {
//   // set min and max as lowest and highest index numbers
//   var min = 0;
//   var max = allTasksArray.length-1;
//   min = Math.ceil(min);
//   max = Math.floor(max)
//   const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
//   // generate random index number
//   console.log(allTasksArray[randomIndex]);
//   return randomIndex;
// }

// function displayARandomTask() {
//   removeChildElements(main);
//   // pick random task from allTasksArray
//   let randomIndex = pickRandomTask();
//   // create header for main area
//   fillMainHeader('Random Task');
//   // create row for random task
//   createTaskRow(allTasksArray[randomIndex]);
// }



export { mainProjectLayout, removeChildElements, displayOneProject, main, createTaskRow };