const email = document.getElementById("email"); 
const password = document.getElementById('password');
var list = document.getElementById('people');
list.innerHTML = '';

// this one get the values
function getInputValues() {
  email = document.getElementById("email").value;
  password = Number(document.getElementById("password").value);
}


function displayTable() {
  const table = document.getElementById("tableData");
  table.innerHTML = "";

  for (let i = 0; i < transactions.length; i++) {
      table.innerHTML +=
          "<tr><td>" +
          transactions[i].type +
          "</td><td>" +
          transactions[i].detail +
          "</td><td>" +
          transactions[i].amount + 
          "</td></tr>";
  }
}


// this one will add email
function addIncome() {
  getInputValues()

  if (email == "" || email == 0) {
      alert("Details and amount are required");
      return false;
  }

  transactions.push({ type: "email", email: email, password: password });
  calcutateAndDisplay();
  displayTable();

}
// this one will add expense
function addExpense() {
  getInputValues()

  if (password == "" || password== 0) {
      alert("Details and amount are required");
      return false;
  }

  transactions.push({ type: "password", password: password, password: password });
  calcutateAndDisplay();
  displayTable();

}

function calcutateAndDisplay() {
  displayemail = document.getElementById("email");
  displaypassword = document.getElementById("password");
  display = document.getElementById("display");

 

  for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].type == "email") {
          emailTotal += transactions[i].email;
      }

      if (transactions[i].type == "password") {
        passwordTotal += transactions[i].password;
      }
  }
}