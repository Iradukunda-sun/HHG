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

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      // Fetch all form values
      const cropName = document.querySelector('select[name="cropName"]').value;
      const type = document.querySelector('select[name="Type"]').value;
      const date = document.querySelector('#date').value;
      const tonnage = document.querySelector('#tonnage').value;
      const cost = document.querySelector('#cost').value;
      const dealersName = document.querySelector('#dealers_name').value;
      const branchName = document.querySelector('select[name="branch_name"]').value;
      const contactInfo = document.querySelector('#contact_info').value;
      const salePrice = document.querySelector('#saleprice').value;
  
      // Regular expression for valid phone numbers
      const phonePattern = /^[0-9]{10}$/;
  
      let isValid = true;
      let errorMessage = '';
  
      // Validation checks
  
      // Produce Name should not be empty
      if (cropName === '') {
        errorMessage += 'Please select a valid product.\n';
        isValid = false;
      }
  
      // Type should not be empty
      if (type === '') {
        errorMessage += 'Please select a valid type.\n';
        isValid = false;
      }
  
      // Date should not be empty
      if (date === '') {
        errorMessage += 'Please select a valid date.\n';
        isValid = false;
      }
  
      // Tonnage should be numeric and not empty
      if (tonnage === '' || isNaN(tonnage) || tonnage.length < 3) {
        errorMessage += 'Please enter a valid tonnage (at least 3 digits).\n';
        isValid = false;
      }
  
      // Cost per ton should be numeric and not less than 5 digits
      if (cost === '' || isNaN(cost) || cost.length < 5) {
        errorMessage += 'Please enter a valid cost per ton (at least 5 digits).\n';
        isValid = false;
      }
  
      // Dealer's name should not be empty and should have at least 2 characters
      if (dealersName === '' || dealersName.length < 2) {
        errorMessage += 'Please enter a valid dealer\'s name (at least 2 characters).\n';
        isValid = false;
      }
  
      // Branch Name should not be empty
      if (branchName === '') {
        errorMessage += 'Please select a valid branch.\n';
        isValid = false;
      }
  
      // Contact Info should be a valid 10-digit phone number
      if (!phonePattern.test(contactInfo)) {
        errorMessage += 'Please enter a valid contact number (10 digits).\n';
        isValid = false;
      }
  
      // Sale Price should be numeric
      if (salePrice === '' || isNaN(salePrice)) {
        errorMessage += 'Please enter a valid sale price.\n';
        isValid = false;
      }
  
      // If any validation fails, prevent form submission
      if (!isValid) {
        alert(errorMessage);
        event.preventDefault();
      }
    });
  });
  