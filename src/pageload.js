import { header } from './header.js';
import { sidebar } from './sidebar.js';
import { updateProjectNavLinks } from './sidebar.js';
import { main } from './main.js';
import { mainProjectLayout } from './ui.js';
import { simpleCheckForStorage } from './localstorage.js';
import { setUpProjects } from './projectmanager.js';

const pageLoad = function() {
  // checkStorage function 
  simpleCheckForStorage();
  setUpProjects();
  // if something is in local storage
  // get projectArray and allTasksArray
  const content = document.getElementById('content');
  content.appendChild(header());
  content.appendChild(sidebar());
  content.appendChild(main());
  updateProjectNavLinks();
  mainProjectLayout();
}

export { pageLoad };