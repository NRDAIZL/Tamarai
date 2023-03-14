function ShowPassword() {
    var pass = document.getElementById("PInput");
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }
//onclick="ShowPassword()" f tag el button