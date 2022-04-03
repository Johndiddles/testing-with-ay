function validate() {
  const isAuth = localStorage.isAuth;
  if (isAuth && isAuth === "true") {
    console.log("access granted");
    window.location.pathname = "/dashboard.html";
  } else {
    console.log("access denied");
  }
}

window.onload = validate;
