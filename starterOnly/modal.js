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



document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault()
  validate()
})

function validate() {
  let prenom = document.getElementById("first").value
  let nom = document.getElementById('last').value
  let email = document.getElementById('email').value


  let error = 0
  if(prenom.length < 2) {
    error++
    let errorSpan = document.getElementById('errorFirst')
    errorSpan.textContent = 'Le prénom fait moins de 2 caractères'
    first.style.border="2px solid red";
  } else {
    document.getElementById('errorFirst').textContent = ''
    first.style.border="2px solid green";
  }


  if (nom.length < 2) {
    error++
    let errorSpan = document.getElementById('errorLast')
    errorSpan.textContent = 'Le prénom fait moins de 2 caractères'
    last.style.border="2px solid red";
  } else {
    document.getElementById ('errorLast').textContent =''
    last.style.border="2px solid green";
  }
  if (prenom.length == 0) {
    error++
    let errorSpan = document.getElementById('errorFirst')
    errorSpan.textContent = 'Le prenom est un champ obligatoire. Veuillez le renseigner'
    first.style.border="2px solid red";
  }

  if (nom.length == 0) {
    error++
    let errorSpan = document.getElementById('errorLast')
    errorSpan.textContent = 'Le nom est un champ obligatoire. Veuillez le renseigner'
    first.style.border="2px solid red";
  }


  if(email.length < 1 || !validateEmail(email)) {
    error++
     let errorSpan = document.getElementById('errorEmail')
    errorSpan.textContent = 'Veuillez respecter le format email : exemple@domaine.com'
    styleEmail.style.border="2px solid red ";
  } else {
    document.getElementById('errorEmail').textContent=''
    styleEmail.style.border="2px solid green ";
  }
  if (email.length == 0) {
    error++
    let errorSpan = document.getElementById('errorEmail')
    errorSpan.textContent = 'Le champ Email est obligatoire. Veuillez le renseigner'
    first.style.border="2px solid red";
  }

}
