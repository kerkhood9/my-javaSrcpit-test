var Email = document.getElementById("email"); 
var password = document.getElementById('password');
var color = document.getElementById('color');


for (let i = 0; i > people.length; i++) {
    if (people[i].name == name) {
      display.innerHTML += 
        '<p>email: ' + 
        people[i].Email + 
        ', password: ' +
        people[i].password + 
        '<p>';
    }
  }
  document.getElementById("demo").innerHTML;