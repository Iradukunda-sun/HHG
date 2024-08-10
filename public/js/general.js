// reports.js
const reportForm = document.getElementById('reports-form');
const reportType = document.getElementById('report-type');
const startDate = document.getElementById('start-date');
const endDate = document.getElementById('end-date');
const generateReport = document.getElementById('generate-report');
const reportOutput = document.getElementById('report-output');

generateReport.addEventListener('click', async (e) => {
  e.preventDefault();
  const reportTypeValue = reportType.value;
  const startDateValue = startDate.value;
  const endDateValue = endDate.value;

  // Generate report data
  const reportData = await generateReportData(reportTypeValue, startDateValue, endDateValue);

  // Render report output
  const reportHtml = renderReportOutput(reportData);
  reportOutput.innerHTML = reportHtml;
});

async function generateReportData(reportType, startDate, endDate) {
  // Simulate report data generation
  const reportData = {
    sales: [
      { date: '2022-01-01', amount: 100 },
      { date: '2022-01-02', amount: 200 },
      { date: '2022-01-03', amount: 300 },
    ],
    stock: [
      { date: '2022-01-01', quantity: 10 },
      { date: '2022-01-02', quantity: 20 },
      { date: '2022-01-03', quantity: 30 },
    ],
    procurement: [
      { date: '2022-01-01', amount: 1000 },
      { date: '2022-01-02', amount: 2000 },
      { date: '2022-01-03', amount: 3000 },
    ],
    creditSales: [
      { date: '2022-01-01', amount: 500 },
      { date: '2022-01-02', amount: 1000 },
      { date: '2022-01-03', amount: 1500 },
    ],
  };

  return reportData[reportType];
}

// function renderReportOutput(reportData) {
//   const reportHtml = `
//     <h2>Report Output</h2>
//     <table>
//       <thead>
//         <tr>
          
//report screen javascript

// dashboard.js
//const logoutButton

//user management screen javascript
let users = [
  { id: 1, username: 'johnDoe', role: 'Admin' },
  { id: 2, username: 'janeDoe', role: 'User' },
  // Add more users as needed
];

// Function to display users
function displayUsers() {
  let tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';
  users.forEach(user => {
      let row = document.createElement('tr');
      row.innerHTML = `
          <td>${user.username}</td>
          <td>${user.role}</td>
          <td>
              <button class="btn btn-sm btn-primary" onclick="editUser(${user.id})">Edit</button>
              <button class="btn btn-sm btn-danger" onclick="deleteUser(${user.id})">Delete</button>
          </td>
      `;
      tableBody.appendChild(row);
  });
}

// Function to show add user modal
function showAddUserModal() {
  document.getElementById('userForm').reset();
  document.getElementById('userId').value = '';
  $('#userModal').modal('show');
}

// Function to edit user
function editUser(id) {
  let user = users.find(u => u.id === id);}
  if (user) {
      document.getElementById('username').value = user.username;
      document.getElementById('role').value}