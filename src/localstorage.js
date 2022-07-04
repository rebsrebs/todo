import { projectArray, allTasksArray, Project } from "./projectmanager";

// function to update local storage
// run this after any time you update projectArray - deleteTask, saveTask, saveProject, editTask
const setStorage = function(){
  localStorage.setItem('projects',JSON.stringify(projectArray))
  localStorage.setItem('allTasks',JSON.stringify(allTasksArray))
  console.log('local storage has been updated.')
}

// when you refresh page, check if local storage has these things and if so
// update remote projects and tasks with them and populate sidebar and display default project or maybe nothing.



// simpler check for local storage availability
const simpleCheckForStorage = function(){
  if (typeof(Storage) !== "undefined") {
    console.log('there is local storage')
    var storage = 'yes';
  } else {
    console.log('Sorry! No Web Storage support.')
    var storage = 'no';
  }
  return storage;
}

export { setStorage, simpleCheckForStorage }
