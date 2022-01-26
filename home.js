const name = document.getElementById("name"); 
const age = parseInt(document.getElementById('age').value) || 0;
var list = document.getElementById('people');
list.innerHTML = '';


let names = ['hardy','khumbulani','william','Mmapaseka','happy','sithembiso','kagisho','mdud','precious','selina','nkosi','andiwe'];

let display = document.getElementById("display");

for (let i = 0; i < names.length; i++) {
  display.innerHTML += "<hr>" + names[i] + "</hr>" 

  }

for (let count = 0; count < people.length; count++) {
  if ((people[count]. name > name ) && (people[count].age == age )&& (people[count].name=='khumbulani')) {
    list.innerHTML +=
      '<li>' +
      people[count].name +
      ', name: ' +
      people[count].age +
      ', age: ' +
      people[count].age +
      '</li>';
  }
}
<li><a href="./home.html"></a></li>
  