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
  console.log('I have clicked on a project on the nav');
  // clear main content area
  const main = document.getElementById('main');
  removeChildElements(main);
  console.log('I should have just cleared main content area');
  // display project title
  const projectHeader = document.createElement('h2');
  projectHeader.classList.add('mainprojectheader');
  console.log(link.id);
  var index = link.id.substring(5);
  console.log(index);
  projectHeader.textContent = projectArray[index].pTitle;
  main.appendChild(projectHeader);
  // create container for all tasks - grid with 1 column
  const mainTaskArea = document.createElement('div');
  mainTaskArea.classList.add('maintaskarea');
  console.log(projectArray[index].pDescription);
  console.log(projectArray[index].taskArray);
  for (var i = 0; i < projectArray[index].taskArray.length; i++) {
    console.log('we are in the loop');
    // create row for individual task
    var taskRow = document.createElement('div');
    taskRow.classList.add('maintaskrow');
    var taskCheckBoxLabel = document.createElement('label');
    taskCheckBoxLabel.setAttribute("for", "statuscheckbox");
    taskCheckBoxLabel.classList.add('taskcheckboxlabel');
    var taskCheckBox = document.createElement('input');
    taskCheckBox.setAttribute("type", "checkbox");
    taskCheckBox.id='statuscheckbox';
    taskCheckBox.classList.add('taskrowgriditem')
    taskCheckBox.classList.add('taskrowcheckbox')
    var taskTitleDisplay = document.createElement('div');
    taskTitleDisplay.classList.add('taskrowgriditem')
    taskTitleDisplay.classList.add('taskrowtitle')
    var taskDescriptionDisplay = document.createElement('div');
    taskDescriptionDisplay.classList.add('taskrowgriditem')
    taskDescriptionDisplay.classList.add('taskrowdescription')
    var taskDueDateDisplay = document.createElement('div');
    taskDueDateDisplay.classList.add('taskrowgriditem')
    taskDueDateDisplay.classList.add('taskrowduedate')
    taskCheckBox.textContent = '*';
    taskTitleDisplay.textContent = projectArray[index].taskArray[i].tTitle;
    taskDescriptionDisplay.textContent = projectArray[index].taskArray[i].tDescrip
    taskCheckBoxLabel.appendChild(taskCheckBox);
    taskRow.appendChild(taskCheckBoxLabel);
    taskRow.appendChild(taskTitleDisplay);
    taskRow.appendChild(taskDescriptionDisplay);
    taskRow.appendChild(taskDueDateDisplay);
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
  for (let i = 0; i < projectArray.length; i++) {
    let currentLink = document.createElement('a');
    currentLink.classList.add('projectnavlink');
    currentLink.classList.add('navlink');
    currentLink.textContent = projectArray[i].pTitle;
    currentLink.id = `link-${i}`;
    // when each link is clicked, fill main area with project info
    currentLink.addEventListener("click", function(){
      // need to make sure I'm passing the right thing to this function:
      // I think it's just passing the last created link to this! yep.
      // need some kind of target to know which one was clicked.
      // maybe better to put the listener on the whole area
      // was just a matter of using let instead of var!
      projectNavLinkClick(currentLink);
    });
    // add project link to sidebar
    pnavlinksection.appendChild(currentLink);
  }
}



export { sidebar, updateProjectNavLinks };