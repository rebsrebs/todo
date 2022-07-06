import { v4 as uuidv4 } from 'uuid';
import { updateProjectNavLinks} from './sidebar.js';
import { displayOneProject } from './ui.js';
import { setStorage, simpleCheckForStorage } from './localstorage.js';

var projectArray = [];
var allTasksArray = [];

// PROJECT CLASS
class Project {
  taskArray = [];
  pTitle;
  pDescription;
  pDueDate;
  pStatus;
  projectUUID;

  constructor (pTitle, pDescription, pDueDate, pStatus, projectUUID, taskArray=[]) {
    this.pTitle = pTitle;
    this.pDescription = pDescription;
    this.pDueDate = pDueDate;
    this.pStatus = pStatus;
    this.projectUUID = projectUUID;
    this.taskArray = taskArray;
    // this.taskArray = taskArray;
    // taskArray = [];
  }

  setStatus(pStatus) {
    this.pStatus = pStatus;
  }

  getStatus() {
    return this.pStatus;
  }

  addTask(task) {
    this.taskArray.push(task);
  }

  removeTask(task) {
    const index = this.taskArray.map(e => e.taskUUID).indexOf(task.taskUUID);
    this.taskArray.splice(index, 1);
  }
}
// END PROJECT CLASS

// TASK CLASS
class Task {
  tTitle;
  tDescription;
  tDueDate;
  tPriority;
  tStatus;
  taskUUID;
  tAssociatedProject;
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


// function to set up projects - refactor this later
const getStorage = function() {
  if (simpleCheckForStorage() === 'yes'){
    // if local storage has a projects array
    if (localStorage.getItem('projects') != null) {
      console.log('there are projects in local storage');
      const projects = JSON.parse(localStorage.getItem('projects'));
      console.log(`projects gotten from localStorage is ${projects}`);
      console.log(`the second object's title in projects is ${projects[1].pTitle}`);
      projectArray = projects.map((project) => new Project(project.pTitle, project.pDescription, project.pDueDate, project.pStatus, project.projectUUID, project.taskArray));
      console.log(`projectArray is ${projectArray}`);
      // setStorage();
    } else {
      // create default catch all project
      const defaultProject = new Project('Default Project','A catch-all for tasks not assigned to a particular project.', undefined, 'open');
      // add default project to project array
      projectArray.push(defaultProject);
    };
    if (localStorage.getItem('tasks') != null) {
      console.log('there are tasks in local storage')
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      console.log(`Here are the tasks from local storage: ${tasks}`);
      // this saves new tasks and pushes them to their respective project taskArrays
      allTasksArray = tasks.map((task) => saveNewTask(task.tTitle, task.tDescription, task.tDueDate, task.tPriority, task.tStatus, task.tAssociatedProject))
    }
  } else {
    // create default catch all project
    const defaultProject = new Project('Default Project','A catch-all for tasks not assigned to a particular project.', undefined, 'open');
    // add default project to project array
    projectArray.push(defaultProject);
  }
};




// FUNCTION TO SAVE NEW PROJECT
const saveNewProject = function(pTitle, pDescription, pDueDate, pStatus, projectUUID){
  console.log('saveNewProject function has started');
  const project = new Project(pTitle, pDescription, pDueDate, pStatus, projectUUID);
  projectArray.push(project);
  console.log(project);
  console.log([projectArray]);
  setStorage();
  // addProjectToSidebar(pTitle);
  updateProjectNavLinks();
  displayOneProject(project);
}
// END FUNCTION TO SAVE NEW PROJECT

// FUNCTION TO SAVE NEW TASK
const saveNewTask = function(tTitle, tDescription, tDueDate, tPriority, tStatus, tAssociatedProject){
  // getStorage();
  console.log('saveNewTask function has started');
  console.log(`tAssociatedProject passed to this is ${tAssociatedProject}`);
  const task = new Task(tTitle, tDescription, tDueDate, tPriority, tStatus, tAssociatedProject);
  // find associated project in projectArray to add task to its taskArray
  const index = projectArray.map(e => e.projectUUID).indexOf(tAssociatedProject);
  console.log(index);
  console.log(`projectArray[index].pTitle for the task you are saving's associated project is ${projectArray[index].pTitle}`);
  console.log(`projectArray[index].taskArray for the task you are saving's associated project is ${projectArray[index].taskArray}`);
  // add task to project's task array
  projectArray[index].addTask(task);
  // projectArray[index].taskArray.push(task);
  // add task to allTasksArray
  allTasksArray.push(task);
  setStorage();
  // displayOneProject(projectArray[index]);
}
// END FUNCTION TO SAVE NEW TASK

const deleteTask = function(task) {
  console.log('delete task function has started');
  // remove task box from DOM
  document.getElementById(`taskbox-${task.taskUUID}`).remove();
  // get associated project and delete task from it
  const indexC = projectArray.map(e => e.projectUUID).indexOf(task.tAssociatedProject);
  projectArray[indexC].removeTask(task);
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
  // setStorage();
}

export { saveNewProject, saveNewTask, projectArray, allTasksArray, deleteTask, displayOneProject, getStorage };
