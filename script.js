
const form = document.querySelector('#form');
const firstname = document.querySelector("#firstname");
const secondname = document.querySelector("#secondname");
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');


form.addEventListener('submit',(e)=>{

    if(!valitateInputs()){
        e.preventDefault();
    }

})

function valitateInputs(){
     
    const firstnameVal = firstname.value.trim();
    const secondnameVal = secondname.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true;

    if(firstnameVal === ''){
        success = false;
        setError(firstname,'Firstname is Required')
    }
    else{
        setSuccess(firstname)
    }
    if(secondnameVal === ''){
        success = false;
        setError(secondname,'Secondname is Required')
    }
    else{
        setSuccess(secondname)
    }
    if(emailVal === ''){
        success = false;
        setError(email,'Email is Required')
    }
    else if(!valitateEmail(emailVal)){
        success = false;
        setError(email,"Please Enter a Valid Email")
    }
    else{
        setSuccess(email)
    }
    if(passwordVal === ''){
        success = false;
        setError(password,'Password is Required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(password,'Password must be atleast 8 characters')
    }
    else{
        setSuccess(password)
    }
    if(cpasswordVal === ''){
        success = false;
        setError(cpassword,'Confirm Password is Required')
    }
    else if(cpasswordVal !== passwordVal){
        success = false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }

    return success;

}

function setError(element,message){
     const inputGroup = element.parentElement;
     const errorElement = inputGroup.querySelector('.error');

     errorElement.innerText = message;
     inputGroup.classList.add('error')
     inputGroup.classList.remove('success')
     
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
    
}

const valitateEmail = (email) =>{

    return String(email)
    .toLowerCase()
    .match(
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    );
};