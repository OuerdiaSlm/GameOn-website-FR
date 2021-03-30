function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalX = document.querySelectorAll(".close");


function newFunction() {
  return "#close";
}

// launch modal forms
function launchModal() {
  modalbg.style.display = "block";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close Modal event
closeModalX.forEach(btn => btn.addEventListener("click", closeModal));


// close modal form
function closeModal() {
  modalbg.style.display = "none";
}



