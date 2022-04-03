function validate() {
  const isAuth = localStorage.isAuth;
  if (isAuth && isAuth === "true") {
    console.log("access granted");
  } else {
    window.location.pathname = "/signin.html";
    console.log("access denied");
  }
}

window.onload = validate;
