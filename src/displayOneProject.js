import { npform } from './newprojectform.js';
import { ntform } from './newtaskform.js';
import { projectArray } from './projectmanager.js';
import { v4 as uuidv4 } from 'uuid';

function removeChildElements(parent){
  while (parent.firstChild) {
     parent.firstChild.remove()
  }
}


// FUNCTION to display project info in main area when project link is clicked
function displayOneProject(project){

  // get project info from argument
  // console.log(link.id);
  // var index = link.id.substring(5);
  // console.log(index);

  // clear main content area
  const main = document.getElementById('main');
  removeChildElements(main);

  // display project title
  const projectHeader = document.createElement('h2');
  projectHeader.classList.add('mainprojectheader');
  // projectHeader.textContent = projectArray[index].pTitle;
  projectHeader.textContent = project.pTitle;
  main.appendChild(projectHeader);

  // display project description
  const projectDescription = document.createElement('div');
  projectDescription.classList.add('mainprojectdescription');
  // projectDescription.textContent = projectArray[index].pDescription;
  projectDescription.textContent = project.pDescription;
  main.appendChild(projectDescription);

  // create container for all tasks - a grid with 1 column
  const mainTaskArea = document.createElement('div');
  mainTaskArea.classList.add('maintaskarea');

  // loop over this project's task array
  // for (var i = 0; i < projectArray[index].taskArray.length; i++) {
    for (var i = 0; i < project.taskArray.length; i++) {

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
    taskTitleDisplay.textContent = project.taskArray[i].tTitle;

    // don't show description for now
    // let taskDescriptionDisplay = document.createElement('div');
    // taskDescriptionDisplay.classList.add('taskrowgriditem')
    // taskDescriptionDisplay.classList.add('taskrowdescription')
    // taskDescriptionDisplay.textContent = projectArray[index].taskArray[i].tDescription;

    // display task due date
    let taskDueDateDisplay = document.createElement('div');
    taskDueDateDisplay.classList.add('taskrowgriditem')
    taskDueDateDisplay.classList.add('taskrowduedate')
    taskDueDateDisplay.textContent = project.taskArray[i].tDueDate;

    // event listener for checkbox toggles styling
    // eventually have it toggle status
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
    
    taskCheckBoxLabel.appendChild(taskCheckBox);
    taskRow.appendChild(taskCheckBoxLabel);
    taskRow.appendChild(taskTitleDisplay);
    // taskRow.appendChild(taskDescriptionDisplay);
    taskRow.appendChild(taskDueDateDisplay);
    mainTaskArea.appendChild(taskRow);
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

  // put plus sign and button inside row
  addTaskRow.appendChild(plusSignDiv);
  addTaskRow.appendChild(addTaskButton);

  // put row at the end of task list
  mainTaskArea.appendChild(addTaskRow);

  // put task list in main area
  main.appendChild(mainTaskArea);
}

export { displayOneProject };