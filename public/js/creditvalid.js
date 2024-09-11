document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      // Fetch all form values
      const buyersName = document.querySelector('#buyersName').value;
      const niN = document.querySelector('#niN').value;
      const location = document.querySelector('#location').value;
      const contactInfo = document.querySelector('#contactInfo').value;
      const amountDue = document.querySelector('#amountDue').value;
      const salesAgentName = document.querySelector('#salesAgentName').value;
      const dueDate = document.querySelector('#dueDate').value;
      const cropName = document.querySelector('select[name="cropName"]').value;
      const type = document.querySelector('select[name="Type"]').value;
      const tonnage = document.querySelector('input[name="tonnage"]').value;
      const dispatchDate = document.querySelector('input[name="date"]').value;
  
      // Regular expression for valid phone numbers (10 digits)
      const phonePattern = /^[0-9]{10}$/;
      // Regular expression for valid NIN (assuming NIN has specific format, customize if needed)
      const ninPattern = /^[A-Za-z0-9]{8,}$/;
      // Regular expression for valid names (at least 2 characters)
      const namePattern = /^[a-zA-Z]{2,}$/;
  
      let isValid = true;
      let errorMessage = '';
  
      // Validation checks
  
      // Buyer's name should not be empty and must have at least 2 characters
      if (!namePattern.test(buyersName)) {
        errorMessage += 'Please enter a valid buyer\'s name (at least 2 characters).\n';
        isValid = false;
      }
  
      // National Identification Number (NIN) should match format (8 alphanumeric characters)
      if (!ninPattern.test(niN)) {
        errorMessage += 'Please enter a valid National Identification Number (at least 8 characters).\n';
        isValid = false;
      }
  
      // Location should not be empty and must have at least 2 characters
      if (location === '' || location.length < 2) {
        errorMessage += 'Please enter a valid location (at least 2 characters).\n';
        isValid = false;
      }
  
      // Contact info should be a valid phone number (10 digits)
      if (!phonePattern.test(contactInfo)) {
        errorMessage += 'Please enter a valid contact number (10 digits).\n';
        isValid = false;
      }
  
      // Amount due should be numeric and not empty, at least 5 digits
      if (amountDue === '' || isNaN(amountDue) || amountDue.length < 5) {
        errorMessage += 'Please enter a valid amount due (at least 5 digits).\n';
        isValid = false;
      }
  
      // Sales agent's name should not be empty and must have at least 2 characters
      if (!namePattern.test(salesAgentName)) {
        errorMessage += 'Please enter a valid sales agent\'s name (at least 2 characters).\n';
        isValid = false;
      }
  
      // Due date should not be empty
      if (dueDate === '') {
        errorMessage += 'Please select a valid due date.\n';
        isValid = false;
      }
  
      // Crop name should not be empty
      if (cropName === '') {
        errorMessage += 'Please select a valid product.\n';
        isValid = false;
      }
  
      // Type should not be empty
      if (type === '') {
        errorMessage += 'Please select a valid type.\n';
        isValid = false;
      }
  
      // Tonnage should be numeric and at least 3 digits
      if (tonnage === '' || isNaN(tonnage) || tonnage.length < 3) {
        errorMessage += 'Please enter a valid tonnage (at least 3 digits).\n';
        isValid = false;
      }
  
      // Dispatch date should not be empty
      if (dispatchDate === '') {
        errorMessage += 'Please select a valid date of dispatch.\n';
        isValid = false;
      }
  
      // If any validation fails, prevent form submission
      if (!isValid) {
        alert(errorMessage);
        event.preventDefault();
      }
    });
  });
  