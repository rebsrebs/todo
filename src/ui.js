function ui() {

  // New Task Button
  const newTaskButton = document.createElement('button');
  newTaskButton.classList.add('button');
  newTaskButton.id = 'newtaskbutton';
  newTaskButton.textContent = 'New Task';

  // New Project Button
  const newProjectButton = document.createElement('button');
  newProjectButton.classList.add('button');
  newProjectButton.id = 'newprojectbutton';
  newProjectButton.textContent = 'New Project';

  // Form Container Div
  const formContainer = document.createElement.apply('div');
  formContainer.classList.add('formcontainer');

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

  // New Project Form
  const newProjectForm = document.createElement('form');
  newProjectForm.classList.add('form');
  newProjectForm.id = 'newprojectform';
  // create input for project title
  const projectTitle = document.createElement('input');
  projectTitle.setAttribute("type", "text");
  projectTitle.setAttribute("name", "title");
  projectTitle.setAttribute("placeholder", "title");
  // description
  const projectDescription = document.createElement('input');
  projectDescription.setAttribute("type", "text");
  projectDescription.setAttribute("name", "description");
  projectDescription.setAttribute("placeholder", "description");
  // due date

  return {
    newTaskButton,
    newProjectButton,
    newTaskForm,
    newProjectForm
  }
}



export { ui };