function ntform() {

  // New Task Form Container Div
  const ntFormContainer = document.createElement('div');
  ntFormContainer.classList.add('formcontainer');
  // Header Title
  const ntFormHeading = document.createElement('h4');
  ntFormHeading.textContent = 'Create a new task:'
  ntFormHeading.classList.add('formheading');
  // New Task Form
  const newTaskForm = document.createElement('form');
  newTaskForm.classList.add('form');
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
  taskDueDateLabel.setAttribute("for","tdate");
  taskDueDateLabel.textContent = ('Due Date');
  // due date input
  const taskDueDate = document.createElement('input');
  taskDueDate.setAttribute("type", "date");
  taskDueDate.setAttribute("id", "tdate");
  taskDueDate.setAttribute("name", "tdate");
  // submit button
  const newTaskSubmitButton = document.createElement('button');
  newTaskSubmitButton.classList.add('savebutton');
  newTaskSubmitButton.textContent = 'Save';

  newTaskForm.appendChild(taskTitleLabel);
  newTaskForm.appendChild(taskTitle);
  newTaskForm.appendChild(taskDescriptionLabel);
  newTaskForm.appendChild(taskDescription);
  newTaskForm.appendChild(taskDueDateLabel);
  newTaskForm.appendChild(taskDueDate);
  newTaskForm.appendChild(newTaskSubmitButton);
  ntFormContainer.appendChild(ntFormHeading);
  ntFormContainer.appendChild(newTaskForm);

  return ntFormContainer;
}

export { ntform };