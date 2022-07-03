import { projectArray } from "./projectmanager";
import { allTasksArray } from "./projectmanager";

// function to update local storage
// run this after any time you update projectArray - deleteTask, saveTask, saveProject, editTask
const setStorage = function(){
  localStorage.setItem('projects',JSON.stringify(projectArray))
  localStorage.setItem('allTasks',JSON.stringify(allTasksArray))
  console.log('local storage has been updated.')
}

// when you refresh page, check if local storage has these things and if so
// update remote projects and tasks with them and populate sidebar and display default project or maybe nothing.
const getStorage = function(){
  const projects = JSON.parse(localStorage.getItem("projects"));
  const tasks = JSON.parse(localStorage.getItem("tasks"));
}



// check if storage is available
function storageAvailable(type) {
  var storage;
  try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}

// check if local storage is available
// if (storageAvailable('localStorage')) {
//   console.log('Yippee! We can use localStorage awesomeness')
// }
// else {
//   console.log('Too bad, no localStorage for us')
// }

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




// EXAMPLES

// save array to local storage
// const colorArray = [red, blue, green]
// localStorage.setItem('colors', JSON.stringify(testArray));
// // get array from local storage
// const storedColors = JSON.parse(localStorage.getItem('colors'));


// example to populate storage
// function populateStorage() {
//   localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
//   localStorage.setItem('font', document.getElementById('font').value);
//   localStorage.setItem('image', document.getElementById('image').value);
//   setStyles();
// }

// example get values from storage
// function setStyles() {
//   var currentColor = localStorage.getItem('bgcolor');
//   var currentFont = localStorage.getItem('font');
//   var currentImage = localStorage.getItem('image');

//   document.getElementById('bgcolor').value = currentColor;
//   document.getElementById('font').value = currentFont;
//   document.getElementById('image').value = currentImage;

//   htmlElem.style.backgroundColor = '#' + currentColor;
//   pElem.style.fontFamily = currentFont;
//   imgElem.setAttribute('src', currentImage);
// }

// responding to storage changes with storage event
// window.addEventListener('storage', function(e) {
//   document.querySelector('.my-key').textContent = e.key;
//   document.querySelector('.my-old').textContent = e.oldValue;
//   document.querySelector('.my-new').textContent = e.newValue;
//   document.querySelector('.my-url').textContent = e.url;
//   document.querySelector('.my-storage').textContent = JSON.stringify(e.storageArea);
// });


// Store in local storage
// localStorage.setItem("lastname", "Smith");

// Retrieve from local storage
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");

export { setStorage, getStorage, simpleCheckForStorage, storageAvailable }
