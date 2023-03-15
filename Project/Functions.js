function ShowPassword() {
    var pass = document.getElementById("PInput");
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }
//onclick="ShowPassword()" f tag el button
function validateForm() {
  let x = document.forms["former"]["user"].value;
  if (x == "") {
    alert("Username must be filled out");
    return false;
  }
}