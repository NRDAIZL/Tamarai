
class formValidator
{
   constructor(form, fields)
   {
      this.form=form;
      this.fields=fields;
   }
   initialize()
   {
      this.validateOnSubmit();
   }
   validateOnSubmit()
   {
      let self = this;
      this.form.addEventListener('submit', event=>
      {
         event.preventDefault();
         self.fields.array.forEach(element => {
            const input = document.querySelector(`#${field}`);
            self.validateFields(input);
         });
      })
   }
   validateFields(field)
   {
      if(field.value.trim == "")
      {
         this.setStatus(field, field.previousElementSibiling.innerText + 'Cannot be blank', "Error")
      }
      else {
         this.setStatus(field, null,"success")
     }
     if (field.type === "email") {
         const re =  /\S+@\S+.\S+/
         if(re.test(field.value)) {
             this.setStatus(field, null, "Success")

         }
         else {
             this.setStatus(field, "Please enter a valid Email", "Error")
         }
     }
     if(field.id === "confirmpassword") {i
         const passwordField = this.form.querySelector('#password')
         if(field.value.trim === "") {
             this.setStatus(field, "Password confirmation required", "Error")
         }
         else if(field.value!=passwordField.value){
             this.setStatus(field,"Password doesn't match", "Error")
         }
         else {
             this.setStatus(field, null, "Success")
         }
     }

   }
   setStatus(field, message, status) {
      const errorMsg = field.parentEleemnt.querySelector('.error-message')
      if (status === "Success") {
          if(errorMsg) {
              errorMsg.innerText = ""
          }
          field.classList.remove('input-error')
      }
      if (status === "error") {
          field.parentEleemnt.querySelector('.error-message').innerText = message
          field.classList.add('input-error')
      }
  }

}
const form = document.querySelector('.form')
const fields = ["username", "email", "password", "confirmpassword"]
const validator = new formValidator(form, fields)
validator.initialize()
