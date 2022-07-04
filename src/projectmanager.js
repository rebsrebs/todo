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

  // apparently a project comes back from localStorage the methods do not, they never got sent there in the first place.
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
const setUpProjects = function() {
  if (simpleCheckForStorage() === 'yes'){
    // if local storage has a projects array
    if (localStorage.getItem('projects') != null) {
      const projects = JSON.parse(localStorage.getItem('projects'));
      console.log(projects);
      projectArray = projects.map((project) => new Project(project.pTitle, project.pDescription, project.pDueDate, project.pStatus));
      setStorage();
    } else {
      // create default catch all project
      const defaultProject = new Project('Default Project','A catch-all for tasks not assigned to a particular project.', undefined, 'open');
      // add default project to project array
      projectArray.push(defaultProject);
    };
    if (localStorage.getItem('tasks') != null) {
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      console.log(tasks);
      allTasksArray = tasks;
    }
  } else {
    // create default catch all project
    const defaultProject = new Project('Default Project','A catch-all for tasks not assigned to a particular project.', undefined, 'open');
    // add default project to project array
    projectArray.push(defaultProject);
  }
};

// FUNCTION TO SAVE NEW PROJECT
const saveNewProject = function(pTitle, pDescription, pDueDate, pStatus){
  console.log('saveNewProject function has started');
  const project = new Project(pTitle, pDescription, pDueDate, pStatus);
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
const saveNewTask = function(tTitle, tDescription, tDueDate, tPriority, tAssociatedProject){
  console.log('saveNewTask function has started');
  let tStatus = 'open';
  const task = new Task(tTitle, tDescription, tDueDate, tPriority, tStatus, tAssociatedProject);
  // find associated project in projectArray to add task to its taskArray
  const index = projectArray.map(e => e.projectUUID).indexOf(tAssociatedProject);
  console.log(index);
  console.log(projectArray[index]);
  projectArray[index].addTask(task);
  // add task to allTasksArray
  allTasksArray.push(task);
  setStorage();
  displayOneProject(projectArray[index]);
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
  setStorage();
}

export { saveNewProject, saveNewTask, projectArray, allTasksArray, deleteTask, displayOneProject, setUpProjects };
