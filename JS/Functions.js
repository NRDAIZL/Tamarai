// class formValidator 
// {
//     constructor(form, fields) {
//         this.form = form
//         this.fields = fields
//     }
//     initialize() {
//         this.validateOnSubmit()
//     }
//     validateOnSubmit() {
//         let self = this;
//         this.form.addEventListener('submit', event => {
//             event.preventDefault()
//             self.fields.forEach(field => {
//                 const input = document.getElementById(field);
//                 self.validateFields(input)
//             })
//         })

//     }
//     validateFields(field) {
//         if (field.value.trim === "") 
//         {
//             document.getElementById('error-message').innerHTML="Cannot be blank";
//             return false;
//         }
        // else {
        //     this.setStatus(field, null,"success")

        // }
        // if (field.type === "email") {
        //     const re =  /\S+@\S+.\S+/
        //     if(re.test(field.value)) {
        //         this.setStatus(field, null, "Success")
        //     }
        //     else {
        //         this.setStatus(field, "Please enter a valid Email", "Error")
        //     }
        // }
        // if(field.id === "password") {i
        //     // const passwordField = this.form.querySelector('#password')
        //     if(field.value.trim === "") {
        //         this.setStatus(field, "Password required", "Error")
        //     }
        //     // else if(field.value!=passwordField.value){
        //     //     this.setStatus(field,"Password doesn't match", "Error")
        //     }
        //     else {
        //         this.setStatus(field, null, "Success")
        //     }
//         }
// }
// const form = document.querySelector('.form')
// const fields = ["username", "email", "password", "confirmpassword"]
// const validator = new formValidator(form, fields)
// validator.initialize()

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const dob = document.getElementById('date-of-birth');
form.addEventListener('submit',(e)=>{

    e.preventDefault();
    
    validateFields();
    });
function validateFields()
{
    const name=username.value.trim();
    const passes=password.value.trim();
    const emai=email.value;
    const deb=dob.value;

  if(name =='')
{
  document.getElementById('Uerror').innerHTML="Username Cannot Be Empty";
  return false;
}
else
{
    document.getElementById('Uerror').innerHTML="";
    return true;
}
}
