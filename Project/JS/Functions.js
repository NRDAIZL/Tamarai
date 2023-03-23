document.forms['former'].onsubmit = function(event)
{
   if(this.admin-code.value.trim() === ""){
     document.querySelector(".Aerror").innerHTML = "Please enter a valid code";
     document.querySelector(".Aerror").style.display = "block";
     event.preventDefault();
     return false;
   }

   if(this.username.value.trim() === ""){
      document.querySelector(".Uerror").innerHTML = "Please enter a username";
      document.querySelector(".Uerror").style.display = "block";
      event.preventDefault();
      return false;
   }

   if(this.email.value.trim() === "" || theForm.email.value.length < 10){
      document.querySelector(".Eerror").innerHTML = "Please enter an email";
      document.querySelector(".Eerror").style.display = "block";
      event.preventDefault();
      return false;
   }
  
   if(this.password.value.trim() === "" || this.password.value.length < 6){
      document.querySelector(".Perror").innerHTML = "Please enter a password";
      document.querySelector(".Perror").style.display = "block";
      event.preventDefault();
      return false;
   }

}
