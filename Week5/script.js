const tables = [
  { tableNumber: 1, capacity: 4, isReserved: false },
  { tableNumber: 2, capacity: 2, isReserved: false },
  { tableNumber: 3, capacity: 6, isReserved: false },
  { tableNumber: 4, capacity: 4, isReserved: false }
];


function reserveTable(tableNumber, callback, timeInMs) {
  const table = tables.find(t => t.tableNumber === tableNumber);

  if (!table) {
      callback(`Error: Table ${tableNumber} does not exist.`);
      return;
  }

  if (table.isReserved) {
      callback(`Error: Table ${tableNumber} is already reserved.`);
      return;
  }


  table.isReserved = true;
  setTimeout(() => {
      callback(`Success: Table ${tableNumber} has been reserved.`);
  }, timeInMs);
}


  document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const messageDiv = document.createElement("div");
  form.appendChild(messageDiv);

  form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const tableNumber = parseInt(document.getElementById("table-number").value);

      if (!name || isNaN(tableNumber)) {
          messageDiv.textContent = "Please enter your name and select a valid table number.";
          messageDiv.style.color = "red";
          return;
      }

      reserveTable(tableNumber, (message) => {
          messageDiv.textContent = message;
          messageDiv.style.color = message.startsWith("Success") ? "green" : "red";
      }, 2000);
  });
});
