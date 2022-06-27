import { v4 as uuidv4 } from 'uuid';
import { updateProjectNavLinks} from './sidebar.js';
import { displayOneProject } from './ui.js';

let allTasksArray = [];

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

  removeTask(task, index) {
    task.tAssociatedProject = this;
    this.taskArray.splice(index, 1);
  }
}
// END PROJECT CLASS


// CREATE DEFAULT CATCH ALL PROJECT

const defaultProject = new Project('Default Project','A catch-all for tasks not assigned to a particular project.',undefined, 'open');
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
  tPriority;
  tStatus;
  taskUUID;
  tBoxID;

  constructor (tTitle, tDescription, tDueDate, tPriority, tStatus, tAssociatedProject) {
    this.tTitle = tTitle;
    this.tDescription = tDescription;
    this.tDueDate = tDueDate;
    this.tPriority = tPriority;
    this.tStatus = tStatus;
    this.tAssociatedProject = tAssociatedProject;
    this.taskUUID = uuidv4();
  }

  getAssociatedProject(){
    return this.tAssociatedProject;
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
  displayOneProject(project);
}
// END FUNCTION TO SAVE NEW PROJECT

// FUNCTION TO SAVE NEW TASK
const saveNewTask = function(tTitle, tDescription, tDueDate, tPriority, tAssociatedProject){
  console.log('saveNewTask function has started');
  console.log(`The tAssociatedProject value being passed to this function is ${tAssociatedProject}`);
  const index = projectArray.map(e => e.projectUUID).indexOf(tAssociatedProject);
  console.log(index);
  let tStatus = 'open';
  const task = new Task(tTitle, tDescription, tDueDate, tPriority, tStatus, projectArray[index]);
  projectArray[index].addTask(task);
  allTasksArray.push(task);
  console.log(projectArray[index].taskArray);
  displayOneProject(projectArray[index]);
  console.log(allTasksArray);
}
// END FUNCTION TO SAVE NEW TASK

const deleteTask = function(task) {
  console.log('delete task function has started');
    // remove task row from DOM
    document.getElementById(`taskbox-${task.taskUUID}`).remove();
  // get associated project - shouldn't this just be an ID number, why do I need to add projectUUID at the end?
  const indexC = projectArray.map(e => e.projectUUID).indexOf(task.tAssociatedProject.projectUUID);
  // delete task from associated project array
  console.log(projectArray[indexC]);
  const indexB = projectArray[indexC].taskArray.map(task => task.taskUUID).indexOf(task.taskUUID);
  projectArray[indexC].removeTask(task,indexB);
  // delete task from allTasksArray
  console.log(`All tasks array was ${allTasksArray}`);
  const indexA = allTasksArray.map(e => e.taskUUID).indexOf(task.taskUUID);
  console.log(indexA);
  allTasksArray.splice(indexA,1);
  console.log(`Now all tasks array is ${allTasksArray}`);
  // clear the values for all keys in task
  console.log(Object.keys(task));
  console.log(task.tTitle); // shows title
  Object.keys(task).forEach(key => {
    task[key] = null;
  });
  console.log(Object.keys(task));
  console.log(task.tTitle); // shows null
  

}

export { saveNewProject, saveNewTask, projectArray, allTasksArray, deleteTask, displayOneProject };

