//  userRole is set to either 'manager' or 'salesagent'
let userRole = ('manager', 'salesagent');   

// Get the dashboard link element
const dashboardLink = document.querySelector('a[href="/dashboard"]');

// Add an event listener to the link
dashboardLink.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior

  // Dynamically change the URL based on the user's role
  let dashboardUrl;
  if (userRole === 'manager') {
    dashboardUrl = '/dashboardm'
  } else if (userRole === 'salesagent') {
    dashboardUrl = '/dashboards'
  }

  // Redirect to the corresponding dashboard
  window.location.href = dashboardUrl;
});

const backButton = document.getElementById('back-button');

backButton.addEventListener('click', () => {
  window.history.back();
});