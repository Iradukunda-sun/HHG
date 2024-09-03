const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');


let error = 0;
const formValidation =(event) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = document.getElementById('emailError');
    if(email.value ==''){
        email.style.border = '1px solid red';
        emailError.textContent = 'please enter an email address';
        emailError.style = "color: red";
        error++ //value of error increased by 1
    }
    else if(!email.value.match(emailRegex)){
            email.style.border = '1px solid red';
            emailError.textContent = 'please enter a valid email address';
            emailError.style = "color: red";
            error++ //value of error increased by 1
        }
        else{
            email.style.border = '1px solid green';
            emailError.textContent = '';
            emailError.style = "color: green";
        }

        // const emailError = document.getElementById('emailError');
    if(password.value ==''){
        password.style.border = '1px solid red';
        passwordError.textContent = 'please enter a password';
        passwordError.style = "color: red";
        error++ //value of error increased by 1
    }
    else if(password.value.length < 6){
            password.style.border = '1px solid red';
            passwordError.textContent = 'password must be at least 6 characters';
            passwordError.style = "color: red";
            error++ //value of error increased by 1
        }
        else{
            password.style.border = '1px solid green';
            passwordError.textContent = '';
            passwordError.style = "color: green";
        }

       //confirm password
       const confirmPasswordError = document.getElementById('confirmPasswordError');  
    if(confirmPassword.value !==password.value){
        confirmPassword.style.border = '1px solid red';
        confirmPasswordError.textContent = 'The password does not match';
        confirmPasswordError.style = "color: red";
        error++ //value of error increased by 1
    }
    
        else{
            confirmPassword.style.border = '1px solid green';
            confirmPasswordError.textContent = '';
            // confirmPassword.style = "color: green";
        }

        //Telephone Number Error
        const theNumberError = document.getElementById('theNumberError'); 
        const internationalPhoneRegex = /^\+\d{1,15}$/; 
        const phoneRegex = /^\d{10}$/;
        if(theNumber.value ==''){
            theNumber.style.border = '1px solid red';
            theNumberError.textContent = 'Please enter your phone number';
            theNumberError.style = "color: red";
            error++ //value of error increased by 1
        }  
        else if(!theNumber.value.match(internationalPhoneRegex) && !theNumber.value.match(phoneRegex)){
            theNumber.style.border = '1px solid red';
            theNumberError.textContent = 'please enter a valid phone number';
            theNumberError.style = "color: red";
            error++ //value of error increased by 1
        }
        else{
            theNumber.style.border = '1px solid green';
            theNumberError.textContent = '';
            // confirmPassword.style = "color: green";
        }


    if(error>0){
        event.preventDefault();
    }
}

