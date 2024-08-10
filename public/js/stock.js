// stock.js
const stockData = [
    { id: 1, name: "Beans", type: "seed", stock: 10, branch: "Matugga" },
    { id: 2, name: "Grain-maize", type: "grain", stock: 5, branch: "Maganjo" },
    { id: 3, name: "Cow-peas", type: "seed", stock: 2, branch: "Matugga" },
    { id: 4, name: "Gnuts", type: "seed", stock: 15, branch: "Maganjo" },
    { id: 5, name: "Rice", type: "grain", stock: 8, branch: "Matugga" },
    { id: 6, name: "Soy-beans", type: "seed", stock:23, branch: "Maganjo" },
    // ...
  ];
  
  const lowStockThreshold = 5; // tons
  
  const stockTable = document.getElementById("stock-table");
  const stockDataContainer = document.getElementById("stock-data");
  
  stockData.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.type}</td>
      <td>${item.stock} tons</td>
      <td>${item.branch}</td>
    `;
  
    if (item.stock <= lowStockThreshold) {
      row.classList.add("low-stock");
    }
  
    stockDataContainer.appendChild(row);
  });
  
  // add event listener to update stock levels and alert for low stock
  stockTable.addEventListener("DOMSubtreeModified", () => {
    const lowStockRows = stockTable.querySelectorAll("tr.low-stock");
    lowStockRows.forEach((row) => {
      const stockCell = row.cells[2];
      const stockValue = parseInt(stockCell.textContent);
      if (stockValue <= lowStockThreshold) {
        alert(`Low stock alert: ${row.cells[0].textContent} at ${row.cells[3].textContent} branch`);
      }
    });
  });