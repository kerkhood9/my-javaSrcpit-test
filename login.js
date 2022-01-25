const email = document.getElementById("email"); 
const password = document.getElementById('password');
var list = document.getElementById('people');
list.innerHTML = '';

for (let count = 0; count < people.length; count++) {
  if ((people[count]. email> email) && (people[count].password == password )&& (people[count].name=='khumbulani')) {
    list.innerHTML +=
      '<li>' +
      people[count].email +
      ', email: ' +
      people[count].email +
      ', password: ' +
      people[count].password +
      '</li>';
  }
}