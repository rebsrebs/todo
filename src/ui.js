function ui() {

  // New Task Button
  const newTaskButton = document.createElement('button');
  newTaskButton.classList.add('button');
  newTaskButton.id = 'newtaskbutton';
  newTaskButton.textContent = 'New Task';

  // New Task Form Container Div
  const ntFormContainer = document.createElement('div');
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
  

  return newProjectForm;
}



export { ui };