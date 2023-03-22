document.forms['former'].onsubmit = function(event){
   
    if(this.username.value.trim() === ""){
       document.querySelector(".Uerror").innerHTML = "Please enter a username";
       document.querySelector(".Uerror").style.display = "block";
       event.preventDefault();
       return false;
    }
  
    if(this.password.value.trim() === ""){
       document.querySelector(".Perror").innerHTML = "Please enter a password";
       document.querySelector(".Perror").style.display = "block";
       event.preventDefault();
       return false;
    }
 }	
