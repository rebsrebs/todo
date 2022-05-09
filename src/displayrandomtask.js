import { allTasksArray } from "./projectmanager";
import { v4 as uuidv4 } from 'uuid';

function removeChildElements(parent){
  while (parent.firstChild) {
     parent.firstChild.remove()
  }
}

function displayRandomTask() {

  // pick random task
  var min = 0;
  var max = allTasksArray.length-1;
  min = Math.ceil(min);
  max = Math.floor(max)
  const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(min);
  console.log(max);
  console.log(randomIndex);
  console.log(allTasksArray[randomIndex]);

  // display random task

  // clear main area
  const main = document.getElementById('main');
  removeChildElements(main);

  // create random task header
  const randomTaskHeader = document.createElement('h2');
  // see about this class name, should it be the same as others?
  randomTaskHeader.classList.add('mainprojectheader');
  randomTaskHeader.id = 'randomtaskheader';
  randomTaskHeader.textContent = 'Random Task';

  // display random task
  // this should actually be it's own function! but for now:

  // create a task row with its own unique ID
  let taskRow = document.createElement('div');
  taskRow.classList.add('maintaskrow');
  let uniqueID = uuidv4();
  taskRow.id = `taskrow-${uniqueID}`;

  // inside task row
  // create checkbox with related ID
  let taskCheckBoxLabel = document.createElement('label');
  taskCheckBoxLabel.setAttribute("for", `checkbox-${uniqueID}`);
  taskCheckBoxLabel.classList.add('taskcheckboxlabel');
  let taskCheckBox = document.createElement('input');
  taskCheckBox.setAttribute("type", "checkbox");
  taskCheckBox.id=`checkbox-${uniqueID}`;
  taskCheckBox.classList.add('taskrowgriditem')
  taskCheckBox.classList.add('taskrowcheckbox')
  taskCheckBox.textContent = '*';

  // display task title
  let taskTitleDisplay = document.createElement('div');
  taskTitleDisplay.classList.add('taskrowgriditem')
  taskTitleDisplay.classList.add('taskrowtitle')
  taskTitleDisplay.textContent = allTasksArray[randomIndex].tTitle;

  // display task due date
  let taskDueDateDisplay = document.createElement('div');
  taskDueDateDisplay.classList.add('taskrowgriditem')
  taskDueDateDisplay.classList.add('taskrowduedate')
  taskDueDateDisplay.textContent = allTasksArray[randomIndex].tDueDate;

  main.appendChild(randomTaskHeader);
  main.appendChild(taskRow);
  taskRow.appendChild(taskCheckBoxLabel);
  taskCheckBoxLabel.appendChild(taskCheckBox);
  taskRow.appendChild(taskTitleDisplay);
  taskRow.appendChild(taskDueDateDisplay);
}

export { displayRandomTask };