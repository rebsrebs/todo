import { npform } from './forms.js';
import { ntform } from './forms.js';
import { projectArray } from './projectmanager.js';
import { v4 as uuidv4 } from 'uuid';
import { displayOneProject } from './ui.js';
// import { pickRandomTask } from './ui.js'
// import { displayARandomTask } from './ui.js'
import { removeChildElements } from './ui.js'


function sidebar() {

  // SIDEBAR CONTAINER
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  sidebar.id = 'sidebar';

  // NAV
  const nav = document.createElement('nav');
  nav.classList.add('nav');
  nav.id = 'nav';

  // SHORTCUTS SECTION
  const shortcutsDiv = document.createElement('div');
  shortcutsDiv.classList.add('navsection');
  const shortcuts = document.createElement('h4');
  shortcuts.classList.add('navsectionheader');
  shortcuts.id = 'shortcuts';
  shortcuts.textContent = "Shortcuts";

  const addNewTask = document.createElement('a');
  addNewTask.classList.add('navlink');
  addNewTask.classList.add('shortcutnavlink');
  addNewTask.classList.add('newprojectadd');
  addNewTask.textContent = '+ new task';
  // make plus sign different color ?

  const home = document.createElement('a');
  home.classList.add('navlink');
  home.classList.add('shortcutnavlink');
  home.id = 'homenav';
  home.textContent = "Home";

  const dueToday = document.createElement('a');
  dueToday.classList.add('navlink');
  dueToday.classList.add('shortcutnavlink');
  dueToday.id = 'duetodaynav';
  dueToday.textContent = "Due Today";

  // const randomTask = document.createElement('a');
  // randomTask.classList.add('navlink');
  // randomTask.classList.add('shortcutnavlink');
  // randomTask.id = 'randomtask';
  // randomTask.textContent = "Random Task";

  // randomTask.addEventListener('click', function() {
  //   displayARandomTask();
  // });

  // PROJECTS SECTION
  const projectsDiv = document.createElement('div');
  projectsDiv.classList.add('navsection');
  projectsDiv.id = 'projectsdiv';
  const projects = document.createElement('h4');
  projects.classList.add('navsectionheader');
  projects.id = 'projectsnavsection';
  projects.textContent = "Projects";

  const addNewProject = document.createElement('a');
  addNewProject.classList.add('navlink');
  addNewProject.classList.add('newprojectadd');
  addNewProject.textContent = '+ new project';
    // make plus sign different color ?

  const projectNavLinkSection = document.createElement('div');
  projectNavLinkSection.classList.add('projectnavlinksection');
  projectNavLinkSection.id = 'projectnavlinksection';


   // event listener for new project button
  addNewProject.addEventListener('click', function() {
    // const content = document.getElementById('content');
    // content.appendChild(npform());
    const main = document.getElementById('main');
    main.appendChild(npform());
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'visible';
  });

  // event listener for new task button
  addNewTask.addEventListener('click', function() {
    const main = document.getElementById('main');
    main.appendChild(ntform(projectArray[0]));
    console.log(projectArray);
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'visible';
  });


  shortcutsDiv.appendChild(shortcuts);
  shortcutsDiv.appendChild(addNewTask);
  shortcutsDiv.appendChild(home);
  shortcutsDiv.appendChild(dueToday);
  // shortcutsDiv.appendChild(randomTask);
  projectsDiv.appendChild(projects);
  projectsDiv.appendChild(addNewProject);
  projectsDiv.appendChild(projectNavLinkSection);
  nav.appendChild(shortcutsDiv);
  nav.appendChild(projectsDiv);
  sidebar.appendChild(nav);

  return sidebar;
}


// FUNCTION populate sidebar project links from projectArray
function updateProjectNavLinks() {
  // clear existing sidebar project links
  var pnavlinksection = document.getElementById('projectnavlinksection');
  removeChildElements(pnavlinksection);
  // create link for each project in projectArray
  for (let i = 0; i < projectArray.length; i++) {
    let currentLink = document.createElement('a');
    currentLink.classList.add('projectnavlink');
    currentLink.classList.add('navlink');
    currentLink.textContent = projectArray[i].pTitle;
    currentLink.id = `link-${i}`;
    // when each link is clicked, fill main area with project info
    currentLink.addEventListener("click", function(){
      console.log('a project was clicked');
      var index = currentLink.id.substring(5);
      displayOneProject(projectArray[index]);
    });
    // add project link to sidebar
    pnavlinksection.appendChild(currentLink);
  }
}

export { sidebar, updateProjectNavLinks };