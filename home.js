const name = document.getElementById("email"); 
const age = parseInt(document.getElementById('age').value) || 0;
var list = document.getElementById('people');
list.innerHTML = '';


let people = [
  { name: 'hardy', age: 10, color: 'blue', hairStyle: 'dread lock' },
  { name: 'vusumuzi', age: 21, color: 'red', hairStyle: 'chiskop' },
  { name: 'wandile', age: 65, color: 'blue', hairStyle: 'chiskop' },
  { name: 'charity', age: 28, color: 'pink', hairStyle: 'afro' },
  { name: 'precious', age: 17, color: 'pink', hairStyle: 'braid' },
  { name: 'andisiwe', age: 90, color: 'green', hairStyle: 'afro' },
  { name: 'mmapaseka', age: 30, color: 'black', hairStyle: 'braid' },
  { name: 'mhlonipheni', age: 20, color: 'yellow', hairStyle: 'afro' },
  { name: 'khumbulani', age: 30, color: 'blue', hairStyle: 'afro' },
  { name: 'sophie', age: 18, color: 'grey', hairStyle: 'braid' },
  { name: 'lucky', age: 32, color: 'grey', hairStyle: 'chiskop' },
  { name: 'sithembiso', age: 32, color: 'blue', hairStyle: 'chiskop' },
  { name: 'happy', age: 18, color: 'white', hairStyle: 'twist' },
  { name: 'selina', age: 26, color: 'green', hairStyle: 'chiskop' },
  { name: 'nkosiphendule', age: 30, color: 'white', hairStyle: 'chiskop' },
  { name: 'thato', age: 30, color: 'green', hairStyle: 'chiskop' },
];

for (let count = 0; count < people.length; count++) {
  if ((people[count]. age > age) && (people[count].age == age )&& (people[count].name=='khumbulani')) {
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

  