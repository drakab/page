const name = document.getElementById("name");
const surname = document.getElementById("surname");
const phone = document.getElementById("phone");
const service = document.getElementById("service");
const form = document.getElementById("form");
const errors = document.getElementById("error-messages");
function phonenumber(str){
  let pattern = /^\(?([0-9]{3})\)?[-., ]?([0-9]{3})[-., ]?([0-9]{3})$/;
  return pattern.test(str);
}
form.addEventListener('submit', (e) =>{
    let messages = [];
    if (name.value === '' || name.value == null){
        messages.push('Name is required');
    }
    if (surname.value === '' || surname.value == null){
        messages.push('Surname is required');
    }
    if (phone.value === '' || phone.value == null){
        messages.push('Phone is required');
    }
    if (!phonenumber(phone.value)){
        messages.push('Incorrect value of phone (expected xxx-xxx-xxx)');
    }
    if (service.value === '' || service.value == null){
        messages.push('Service is required');
    }
    if (messages.length > 0){
        e.preventDefault();
        errors.innerText = messages.join(', ');
        errors.style.display = "block";
    } else{
        errors.style.display = "none";
    }
})