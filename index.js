let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let signinForm = document.getElementById("signinForm");
let title = document.getElementById("title");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    if(nameField.style.maxHeight ="0"){
      nameField.classList.add("signinForm");
    }
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

let accounts = document.getElementById("accounts");
let shutup = document.getElementById("shutup");
let formCont = document.getElementById("formCont");
accounts.addEventListener("click", showForm);
function showForm(){
    formCont.style.display="block";
    shutup.style.display="block"
    menubar.style.top = "0";
}
shutup.addEventListener("click", hide);
function hide(){
  formCont.style.display="none";
  shutup.style.display="none"
  menubar.style.top = "-100";
}

let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");

let GenError = document.getElementById("GenError");
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");


function ValidateForm(event) {
  event.preventDefault();

if (
    nameInput.value.trim() === "" &&
    emailInput.value.trim() === "" &&
    passwordInput.value === ""
  ) {
    GenError.innerHTML = "Please fill in the form.";
    return false;
  }

   GenError.innerHTML = "";


  if (nameInput.value.trim() === "") {
    nameError.innerHTML = "Your..Name";
    // alert("Error: Full name is empty");
    return false;
  }else {
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }

  const re = /^[\w ]+$/;
  if (!re.test(nameInput.value.trim())) {
    nameError.innerHTML = "Contains..invalid..characters";
    // alert("Error: Full name contains invalid characters!");
    return false; 
  }else {
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }
    

  if (emailInput.value.trim() === "") {
    emailError.innerHTML = "Your..Email";
    // alert("Error: Please enter your email address.");
    return false;
  }else {
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.innerHTML = "Enter..a..Valid..Email";
    // alert("Error: Please enter a valid email address.");
    return false;
  }
  else {
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }

     const storedData = localStorage.getItem("userData");
  if (storedData) {
    const userData = JSON.parse(storedData);
    if (userData.email === emailInput.value.trim()) {
      // Email has been used before, display error message
      GenError.innerHTML = "Email has already been used. Please login.";
      return false;
    }
  }

  const userData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value
  };
  localStorage.setItem("userData", JSON.stringify(userData));



  if (passwordInput.value === "") {
    passwordError.innerHTML = "Your..Password";
    // alert("Error: Password is empty");
    return false;
  }else {
    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }


  if (passwordInput.value.length < 6) {
    passwordError.innerHTML = "Password..is..too..short";
    // alert("Error: Password must be at least 8 characters long");
    return false;
  }else {
    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }

 
  localStorage.setItem("userData", JSON.stringify(userData));

  GenError.innerHTML = "Sign Up successful! please Login";

  // Enable the Sign In button
  let signinBtn = document.getElementById("signinBtn");
  signinBtn.disabled = false;

  return true;
}

function ValidateLogin(event) {
  event.preventDefault();

  // Retrieve user data from local storage
  const storedData = localStorage.getItem("userData");
  if (!storedData) {
  GenError.innerHTML = "User..data..not..found..Please..sign..up..first.";
    return false;
  }

  const userData = JSON.parse(storedData);

  if (emailInput.value.trim() === "") {
    emailError.innerHTML = "enter..your..email..address";
    return false;
  }else {
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }

  if (emailInput.value.trim() !== userData.email) {
    emailError.innerHTML = "Email..address..does..not..match";
    return false;
  }else {
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }

  if (passwordInput.value === "") {
    passwordError.innerHTML = "Password is empty";
    return false;
  }else {
    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }

  if (passwordInput.value !== userData.password) {
    passwordError.innerHTML = "Incorrect password";
    return false;
  }else {
    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }

  GenError.innerHTML = "Login successful!";
  window.location.href = "index.htm";

  return true;
}

// signinBtn.disabled = true; // Disable Sign In button initially
signinBtn.addEventListener("click", ValidateLogin);

signupBtn.addEventListener("click", ValidateForm);


