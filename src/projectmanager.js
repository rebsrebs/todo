import { npform } from './newprojectform.js';

let projectArray = [];

// PROJECT CLASS
class Project {
  constructor (pTitle, pDescription, pDueDate, pStatus){
    this.pTitle = pTitle;
    this.pDescription = pDescription;
    this.pDueDate = pDueDate;
  }
  setStatus(pStatus) {
    this.pStatus = pStatus;
  }     
}
// END PROJECT CLASS

// FUNCTION TO SAVE NEW PROJECT
const saveNewProject = function(){
  console.log('saveNewProject function has started');
  const pTitle = document.getElementById('ptitle').value;
  const pDescription = document.getElementById('pdescription').value;
  const pDueDate = document.getElementById('pduedate').value;
  let pStatus = 'open';
  const project = new Project(pTitle, pDescription, pDueDate, pStatus);
  projectArray.push(project);
  console.log(project);
  console.log([projectArray]);
}
// END FUNCTION TO SAVE NEW PROJECT

export { saveNewProject };