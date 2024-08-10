document.addEventListener("DOMContentLoaded", () => {
    const userTableBody = document.getElementById("user-table-body");
  
    // Sample data
    const users = [
        { username:  role  },
        { username:  role  },
        { username:  role },
    ];
  
    // Add rows to the table
    users.forEach((user) => {
        const row = document.createElement("tr");
  
        const usernameCell = document.createElement("td");
        usernameCell.textContent = user.username;
        row.appendChild(usernameCell);
  
        const roleCell = document.createElement("td");
        roleCell.textContent = user.role;
        row.appendChild(roleCell);
  
        const actionsCell = document.createElement("td");
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        actionsCell.appendChild(editButton);
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        actionsCell.appendChild(deleteButton);
  
        row.appendChild(actionsCell);
  
        userTableBody.appendChild(row);
    });
  
    // Add event listener for the "Add User" button
    const addUserButton = document.getElementById("add-user-button");
    addUserButton.addEventListener("click", () => {
        // Add user functionality
    });
  });