import { allTasksArray } from "./projectmanager";
import { v4 as uuidv4 } from 'uuid';

function removeChildElements(parent){
  while (parent.firstChild) {
     parent.firstChild.remove()
  }
}

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

  function createMainHeader(text) {
    const mainHeader = document.createElement('h2');
    mainHeader.classList.add('mainheader');
    mainHeader.textContent = text;
    const main = document.getElementById('main');
    main.appendChild(mainHeader);
  }


  function createTaskRow(task) {

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
    taskCheckBox.textContent = '*';

    // task checkbox
    let taskTitleDisplay = document.createElement('div');
    taskTitleDisplay.classList.add('taskrowgriditem')
    taskTitleDisplay.classList.add('taskrowtitle')
    taskTitleDisplay.textContent = task.tTitle;
  
    // task due date
    let taskDueDateDisplay = document.createElement('div');
    taskDueDateDisplay.classList.add('taskrowgriditem')
    taskDueDateDisplay.classList.add('taskrowduedate')
    taskDueDateDisplay.textContent = task.tDueDate;
  
    // put it together
    const main = document.getElementById('main');
    main.appendChild(taskRow);
    taskRow.appendChild(taskCheckBoxLabel);
    taskCheckBoxLabel.appendChild(taskCheckBox);
    taskRow.appendChild(taskTitleDisplay);
    taskRow.appendChild(taskDueDateDisplay);
  }


function displayARandomTask() {
  const main = document.getElementById('main');
  removeChildElements(main);
  // pick random task from allTasksArray
  let randomIndex = pickRandomTask();
  // create header for main area
  createMainHeader('Random Task');
  // create row for random task
  createTaskRow(allTasksArray[randomIndex]);
}




  

  export { pickRandomTask, createMainHeader, createTaskRow, displayARandomTask}