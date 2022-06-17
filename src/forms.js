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
  // priority label
  const taskPriorityLabel = document.createElement('label');
  taskPriorityLabel.classList.add('formlabel');
  taskPriorityLabel.setAttribute("for","tpriority");
  taskPriorityLabel.textContent = ('Priority:');
  // priority
  const taskPriority = document.createElement('select');
  taskPriority.setAttribute("id", "tpriority");
  taskPriority.setAttribute("name","tpriority");
  const taskPriority1 = document.createElement('option');
  taskPriority1.setAttribute("value","p1");
  taskPriority1.setAttribute("id","p1");
  taskPriority1.textContent = 'Highest';
  const taskPriority2 = document.createElement('option');
  taskPriority2.setAttribute("value","p2");
  taskPriority2.setAttribute("id","p2");
  taskPriority2.textContent = 'High';
  const taskPriority3 = document.createElement('option');
  taskPriority3.setAttribute("value","p3");
  taskPriority3.setAttribute("id","p3");
  taskPriority3.textContent = 'Medium';
  const taskPriority4 = document.createElement('option');
  taskPriority4.setAttribute("value","p4");
  taskPriority4.setAttribute("id","p4");
  taskPriority4.textContent = 'Low';
  taskPriority.appendChild(taskPriority1);
  taskPriority.appendChild(taskPriority2);
  taskPriority.appendChild(taskPriority3);
  taskPriority.appendChild(taskPriority4);
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
    if (projectArray[i].projectUUID == project.projectUUID) {
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
  newTaskForm.appendChild(taskPriorityLabel);
  newTaskForm.appendChild(taskPriority);
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
      // save priority
      const tPriority = document.getElementById('tpriority').value;
      // save associated project which is the UUID
      const tAssociatedProject = document.getElementById('tassociatedproject').value;

      // pass variables to save new task function
      saveNewTask(tTitle, tDescription, tDueDate, tPriority, tAssociatedProject);
      newTaskForm.reset();
      ntFormContainer.remove();
      const overlay = document.getElementById('overlay');
      overlay.style.visibility = 'hidden';
    };
    });

  return ntFormContainer;
}

// END NEW TASK FORM




