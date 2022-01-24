var Email = document.getElementById("name").value; 
var password = document.getElementById('people');
var color = document.getElementById('color');


for (let i = 0; i < people.length; i++) {
    if (people[i].name == name) {
      display.innerHTML += 
        '<p>email: ' + 
        people[i].Email + 
        ', password: ' +
        people[i].password + 
        '<p>';
    }
  }