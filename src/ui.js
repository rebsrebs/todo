function ui() {

  // New Task Button
  const newTaskButton = document.createElement('button');
  newTaskButton.classList.add('button');
  newTaskButton.id = 'newtaskbutton';
  newTaskButton.textContent = 'New Task';

  // New Task Form Container Div
  const ntFormContainer = document.createElement.apply('div');
  ntFormContainer.classList.add('formcontainer');

  // New Task Form
  const newTaskForm = document.createElement('form');
  newTaskForm.classList.add('form');
  newTaskForm.id = 'newtaskform';
  // create input for task title
  const taskTitle = document.createElement('input');
  taskTitle.setAttribute("type", "text");
  taskTitle.setAttribute("name", "title");
  taskTitle.setAttribute("placeholder", "title");
  // notes
  // priority
  // due date
  // check list
  // assign to project
  // description



  // New Project Button
  const newProjectButton = document.createElement('button');
  newProjectButton.classList.add('button');
  newProjectButton.id = 'newprojectbutton';
  newProjectButton.textContent = 'New Project';
  // New Project Form Container Div
  const npFormContainer = document.createElement.apply('div');
  npFormContainer.classList.add('formcontainer');
  // New Project Form
  const newProjectForm = document.createElement('form');
  newProjectForm.classList.add('form');
  newProjectForm.id = 'newprojectform';
  // create project title label
  const projectTitleLabel = document.createElement('label');
  projectTitleLabel.setAttribute("for","title");
  projectTitleLabel.textContent = ('Title');
  // create input for project title
  const projectTitle = document.createElement('input');
  projectTitle.setAttribute("type", "text");
  projectTitle.setAttribute("name", "title");
  projectTitle.setAttribute("id", "title");
  projectTitle.setAttribute("placeholder", "title");
  // description label
  const projectDescriptionLabel = document.createElement('label');
  projectDescriptionLabel.setAttribute("for","description");
  projectDescriptionLabel.textContent = ('Description');
  // description input
  const projectDescription = document.createElement('input');
  projectDescription.setAttribute("type", "text");
  projectDescription.setAttribute("name", "description");
  projectDescription.setAttribute("id", "description");
  projectDescription.setAttribute("placeholder", "description");
  // due date label
  const projectDueDateLabel = document.createElement('label');
  projectDueDateLabel.setAttribute("for","date");
  projectDueDateLabel.textContent = ('Due Date');
  // due date input
  const projectDueDate = document.createElement('input');
  projectDueDate.setAttribute("type", "date");
  projectDueDate.setAttribute("id", "date");
  projectDescription.setAttribute("name", "date");
  // submit button
  const newProjectSubmitButton = document.createElement('button');
  newProjectSubmitButton.classList.add('button');
  newProjectSubmitButton.textContent = 'Save';

  newProjectForm.appendChild(projectTitleLabel);
  newProjectForm.appendChild(projectTitle);
  newProjectForm.appendChild(projectDescriptionLabel);
  newProjectForm.appendChild(projectDescription);
  newProjectForm.appendChild(projectDueDateLabel);
  newProjectForm.appendChild(projectDueDate);
  newProjectForm.appendChild(newProjectSubmitButton);
  npFormContainer.appendChild(newProjectForm);

  return newProjectForm;
}



export { ui };