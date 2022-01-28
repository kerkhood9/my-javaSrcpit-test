const names = ['hardy','khumbulani','william','Mmapaseka','happy','sithembiso','kagisho','mdud','precious','selina','nkosi','andiwe'];
const age = ['55','30','21','32','22','32','23','29','32','26','28','31'];
var list = document.getElementById('people');
list.innerHTML = '';


let names = ['hardy','khumbulani','william','Mmapaseka','happy','sithembiso','kagisho','mdud','precious','selina','nkosi','andiwe'];

let display = document.getElementById("display");
const names = form.elements['name'];
const age = form.elements['age'];

// getting the element's value
let fullName = name.value;
let yearlAge = age.value;

form.elements[1]; // by index
form.elements['name']; //  by name
form.elements['age']; // by age

for (let i = 0; i < names.length; i++) {
  display.innerHTML += "<hr>" + names[i] + "</hr>" 

  }
  alert(message);

  var checkAge = (e) => {
    if(document.querySelector('#age').value < 18){
    
        // Preventing the submit of the form
        e.preventDefault();
        
        // Displaying the modal window
        alert("You have to be older 18!");
    }
};

// Listening to the click event on the button
document.querySelector('button').addEventListener('click', checkAge);


for (let count = 0; count < people.length; count++) {
  if ((people[count]. names > names ) && (people[count].age == age ) && (people[count].names=='khumbulani')) {
    list.innerHTML +=
      '<li>' +
      people[count].names +
      ', name: ' +
      people[count].age +
      ', age: ' +
      people[count].age +
      '</li>';
  }
}
<li><a href="./home.html"></a></li>
  