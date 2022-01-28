var e = [];
var p = [];


function email() {
	var e = document.getElementById("e").value;
	var p = document.getElementById("p").value;

	if (e == "" || p == "") {
		alert("email or password are incorrect");
	} else {

	}

	if (e == "user@gmail.com" && p == "mypassword") {
		window.location.href = "home.html"

	} else {
		alert("email or password are incorrect");
	}
}