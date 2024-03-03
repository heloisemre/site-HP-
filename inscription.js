let form = document.querySelector("form");
localStorage.setItem('connected', null)

// console.log(localStorage.getItem("name"));
// if (localStorage.getItem("name") != null) {
//   window.location.href = "index.html";
// }

form.addEventListener("submit", function (event) {
  // Annule le comportement par défaut (envoie du formulaire)
  event.preventDefault();
  console.log("i m here");
  let errorContainer = document.querySelector(".message-error");
  let errorList = document.createElement("ul");

  errorContainer.appendChild(errorList);

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  if (document.querySelector("#pseudo") != null) {

  }
  else if (document.querySelector("#pseudo") = null) {
  } else {
  }


  let email = document.querySelector("#email");

  let pseudo = document.querySelector("#pseudo");

  let password = document.querySelector("#passeword");
  console.log(email);
  console.log(pseudo.value);
  console.log(password.value);
  if (

     (pseudo.value != "" && email.value != "" && password.value !=""))

  {
    console.log("ok");
    localStorage.setItem("name", pseudo.value);
    localStorage.setItem("email", email.value);
    console.log("tre");
    window.location.href = "index.html";
  }

if (email.value != "" && password.value != "") {
  console.log("ok");
  localStorage.setItem("name", pseudo.value);
  localStorage.setItem("email", email.value);
  console.log("tre");
  window.location.href = "index.html";
}

});


function register() {
  let email = document.querySelector("#email");
  
  let password = document.querySelector("#password");


  localStorage.setItem(email.value, password.value)
}

function login() {
  let email = document.querySelector("#loginEmail")
  let password = document.querySelector("#loginPassword")

  let tocheck = localStorage.getItem(email.value)
  if (tocheck == password.value) {
    localStorage.setItem('connected', 'true')
    window.location.href ="index.html";
  } else {
    alert("bad email or password")
  }
  
}




function LoginFormOn() {
  const BoxLogin = document.querySelector('.BoxLogin')
  const BoxInscription =document.querySelector('.BoxInscription')
  console.log('je suis la')
  BoxLogin.classList.remove('hide')
  BoxInscription.classList.add('hide')
}
function SignUpFormOn() {
  const BoxLogin = document.querySelector('.BoxLogin')
  const BoxInscription =document.querySelector('.BoxInscription')
  console.log('prout')
  BoxLogin.classList.add('hide')
  BoxInscription.classList.remove('hide')
}




