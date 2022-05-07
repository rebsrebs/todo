import { npform } from './newprojectform.js';
import { v4 as uuidv4 } from 'uuid';


let projectIdCounter = 0;





// PROJECT CLASS
class Project {
  taskIdCounter;
  taskArray = [];
  pTitle;
  pDescription;
  pDueDate;
  pStatus;
  projectID;
  projectUUID;

  constructor (pTitle, pDescription, pDueDate, pStatus) {
    this.pTitle = pTitle;
    this.pDescription = pDescription;
    this.pDueDate = pDueDate;
    this.pStatus = pStatus;
    this.projectID = projectIdCounter;
    this.projectUUID = uuidv4();
  }

  setStatus(pStatus) {
    this.pStatus = pStatus;
  }

  getStatus() {
    return this.pStatus;
  }

  addTask(task) {
    task.taskID = `${this.name}-Task-${taskIdCounter}`;
    taskIdCounter += taskIdCounter;
    task.associatedProject = this.pTitle;
    this.taskArray.push(task);
  }
  
}
// END PROJECT CLASS

// Define default project
const defaultProject = new Project('Default Project','A catch-all for tasks not assigned to a particular project',undefined, 'open');
projectIdCounter += 1;
let projectArray = [];
projectArray.push(defaultProject);

// TASK CLASS
class Task {
  tTitle;
  tDescription;
  tDueDate;
  tStatus;
  taskID;
  taskUUID;

  constructor (tTitle, tDescription, tDueDate, tStatus, tAssociatedProject) {
    this.tTitle = tTitle;
    this.tDescription = tDescription;
    this.tDueDate = tDueDate;
    this.tStatus = tStatus;
    this.tAssociatedProject = tAssociatedProject;
    this.taskID = taskIdCounter;
    this.taskUUID = uuidv4();
  }

  setStatus(tStatus) {
    this.tStatus = tStatus;
  }

  getStatus() {
    return this.tStatus;
  }  
}
// END TASK CLASS





// FUNCTION TO SAVE NEW PROJECT
const saveNewProject = function(){
  console.log('saveNewProject function has started');
  const pTitle = document.getElementById('ptitle').value;
  const pDescription = document.getElementById('pdescription').value;
  const pDueDate = document.getElementById('pduedate').value;
  let pStatus = 'open';
  const project = new Project(pTitle, pDescription, pDueDate, pStatus);
  projectIdCounter += projectIdCounter;
  console.log(`projectIdCounter is now ${projectIdCounter}`);
  projectArray.push(project);
  console.log(project);
  console.log([projectArray]);
  addProjectToSidebar(pTitle);
}
// END FUNCTION TO SAVE NEW PROJECT

// FUNCTION TO SAVE NEW TASK
const saveNewTask = function(){
  console.log('saveNewTask function has started');
  const tTitle = document.getElementById('ttitle').value;
  const tDescription = document.getElementById('tdescription').value;
  const tDueDate = document.getElementById('tduedate').value;
  const tAssociatedProject = document.getElementById('tassociatedproject').value;
  let tStatus = 'open';
  const task = new Task(tTitle, tDescription, tDueDate, tStatus, tAssociatedProject);
  taskIdCounter += taskIdCounter;
  console.log(`taskIdCounter is now ${tasktIdCounter}`);
  console.log(task);
}
// END FUNCTION TO SAVE NEW TASK


function addProjectToSidebar(pTitle){
  // create link element
  const projectLink = document.createElement('a');
  projectLink.classList.add('navlink');
  projectLink.id = `${pTitle}Link`;
  projectLink.textContent = pTitle;
  const projectsDiv = document.getElementById('projectsdiv');
  // add link to projectsDiv in sidebar
  projectsDiv.appendChild(projectLink);
}



export { saveNewProject, saveNewTask, projectArray };