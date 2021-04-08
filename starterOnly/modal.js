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



// Evenement d'envoie du formulaire 
document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault()
  validate()
})

// Verification des donnèes formulaire
function validate() {
  let prenom = document.getElementById("first").value
  let nom = document.getElementById('last').value
  let email = document.getElementById('email').value
  let styleEmail = document.getElementById("email");
  let birthdate = document.getElementById("birthdate")
  let quantity = document.getElementById('quantity')
  let loca = document.getElementById('loca')
  let checkbox1 = document.getElementById('checkbox1')

  // Gestion des erreurs 
  // conditions prenom
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

  // Condition nom
  if (nom.length < 2) {
    error++
    let errorSpan = document.getElementById('errorLast')
    errorSpan.textContent = 'Le prénom fait moins de 2 caractères'
    last.style.border="2px solid red";
  } else {
    document.getElementById ('errorLast').textContent =''
    last.style.border="2px solid green";
  }

  // Condition email
   if(email.length < 1 || !validateEmail(email)) {
    error++
     let errorSpan = document.getElementById('errorEmail')
    errorSpan.textContent = 'Veuillez respecter le format email : exemple@domaine.com'
    styleEmail.style.border="2px solid red ";
  } else {
    document.getElementById('errorEmail').textContent=''
    styleEmail.style.border="2px solid green ";
  }

  // Condition date de naissance
   if (birthdate.value == 0) {
    error++
    let errorSpan = document.getElementById('errorBirthdate')
    errorBirthdate.textContent='Le champ anniversaire est obligatoire. Veuillez le renseigner'
    birthdate.style.border="2px solid red";
   } else {
    document.getElementById('errorBirthdate').textContent=''
    birthdate.style.border="2px solid green ";
   }

  // Condition nombre de fois evenment
   if (quantity.value == 0 || !Number(quantity.value)) {
    error++
    let errorSpan = document.getElementById('errorQuantity')
    errorQuantity.textContent='Ce champ est obligatoire. Veuillez entrer un nombre'
    quantity.style.border="2px solid red";
   } else {
    document.getElementById('errorQuantity').textContent=''
    quantity.style.border="2px solid green ";
   }

  // Condition radio evenement
   let isChecked = 0
  
   for(let i=0; i<loca.children.length; i++){
    if(loca.children[i].checked){
      isChecked++
    }
  }
  if (isChecked == 0) {
    let errorLoca = document.getElementById('errorLoca')
    errorLoca.textContent= "Il faut cocher au moin un evenement"
  } else {
    document.getElementById('errorLoca').textContent=""
  }

  // Condition generales
  if (!checkbox1.checked) {
    error++
    let errorConditions = document.getElementById('errorConditions')
    errorConditions.textContent='Il faut accepter les conditions génerales'
    document.getElementById('brr').style.display="block";
  } else {
    document.getElementById('errorConditions').textContent='';
    document.getElementById('brr').style.display="none";
  }




  // Condition en cas d'erreur d'envoie du formulaire, apparition du message de validation
  if(error == 0) {
      validation.style.display="flex";
    } else {
      validation.style.display="none";
    }
  }

// Condition email regex
function validateEmail(mail) 
{
  return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))

}


