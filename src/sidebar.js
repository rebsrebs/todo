import { npform } from './newprojectform.js';
import { ntform } from './newtaskform.js';

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
  addNewTask.classList.add('newprojectadd');
  addNewTask.textContent = '+ new task';
  // make plus sign different color ?

  const home = document.createElement('a');
  home.classList.add('navlink');
  home.id = 'homenav';
  home.textContent = "Home";

  const dueToday = document.createElement('a');
  dueToday.classList.add('navlink');
  dueToday.id = 'duetodaynav';
  dueToday.textContent = "Due Today";

  const randomTask = document.createElement('a');
  randomTask.classList.add('navlink');
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

  const defaultProject = document.createElement('a');
  defaultProject.classList.add('navlink');
  defaultProject.id = 'defaultproject';
  defaultProject.textContent = "Default Project";

  const addNewProject = document.createElement('a');
  addNewProject.classList.add('navlink');
  addNewProject.classList.add('newprojectadd');
  addNewProject.textContent = '+ new project';
  // make plus sign different color ?

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
  projectsDiv.appendChild(defaultProject);
  nav.appendChild(shortcutsDiv);
  nav.appendChild(projectsDiv);
  sidebar.appendChild(nav);

  return sidebar;
}





export { sidebar };