import { saveNewTask, projectArray } from './projectmanager.js';

function ntinpform(project) {
  console.log(project);
  console.log(project.projectUUID);

  // how do I figure out which project this was clicked inside of?

  // New Task Form Container Div
  const ntFormContainer = document.createElement('div');
  ntFormContainer.classList.add('formcontainer');
  // Header Title
  const ntFormHeading = document.createElement('h4');
  ntFormHeading.textContent = 'Create a new task:'
  ntFormHeading.classList.add('formheading');
  // New Task Form
  const newTaskForm = document.createElement('form');
  newTaskForm.classList.add('taskform');
  newTaskForm.id = 'newtaskform';
  // create task title label
  const taskTitleLabel = document.createElement('label');
  taskTitleLabel.classList.add('formlabel');
  taskTitleLabel.setAttribute("for","ttitle");
  taskTitleLabel.textContent = ('Title');
  // create input for project title
  const taskTitle = document.createElement('input');
  taskTitle.setAttribute("type", "text");
  taskTitle.setAttribute("name", "ttitle");
  taskTitle.setAttribute("id", "ttitle");
  taskTitle.setAttribute("placeholder", "title");
  // description label
  const taskDescriptionLabel = document.createElement('label');
  taskDescriptionLabel.classList.add('formlabel');
  taskDescriptionLabel.setAttribute("for","tdescription");
  taskDescriptionLabel.textContent = ('Description');
  // description input
  const taskDescription = document.createElement('textarea');
  taskDescription.setAttribute("type", "text");
  taskDescription.setAttribute("name", "tdescription");
  taskDescription.setAttribute("id", "tdescription");
  taskDescription.setAttribute("placeholder", "description");
  // due date label
  const taskDueDateLabel = document.createElement('label');
  taskDueDateLabel.classList.add('formlabel');
  taskDueDateLabel.setAttribute("for","tduedate");
  taskDueDateLabel.textContent = ('Due Date');
  // due date input
  const taskDueDate = document.createElement('input');
  taskDueDate.setAttribute("type", "date");
  taskDueDate.setAttribute("id", "tduedate");
  taskDueDate.setAttribute("name", "tduedate");

  // associated project
  const taskAssociatedProjectLabel = document.createElement('label');
  taskAssociatedProjectLabel.classList.add('formlabel');
  taskAssociatedProjectLabel.setAttribute("for","tassociatedproject");
  // associated project options
  const taskAssociatedProject = document.createElement('select');
  taskAssociatedProject.setAttribute("id", "tassociatedproject");
  taskAssociatedProject.setAttribute("name", "tassociatedproject");
  const option = document.createElement('option');
  option.setAttribute("value", project.projectUUID);
  option.setAttribute("selected", "selected");
  taskAssociatedProject.appendChild(option);
  taskAssociatedProjectLabel.appendChild(taskAssociatedProject);

  // submit button
  const ntinpSubmitButton = document.createElement('button');
  ntinpSubmitButton.classList.add('savebutton');
  ntinpSubmitButton.textContent = 'Save';
  ntinpSubmitButton.setAttribute("type", "button");

  newTaskForm.appendChild(taskTitleLabel);
  newTaskForm.appendChild(taskTitle);
  newTaskForm.appendChild(taskDescriptionLabel);
  newTaskForm.appendChild(taskDescription);
  newTaskForm.appendChild(taskDueDateLabel);
  newTaskForm.appendChild(taskDueDate);
  newTaskForm.appendChild(taskAssociatedProjectLabel);
  newTaskForm.appendChild(ntinpSubmitButton);
  ntFormContainer.appendChild(ntFormHeading);
  ntFormContainer.appendChild(newTaskForm);

  // event listener
  ntinpSubmitButton.addEventListener("click", function(){
    console.log(option.value);
    saveNewTask();
    newTaskForm.reset();
    ntFormContainer.remove();
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'hidden';
  });

  return ntFormContainer;
}

export { ntinpform };