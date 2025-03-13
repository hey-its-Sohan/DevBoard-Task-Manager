
const cardsCointainer = document.getElementsByClassName("cards-container");
const activity = document.getElementById("activity");
const button = document.querySelectorAll(".btn");
const checkedTasks = document.getElementById("checked-tasks");
const taskAssigned = document.getElementById("task-assigned");
const clearHistory = document.getElementById("clear-history");
const discoverNew = document.getElementById("discover");
const cardHead = document.getElementsByClassName(".card-hd");


discoverNew.addEventListener('click',function(){
  window.location.href = "./blog.html";
})



for( let cards of cardsCointainer){
  const btn = cards.querySelector("button");
  btn.addEventListener("click", function (event){

    const p = document.createElement("p");
    const head = (event.target.parentNode.parentNode.querySelector("h2").innerText);
    p.innerText = `You have Complete The Task ${head} at` +' '+time();
    p.classList.add("mb-4","bg-primary-color/[0.07]","p-3","rounded-lg")
    alert('Task Completed Successfully');
    activity.append(p);
    btn.setAttribute("disabled",true);
    btn.style.opacity = 0.3;
    

    let taskChecked = parseInt(checkedTasks.innerText);
    let updatedtaskChecked = taskChecked+1;
    checkedTasks.innerText = updatedtaskChecked;

    let assignedTask = parseInt(taskAssigned.innerText);
    for (let i=0; i<assignedTask; i++){
      let updatedassignedTask = assignedTask - 1;
      if (updatedassignedTask >= 0) {
        taskAssigned.innerText = updatedassignedTask;
      }
      else{
        
        alert('You have completed all the tasks');
      }

    }
    // let updatedassignedTask = assignedTask - 1;
    // taskAssigned.innerText = updatedassignedTask;

    // if (updatedassignedTask === 0) {
    //   alert('You have completed all the tasks');
    // }

  })
}

clearHistory.addEventListener('click',function(){
  
  // if (activity.hasChildNodes()) {
  //   activity.removeChild();
  // }
  activity.innerHTML = ""
})

function time(){
  const exactTime = new Date();
  let hours = exactTime.getHours();
  let minutes = exactTime.getMinutes();
  let seconds = exactTime.getSeconds();
  
  const AmOrPm = hours >= 12 ? "PM" : "AM";
  hours = (hours % 12) || 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  

  let exactTimeNow = `${hours}:${minutes}:${seconds} ${AmOrPm}`

  return exactTimeNow;

}