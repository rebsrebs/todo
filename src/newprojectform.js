function npform() {

  // New Project Form Container Div
  const npFormContainer = document.createElement('div');
  npFormContainer.classList.add('formcontainer');
  // Header Title
  const npFormHeading = document.createElement('h4');
  npFormHeading.textContent = 'Create a new project:'
  npFormHeading.classList.add('formheading');
  // New Project Form
  const newProjectForm = document.createElement('form');
  newProjectForm.classList.add('form');
  newProjectForm.id = 'newprojectform';
  // create project title label
  const projectTitleLabel = document.createElement('label');
  projectTitleLabel.classList.add('formlabel');
  projectTitleLabel.setAttribute("for","ptitle");
  projectTitleLabel.textContent = ('Title');
  // create input for project title
  const projectTitle = document.createElement('input');
  projectTitle.setAttribute("type", "text");
  projectTitle.setAttribute("name", "ptitle");
  projectTitle.setAttribute("id", "ptitle");
  projectTitle.setAttribute("placeholder", "title");
  // description label
  const projectDescriptionLabel = document.createElement('label');
  projectDescriptionLabel.classList.add('formlabel');
  projectDescriptionLabel.setAttribute("for","pdescription");
  projectDescriptionLabel.textContent = ('Description');
  // description input
  const projectDescription = document.createElement('textarea');
  projectDescription.setAttribute("type", "text");
  projectDescription.setAttribute("name", "pdescription");
  projectDescription.setAttribute("id", "pdescription");
  projectDescription.setAttribute("placeholder", "description");
  // due date label
  const projectDueDateLabel = document.createElement('label');
  projectDueDateLabel.classList.add('formlabel');
  projectDueDateLabel.setAttribute("for","pdate");
  projectDueDateLabel.textContent = ('Due Date');
  // due date input
  const projectDueDate = document.createElement('input');
  projectDueDate.setAttribute("type", "date");
  projectDueDate.setAttribute("id", "pdate");
  projectDescription.setAttribute("name", "pdate");
  // submit button
  const newProjectSubmitButton = document.createElement('button');
  newProjectSubmitButton.classList.add('savebutton');
  newProjectSubmitButton.textContent = 'Save';

  newProjectForm.appendChild(projectTitleLabel);
  newProjectForm.appendChild(projectTitle);
  newProjectForm.appendChild(projectDescriptionLabel);
  newProjectForm.appendChild(projectDescription);
  newProjectForm.appendChild(projectDueDateLabel);
  newProjectForm.appendChild(projectDueDate);
  newProjectForm.appendChild(newProjectSubmitButton);
  npFormContainer.appendChild(npFormHeading);
  npFormContainer.appendChild(newProjectForm);

  return npFormContainer;
}

export { npform };