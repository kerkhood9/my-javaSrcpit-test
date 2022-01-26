const form = document.getElementById('signup');
const name = form.elements['name'];
const email = form.elements['email'];

// getting the element's value
let fullName = name.value;
let emailAddress = email.value;

form.elements[1]; // by index
form.elements['email']; //  by name
form.elements['email']; // by id

function displayTable() {
  const table = document.getElementById("tableData");
  table.innerHTML = "";

  form.addEventListener('submit', (event) => {
    // stop form submission
    event.preventDefault();
});

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

}// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#signup");

const EMAIL_REQUIRED = "Please enter your name";
const PASSWORD_REQUIRED = "Please enter your email";
const SUBMIT_INVALID = "Please enter a correct submit";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let emailValid = hasValue(form.elements["email"], EMAIL_REQUIRED);
	let passwordValid = validateEmail(form.elements["password"], password_REQUIRED, password_INVALID);
	// if valid, submit the form.
	if (emailValid && passwordValid) {
		alert("Demo only. No form was posted.");
	}
});

<li><a href="./index.html"></a></li>

