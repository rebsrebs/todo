import { saveNewTask, projectArray, saveNewProject } from './projectmanager.js';

function cancelButton() {
  const cancelButton = document.createElement('button');
  cancelButton.classList.add('cancelbutton');
  cancelButton.textContent = 'Cancel';
  cancelButton.setAttribute("type", "button");
  cancelButton.addEventListener('click', function(){
    cancelForm();
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'hidden';
  })
  return cancelButton;
}


function cancelForm() {
  let form = document.querySelector('.form')
  form.reset();
  let formcontainer = document.querySelector('.formcontainer');
  formcontainer.remove();
}


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
  projectTitleLabel.textContent = ('* Title');
  // create input for project title
  const projectTitle = document.createElement('input');
  projectTitle.setAttribute("type", "text");
  projectTitle.setAttribute("name", "ptitle");
  projectTitle.setAttribute("id", "ptitle");
  projectTitle.setAttribute("placeholder", "title");
  projectTitle.setAttribute("required","required");
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
  projectDueDateLabel.setAttribute("for","pduedate");
  projectDueDateLabel.textContent = ('Due Date');
  // due date input
  const projectDueDate = document.createElement('input');
  projectDueDate.setAttribute("type", "date");
  projectDueDate.setAttribute("id", "pduedate");
  projectDueDate.setAttribute("name", "pduedate");
  const dueDateMin = new Date().toISOString().split('T')[0];
  projectDueDate.setAttribute("min", dueDateMin);
  // submit button
  const newProjectSubmitButton = document.createElement('button');
  newProjectSubmitButton.classList.add('savebutton');
  newProjectSubmitButton.setAttribute("type", "button");
  newProjectSubmitButton.textContent = 'Save';

  // buttons div
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');

  // required note
  const requiredNote = document.createElement('p');
  requiredNote.classList.add('requirednote');
  requiredNote.textContent = '* = required';

  newProjectForm.appendChild(projectTitleLabel);
  newProjectForm.appendChild(projectTitle);
  newProjectForm.appendChild(projectDescriptionLabel);
  newProjectForm.appendChild(projectDescription);
  newProjectForm.appendChild(projectDueDateLabel);
  newProjectForm.appendChild(projectDueDate);
  newProjectForm.appendChild(buttonsDiv);
  newProjectForm.appendChild(requiredNote);
  buttonsDiv.appendChild(newProjectSubmitButton);
  buttonsDiv.appendChild(cancelButton());
  npFormContainer.appendChild(npFormHeading);
  npFormContainer.appendChild(newProjectForm);

  // event listener
  newProjectSubmitButton.addEventListener("click", function(){
    saveNewProject();
    newProjectForm.reset();
    npFormContainer.remove();
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'hidden';
  });

  return npFormContainer;
}


// NEW TASK FORM
function ntform(project) {

  console.log(`Running the new task form function and the current projectArray is ${projectArray} and the first object in it is named ${projectArray[0].pTitle} and the length is ${projectArray.length}`);

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
  newTaskForm.classList.add('form');
  newTaskForm.id = 'newtaskform';
  // create task title label
  const taskTitleLabel = document.createElement('label');
  taskTitleLabel.classList.add('formlabel');
  taskTitleLabel.setAttribute("for","ttitle");
  taskTitleLabel.textContent = ('* Title');
  // create input for project title
  const taskTitle = document.createElement('input');
  taskTitle.setAttribute("type", "text");
  taskTitle.setAttribute("name", "ttitle");
  taskTitle.setAttribute("id", "ttitle");
  taskTitle.setAttribute("required", "required");
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
  const dueDateMin = new Date().toISOString().split('T')[0];
  taskDueDate.setAttribute("min", dueDateMin);
  // associated project label
  const taskAssociatedProjectLabel = document.createElement('label');
  taskAssociatedProjectLabel.classList.add('formlabel');
  taskAssociatedProjectLabel.setAttribute("for","tassociatedproject");
  taskAssociatedProjectLabel.textContent = ('Save to Project:');
  // associated project options
  const taskAssociatedProject = document.createElement('select');
  taskAssociatedProject.setAttribute("id", "tassociatedproject");
  taskAssociatedProject.setAttribute("name", "tassociatedproject");
  for (var i = 0; i < projectArray.length; i++) {
    var currentOption = document.createElement('option');
    currentOption.setAttribute("value", `${projectArray[i].projectUUID}`);
    currentOption.textContent = projectArray[i].pTitle;
    currentOption.id = `option-${i}`;
    // if the currentOption is the same as passed project, make it preselected
    if (currentOption.id == project.projectUUID) {
      console.log('this is the project');
      currentOption.setAttribute("selected", "selected");
    };

    taskAssociatedProject.appendChild(currentOption);
  }
  // submit button
  const newTaskSubmitButton = document.createElement('button');
  newTaskSubmitButton.classList.add('savebutton');
  newTaskSubmitButton.textContent = 'Save';
  newTaskSubmitButton.setAttribute("type", "button");
  // buttons div
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');
  // required note
  const requiredNote = document.createElement('p');
  requiredNote.classList.add('requirednote');
  requiredNote.textContent = '* = required';
  // put it together
  newTaskForm.appendChild(taskTitleLabel);
  newTaskForm.appendChild(taskTitle);
  newTaskForm.appendChild(taskDescriptionLabel);
  newTaskForm.appendChild(taskDescription);
  newTaskForm.appendChild(taskDueDateLabel);
  newTaskForm.appendChild(taskDueDate);
  newTaskForm.appendChild(taskAssociatedProjectLabel);
  newTaskForm.appendChild(taskAssociatedProject);
  newTaskForm.appendChild(buttonsDiv);
  newTaskForm.appendChild(requiredNote);
  buttonsDiv.appendChild(newTaskSubmitButton);
  buttonsDiv.appendChild(cancelButton());
  ntFormContainer.appendChild(ntFormHeading);
  ntFormContainer.appendChild(newTaskForm);
  // event listener for when form is submitted
  newTaskSubmitButton.addEventListener("click", function(){
    const tTitle = document.getElementById('ttitle').value;
    // If title is blank
    if (tTitle == '') {
      // alert user
      alert('please fill out the title!');
    // If title is filled in
    } else {
      // save input values as variables
      // save description
      const tDescription = document.getElementById('tdescription').value;
      // save due date
      let tDueDate = document.getElementById('tduedate').value;
      // if due date is blank, update to No due date
      if (tDueDate == '') {
        tDueDate = String('No due date');
      // otherwise convert it to nicer format
      } else {
        tDueDate = (new Date(tDueDate)).toDateString();
      };
      // save associated project which is the UUID
      const tAssociatedProject = document.getElementById('tassociatedproject').value;

      // pass variables to save new task function
      saveNewTask(tTitle, tDescription, tDueDate, tAssociatedProject);
      newTaskForm.reset();
      ntFormContainer.remove();
      const overlay = document.getElementById('overlay');
      overlay.style.visibility = 'hidden';
    };
    });

  return ntFormContainer;
}




export { npform, ntform };