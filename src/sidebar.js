import { npform } from './newprojectform.js';
import { ntform } from './newtaskform.js';
import { projectArray } from './projectmanager.js';
import { v4 as uuidv4 } from 'uuid';


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
    main.appendChild(ntform());
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'visible';
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
    let taskRow = document.createElement('div');
    taskRow.classList.add('maintaskrow');
    let uniqueID = uuidv4();
    taskRow.id = `taskrow-${uniqueID}`;
    let taskCheckBoxLabel = document.createElement('label');
    taskCheckBoxLabel.setAttribute("for", `checkbox-${uniqueID}`);
    taskCheckBoxLabel.classList.add('taskcheckboxlabel');
    let taskCheckBox = document.createElement('input');
    taskCheckBox.setAttribute("type", "checkbox");
    taskCheckBox.id=`checkbox-${uniqueID}`;
    taskCheckBox.classList.add('taskrowgriditem')
    taskCheckBox.classList.add('taskrowcheckbox')
    let taskTitleDisplay = document.createElement('div');
    taskTitleDisplay.classList.add('taskrowgriditem')
    taskTitleDisplay.classList.add('taskrowtitle')
    let taskDescriptionDisplay = document.createElement('div');
    taskDescriptionDisplay.classList.add('taskrowgriditem')
    taskDescriptionDisplay.classList.add('taskrowdescription')
    let taskDueDateDisplay = document.createElement('div');
    taskDueDateDisplay.classList.add('taskrowgriditem')
    taskDueDateDisplay.classList.add('taskrowduedate')
    taskCheckBox.textContent = '*';
    taskCheckBox.addEventListener('change', function() {
      if (taskCheckBox.checked == true) {
        console.log("Checkbox is checked..");
        taskTitleDisplay.classList.remove('undone');
        taskTitleDisplay.classList.add('completed')
      } else {
        taskTitleDisplay.classList.remove('completed');
        taskTitleDisplay.classList.add('undone');
        console.log("Checkbox is not checked..");
      }
    });
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
      projectNavLinkClick(currentLink);
    });
    // add project link to sidebar
    pnavlinksection.appendChild(currentLink);
  }
}






export { sidebar, updateProjectNavLinks };