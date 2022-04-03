const logoutBtn = document.getElementById("logout");

function setDefault() {
  localStorage.setItem("usr", "johndiddles");
  localStorage.setItem("pwd", "john@123");
}

function handleInput(e) {
  localStorage.setItem(e.target.name, e.target.value.toLowerCase());
}

function handleLogin(e) {
  e.preventDefault();

  if (
    localStorage.username === localStorage.usr &&
    localStorage.password === localStorage.pwd
  ) {
    alert("logged in successfully");
    localStorage.setItem("isAuth", "true");
    window.location.pathname = "/dashboard.html";
  } else {
    alert("wrong credentials");
  }
}

function removeLoginDetails() {
  localStorage.removeItem("isAuth");
  localStorage.removeItem("username");
  localStorage.removeItem("password");
}

function logout() {
  removeLoginDetails();

  alert("logged out successfully");
  window.location.pathname = "/signin.html";
}

// function validate() {
//   const isAuth = localStorage.isAuth;
//   if (isAuth && isAuth === "true") {
//     console.log("access granted");
//   } else {
//     console.log("access denied");
//   }
// }

window.onload = setDefault;
