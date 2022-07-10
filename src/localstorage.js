import { projectArray, allTasksArray } from "./projectmanager";

// function to update local storage
// run this after any time you update projectArray - deleteTask, saveTask, saveProject, editTask
const setStorage = function(){
  console.log('setStorage function has started.')
  console.log(`projectArray being sent to localStorage is ${(projectArray)}`)
  console.log(`allTasksArray being sent to localStorage is ${(allTasksArray)}`)
  localStorage.setItem('projects',JSON.stringify(projectArray))
  localStorage.setItem('allTasks',JSON.stringify(allTasksArray))
  console.log('local storage has been updated.')
}

// simpler check for local storage availability
const simpleCheckForStorage = function(){
  var storage;
  if (typeof(Storage) !== "undefined") {
    console.log('there is local storage')
    storage = 'yes';
  } else {
    console.log('Sorry! No Web Storage support.')
    storage = 'no';
  }
  return storage;
}

export { setStorage, simpleCheckForStorage }
