document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      // Fetch all form values
      const cropName = document.querySelector('select[name="cropName"]').value;
      const tonnage = document.querySelector('#tonnage').value;
      const amountPaid = document.querySelector('#amountPaid').value;
      const buyersName = document.querySelector('#buyersName').value;
      const agentName = document.querySelector('#agentName').value;
      const date = document.querySelector('#date').value;
      const time = document.querySelector('#time').value;
  
      // Regular expression for valid names (at least 2 characters)
      const namePattern = /^[a-zA-Z]{2,}$/;
  
      let isValid = true;
      let errorMessage = '';
  
      // Validation checks
  
      // Product should not be empty
      if (cropName === '') {
        errorMessage += 'Please select a valid product.\n';
        isValid = false;
      }
  
      // Tonnage should be numeric, not empty, and at least 3 digits
      if (tonnage === '' || isNaN(tonnage) || tonnage.length < 2) {
        errorMessage += 'Please enter a valid tonnage (at least 3 digits).\n';
        isValid = false;
      }
  
      // Amount Paid should be numeric and not empty, at least 5 digits
      if (amountPaid === '' || isNaN(amountPaid) || amountPaid.length < 5) {
        errorMessage += 'Please enter a valid amount paid (at least 5 digits).\n';
        isValid = false;
      }
  
      // Buyer's name should not be empty and must have at least 2 characters
      if (!namePattern.test(buyersName)) {
        errorMessage += 'Please enter a valid buyer\'s name (at least 2 characters).\n';
        isValid = false;
      }
  
      // Sales agent's name should not be empty and must have at least 2 characters
      if (!namePattern.test(agentName)) {
        errorMessage += 'Please enter a valid sales agent\'s name (at least 2 characters).\n';
        isValid = false;
      }
  
      // Date should not be empty
      if (date === '') {
        errorMessage += 'Please select a valid date.\n';
        isValid = false;
      }
  
      // Time should not be empty
      if (time === '') {
        errorMessage += 'Please select a valid time.\n';
        isValid = false;
      }
  
      // If any validation fails, prevent form submission
      if (!isValid) {
        alert(errorMessage);
        event.preventDefault();
      }
    });
  });
  