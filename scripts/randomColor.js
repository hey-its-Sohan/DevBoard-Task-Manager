
const backgroundColor = document.getElementById("background-color");
const bgThemeButton = document.getElementById("theme-btn");

bgThemeButton.addEventListener('click',function () {
  
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let opacity = 0.3;

  let bg = "rgba(" + x + "," + y + "," + z + "," +opacity+ ")";

  backgroundColor.style.background = bg;
  
})