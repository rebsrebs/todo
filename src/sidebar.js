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
  const shortcuts = document.createElement('h3');
  shortcuts.classList.add('navsection');
  shortcuts.id = 'shortcuts';
  shortcuts.textContent = "Shortcuts";

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


  nav.appendChild(shortcuts);
  nav.appendChild(home);
  nav.appendChild(dueToday);
  nav.appendChild(randomTask);
  nav.appendChild(projects);
  nav.appendChild(defaultProject);
  nav.appendChild(addNewProject);
  sidebar.appendChild(nav);



  return sidebar;
}

export { sidebar };