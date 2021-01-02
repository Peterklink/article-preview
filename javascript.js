function btnPress(){
  let shareBox = document.getElementById("shareBox");
  let button = document.querySelector("button");
  let arrow = document.getElementById("btn-arrow");

  shareBox.classList.toggle("hidden");
  button.classList.toggle("active-button");
  arrow.classList.toggle("active-arrow");
}

document.querySelector("button").addEventListener("click", btnPress);