// EDIT TASK FORM
function editTaskForm(task) {

  console.log('Running the edit task form function');

  // Edit Task Form Container Div
  let editTaskFormContainer = document.createElement('div');
  editTaskFormContainer.id = (`edittaskformcontainer-${task.taskUUID}`);
  editTaskFormContainer.classList.add('edittaskformcontainer');
  // Header Title
  const editTaskFormHeading = document.createElement('h4');
  editTaskFormHeading.textContent = 'Edit Task:'
  editTaskFormHeading.classList.add('formheading');
  // Edit Task Form
  const editTaskForm = document.createElement('form');
  // editTaskForm.classList.add('taskform');
  editTaskForm.classList.add('edittaskform');
  editTaskForm.classList.add('form');
  editTaskForm.Id = `edittaskform-${task.taskUUID}`;
  // create task title label
  const taskTitleLabel = document.createElement('label');
  taskTitleLabel.classList.add('formlabel');
  taskTitleLabel.setAttribute("for","ttitle");
  taskTitleLabel.textContent = ('* Title:');
  // create input for project title
  const taskTitle = document.createElement('input');
  taskTitle.setAttribute("type", "text");
  taskTitle.setAttribute("name", "ttitle");
  taskTitle.setAttribute("id", "ttitle");
  taskTitle.setAttribute("required", "required");
  taskTitle.setAttribute("placeholder", task.tTitle);
  // description label
  const taskDescriptionLabel = document.createElement('label');
  taskDescriptionLabel.classList.add('formlabel');
  taskDescriptionLabel.setAttribute("for","tdescription");
  taskDescriptionLabel.textContent = ('Description:');
  // description input
  const taskDescription = document.createElement('textarea');
  taskDescription.setAttribute("type", "text");
  taskDescription.setAttribute("name", "tdescription");
  taskDescription.setAttribute("id", "tdescription");
  taskDescription.setAttribute("placeholder", task.tDescription);
  // due date label
  const taskDueDateLabel = document.createElement('label');
  taskDueDateLabel.classList.add('formlabel');
  taskDueDateLabel.setAttribute("for","tduedate");
  taskDueDateLabel.textContent = ('Due Date:');
  // due date input
  const taskDueDate = document.createElement('input');
  taskDueDate.setAttribute("type", "date");
  taskDueDate.setAttribute("id", "tduedate");
  taskDueDate.setAttribute("name", "tduedate");
  // const dueDateMin = new Date().toISOString().split('T')[0];
  // taskDueDate.setAttribute("min", dueDateMin);
  // priority label
  const taskPriorityLabel = document.createElement('label');
  taskPriorityLabel.classList.add('formlabel');
  taskPriorityLabel.setAttribute("for","tpriority");
  taskPriorityLabel.textContent = ('Priority:');
  // priority
  const taskPriority = document.createElement('select');
  taskPriority.setAttribute("id", "tpriority");
  taskPriority.setAttribute("name","tpriority");
  const taskPriority1 = document.createElement('option');
  taskPriority1.setAttribute("value","p1");
  taskPriority1.setAttribute("id","p1");
  taskPriority1.textContent = 'Highest';
  const taskPriority2 = document.createElement('option');
  taskPriority2.setAttribute("value","p2");
  taskPriority2.setAttribute("id","p2");
  taskPriority2.textContent = 'High';
  const taskPriority3 = document.createElement('option');
  taskPriority3.setAttribute("value","p3");
  taskPriority3.setAttribute("id","p3");
  taskPriority3.textContent = 'Medium';
  const taskPriority4 = document.createElement('option');
  taskPriority4.setAttribute("value","p4");
  taskPriority4.setAttribute("id","p4");
  taskPriority4.textContent = 'Low';
  taskPriority.appendChild(taskPriority1);
  taskPriority.appendChild(taskPriority2);
  taskPriority.appendChild(taskPriority3);
  taskPriority.appendChild(taskPriority4);
  // associated project label
  const taskAssociatedProjectLabel = document.createElement('label');
  taskAssociatedProjectLabel.classList.add('formlabel');
  taskAssociatedProjectLabel.setAttribute("for","tassociatedproject");
  taskAssociatedProjectLabel.textContent = ('Project:');
  // associated project options
  const taskAssociatedProject = document.createElement('select');
  taskAssociatedProject.setAttribute("id", "tassociatedproject");
  taskAssociatedProject.setAttribute("name", "tassociatedproject");
  // for (var i = 0; i < projectArray.length; i++) {
  //   var currentOption = document.createElement('option');
  //   currentOption.setAttribute("value", `${projectArray[i].projectUUID}`);
  //   currentOption.textContent = projectArray[i].pTitle;
  //   currentOption.id = `option-${i}`;
    // if the currentOption is the same as passed project, make it preselected
  //   if (projectArray[i].projectUUID == project.projectUUID) {
  //     console.log('this is the project');
  //     currentOption.setAttribute("selected", "selected");
  //   };
  //   taskAssociatedProject.appendChild(currentOption);
  // }
  // submit button
  const editTaskSubmitButton = document.createElement('button');
  editTaskSubmitButton.classList.add('savebutton');
  editTaskSubmitButton.textContent = 'Save';
  editTaskSubmitButton.setAttribute("type", "button");
  // buttons div
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');
  // required note
  const requiredNote = document.createElement('p');
  requiredNote.classList.add('requirednote');
  requiredNote.textContent = '* = required';
  // put it together
  editTaskFormContainer.appendChild(editTaskFormHeading);
  editTaskForm.appendChild(taskTitleLabel);
  editTaskForm.appendChild(taskTitle);
  editTaskForm.appendChild(taskDescriptionLabel);
  editTaskForm.appendChild(taskDescription);
  editTaskForm.appendChild(taskDueDateLabel);
  editTaskForm.appendChild(taskDueDate);
  editTaskForm.appendChild(taskPriorityLabel);
  editTaskForm.appendChild(taskPriority);
  editTaskForm.appendChild(taskAssociatedProjectLabel);
  editTaskForm.appendChild(taskAssociatedProject);
  editTaskForm.appendChild(buttonsDiv);
  editTaskForm.appendChild(requiredNote);
  buttonsDiv.appendChild(editTaskSubmitButton);
  buttonsDiv.appendChild(cancelButton());
  editTaskFormContainer.appendChild(editTaskForm);
  
  // taskBox.appendChild(editTaskFormContainer);
  // event listener for when form is submitted
  editTaskSubmitButton.addEventListener("click", function(){
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
      // save priority
      const tPriority = document.getElementById('tpriority').value;
      // save associated project which is the UUID
      const tAssociatedProject = document.getElementById('tassociatedproject').value;

      // Update Task Data
      task.tTitle = tTitle;
      task.tDescription = tDescription;
      task.tAssociatedProject = tAssociatedProject;
      task.tDueDate = tDueDate;
      task.tPriority = tPriority;

      // Update Task Row Display
      let taskRowTitle = document.getElementById(`taskrowtitle-${uniqueID}`);
      taskRowTitle.textContent = tTitle;
      let taskRowDueDate = document.getElementById(`taskrowduedate-${uniqueID}`);
      taskRowDueDate = tDueDate;
      // still need to update priority color

      editTaskForm.reset();
      // editTaskForm.remove();
      // const detailArea = document.getElementById(`detailarea-${uniqueID}`);
      // detailArea.classList.remove('hidden');
      // const overlay = document.getElementById('overlay');
      // overlay.style.visibility = 'hidden';
    };
    });

  return editTaskFormContainer;
}

// END EDIT TASK FORM




export { npform, ntform, editTaskForm };