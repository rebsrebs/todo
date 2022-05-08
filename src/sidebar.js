import { npform } from './newprojectform.js';
import { ntform } from './newtaskform.js';
import { projectArray } from './projectmanager.js';

function removeChildElements(parent){
  while (parent.firstChild) {
     parent.firstChild.remove()
  }
}

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
  const shortcuts = document.createElement('h3');
  shortcuts.classList.add('navsection');
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

  const randomTask = document.createElement('a');
  randomTask.classList.add('navlink');
  randomTask.classList.add('shortcutnavlink');
  randomTask.id = 'randomtask';
  randomTask.textContent = "Random Task";

  // PROJECTS SECTION
  const projectsDiv = document.createElement('div');
  projectsDiv.classList.add('navsection');
  projectsDiv.id = 'projectsdiv';
  const projects = document.createElement('h3');
  projects.classList.add('projectsnavsection');
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
    const main = document.getElementById('main');
    main.appendChild(npform());
  });

  // event listener for new task button
  addNewTask.addEventListener('click', function() {
    const main = document.getElementById('main');
    main.appendChild(ntform());
  });


  shortcutsDiv.appendChild(shortcuts);
  shortcutsDiv.appendChild(addNewTask);
  shortcutsDiv.appendChild(home);
  shortcutsDiv.appendChild(dueToday);
  shortcutsDiv.appendChild(randomTask);
  projectsDiv.appendChild(projects);
  projectsDiv.appendChild(addNewProject);
  projectsDiv.appendChild(projectNavLinkSection);
  nav.appendChild(shortcutsDiv);
  nav.appendChild(projectsDiv);
  sidebar.appendChild(nav);

  return sidebar;
}

// FUNCTION to display project info in main area when project link is clicked
function projectNavLinkClick(link){
  // clear main content area
  const main = document.getElementById('main');
  removeChildElements(main);
  // display project title
  const projectHeader = document.createElement('h2');
  projectHeader.classList.add('mainprojectheader');
  var index = link.id.substring(5);
  projectHeader.textContent = projectArray[index].pTitle;
  main.appendChild(projectHeader);
  // create container for all tasks - grid with 1 column
  const mainTaskArea = document.createElement('div');
  mainTaskArea.classList.add('maintaskarea');
  console.log(projectArray[index].pDescription);
  console.log(projectArray[index].taskArray);
  for (var i = 0; i < projectArray[index].taskArray.length; i++) {
    console.log('we are in the loop');
    var taskRow = document.createElement('div');
    taskRow.classList.add('maintaskrow');
    taskRow.textContent = projectArray[index].taskArray[i].tTitle;
    console.log(projectArray[index].taskArray[i].tTitle);
    mainTaskArea.appendChild(taskRow);
    main.appendChild(mainTaskArea);
    }
}

// FUNCTION populate sidebar project links from projectArray
function updateProjectNavLinks() {
  // clear existing sidebar project links
  var pnavlinksection = document.getElementById('projectnavlinksection');
  removeChildElements(pnavlinksection);
  // create link for each project in projectArray
  for (var i = 0; i < projectArray.length; i++) {
    var currentLink = document.createElement('a');
    currentLink.classList.add('projectnavlink');
    currentLink.classList.add('navlink');
    currentLink.textContent = projectArray[i].pTitle;
    currentLink.id = `link-${i}`;
    // when each link is clicked, fill main area with project info
    currentLink.addEventListener("click", function(){
      projectNavLinkClick(currentLink);
    });
    // add project link to sidebar
    pnavlinksection.appendChild(currentLink);
  }
}



export { sidebar, updateProjectNavLinks };