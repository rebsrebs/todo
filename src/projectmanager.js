import { npform } from './newprojectform.js';

let projectArray = [];
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

  constructor (pTitle, pDescription, pDueDate, pStatus){
    this.pTitle = pTitle;
    this.pDescription = pDescription;
    this.pDueDate = pDueDate;
    this.pStatus = pStatus;
    this.projectID = projectIdCounter;
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

// FUNCTION TO SAVE NEW TASK
const saveNewTask = function(){
  console.log('saveNewTask function has started and I have not filled it in yet');
  // const pTitle = document.getElementById('ptitle').value;
  // const pDescription = document.getElementById('pdescription').value;
  // const pDueDate = document.getElementById('pduedate').value;
  // let pStatus = 'open';
  // const project = new Project(pTitle, pDescription, pDueDate, pStatus);
  // projectArray.push(project);
  // console.log(project);
  // console.log([projectArray]);
  // addProjectToSidebar(pTitle);
}
// END FUNCTION TO SAVE NEW PROJECT

export { saveNewProject, saveNewTask, projectArray };
