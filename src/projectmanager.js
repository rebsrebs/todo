import { npform } from './newprojectform.js';
import { v4 as uuidv4 } from 'uuid';
import { updateProjectNavLinks} from './sidebar.js';

function removeChildElements(parent){
   while (parent.firstChild) {
      parent.firstChild.remove()
   }
}







// PROJECT CLASS
class Project {
  taskArray = [];
  pTitle;
  pDescription;
  pDueDate;
  pStatus;
  projectUUID;

  constructor (pTitle, pDescription, pDueDate, pStatus) {
    this.pTitle = pTitle;
    this.pDescription = pDescription;
    this.pDueDate = pDueDate;
    this.pStatus = pStatus;
    this.projectUUID = uuidv4();
  }

  setStatus(pStatus) {
    this.pStatus = pStatus;
  }

  getStatus() {
    return this.pStatus;
  }

  addTask(task) {
    task.tAssociatedProject = this;
    this.taskArray.push(task);
  }
}
// END PROJECT CLASS


// CREATE DEFAULT CATCH ALL PROJECT

const defaultProject = new Project('Default Project','A catch-all for tasks not assigned to a particular project',undefined, 'open');
// END DEFAULT PROJECT

// DEFINE PROJECT ARRAY
let projectArray = [];
// ADD DEFAULT PROJECT TO PROJET ARRAY
projectArray.push(defaultProject);



// TASK CLASS
class Task {
  tTitle;
  tDescription;
  tDueDate;
  tStatus;
  taskUUID;

  constructor (tTitle, tDescription, tDueDate, tStatus, tAssociatedProject) {
    this.tTitle = tTitle;
    this.tDescription = tDescription;
    this.tDueDate = tDueDate;
    this.tStatus = tStatus;
    this.tAssociatedProject = tAssociatedProject;
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
  projectArray.push(project);
  console.log(project);
  console.log([projectArray]);
  
  // addProjectToSidebar(pTitle);
  updateProjectNavLinks();
}
// END FUNCTION TO SAVE NEW PROJECT

// FUNCTION TO SAVE NEW TASK
const saveNewTask = function(){
  console.log('saveNewTask function has started');
  const tTitle = document.getElementById('ttitle').value;
  const tDescription = document.getElementById('tdescription').value;
  const tDueDate = document.getElementById('tduedate').value;
  const tAssociatedProject = document.getElementById('tassociatedproject').value;
  console.log(tAssociatedProject);
  const index = projectArray.map(e => e.projectUUID).indexOf(tAssociatedProject);
  console.log(index);
  let tStatus = 'open';
  const task = new Task(tTitle, tDescription, tDueDate, tStatus, projectArray[index]);
  projectArray[index].addTask(task);
  console.log(projectArray[index].taskArray);
}
// END FUNCTION TO SAVE NEW TASK






export { saveNewProject, saveNewTask, projectArray };
