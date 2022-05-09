import { allTasksArray } from "./projectmanager";

function displayRandomTask() {
  var min = 0;
  var max = allTasksArray.length-1;
  min = Math.ceil(min);
  max = Math.floor(max)
  const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(min);
  console.log(max);
  console.log(randomIndex);
  console.log(allTasksArray[randomIndex]);
}




export { displayRandomTask };