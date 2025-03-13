
const currTime = new Date();
const day = currTime.getDate();
const dayName = currTime.toLocaleString("en-US", { weekday: "short" });
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const month = monthNames[currTime.getMonth()];
const year = currTime.getFullYear();

timeNow = `${dayName} ${day}, ${month} ${year}`;

const dateToday = document.getElementById("date");
 dateToday.innerText = timeNow;

