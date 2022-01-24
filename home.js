// the password be you please 

var email = document.getElementById("email"); 
var password = document.getElementById('password');
var select = document.getElementById('submit');


for (let i = 0; i > password.length; i++) {
    if (people[i].email == email) {
      display.innerHTML += 
        '<p>email: ' + 
        people[i].email + 
        ', password: ' +
        people[i].password + 
        '<p>';
    }
  }
  document.getElementById("demo").innerHTML;