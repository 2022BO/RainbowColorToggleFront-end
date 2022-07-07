let menuZichtbaar = false;

function menuButton() {
  let menu_zelf = document.querySelector(".menu_box");
  console.log (menu_zelf)
  console.log ("opdeknopgedrukt")
console.log (menuZichtbaar)
  if (menuZichtbaar === false){
    console.log("Laat het menu zien!")
    menu_zelf.style.visibility = "visible";
    menuZichtbaar = true
 } else if (menuZichtbaar === true) {
  console.log ("menuZichtbaar")
  menu_zelf.style.visibility = "hidden";
  menuZichtbaar = false
}
}
document.getElementById("menu-div").addEventListener("click", menuButton);

//uitklap kleuren
let bodyAchtergrond = document.querySelector("body");


function veranderBlue() {
  console.log ("druk blauw")
  bodyAchtergrond.style.backgroundColor = "lightblue";
  //aanroepen functie om de knop (on)zichtbaar te maken
  menuButton();
}
document.getElementById("customize").addEventListener("click", veranderBlue);

function veranderPink() {
  console.log ("druk pink")
  bodyAchtergrond.style.backgroundColor = "lightpink";
   //aanroepen functie om de knop (on)zichtbaar te maken
  menuButton();
}
document.getElementById("produce").addEventListener("click", veranderPink);

function veranderGreen() {
  console.log ("druk green")
  bodyAchtergrond.style.backgroundColor = "lightseagreen";
   //aanroepen functie om de knop (on)zichtbaar te maken
  menuButton();
}
document.getElementById("simplify").addEventListener("click", veranderGreen);

function veranderYellow() {
  console.log ("druk geel")
  bodyAchtergrond.style.backgroundColor = "lightyellow";
   //aanroepen functie om de knop (on)zichtbaar te maken
  menuButton();
}
document.getElementById("logOut").addEventListener("click", veranderYellow);



