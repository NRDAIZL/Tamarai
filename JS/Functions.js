function ValidateName(field)
{
  if (field == '')
  {
    document.getElementById('Uerror').innerHTML='Enter a valid username';
    document.getElementById('Uerror').style.display='block';
    return false;
  }
  else
  {
    document.getElementById('Uerror').innerHTML='';
    document.getElementById('Uerror').style.display='none';
    return true;
  }
}   
function ValidatePass(field)
{
  if (field == '')
  {
    document.getElementById('Perror').innerHTML='Enter a valid password';
    document.getElementById('Perror').style.display='block';
    return false;
  }
  else
  {
    document.getElementById('Perror').innerHTML='';
    document.getElementById('Perror').style.display='none';
    return true;
  }
}
function ValidateMail(field)
{
  if (field == '')
  {
    document.getElementById('Eerror').innerHTML='Enter a valid email';
    document.getElementById('Eerror').style.display='block';
    return false;
  }
  else
  {
    document.getElementById('Eerror').innerHTML='';
    document.getElementById('Eerror').style.display='none';
    return true;
  }
}

function Validation(form)
{
  let failing ='';
  failing&= ValidateName(form.username.value.trim());
  failing&= ValidatePass(form.password.value.trim());
  failing&= ValidateMail(form.email.value.trim());
  
  if(failing)
  {
    return true;
  }
  else
  {
    return false;
  }
}

