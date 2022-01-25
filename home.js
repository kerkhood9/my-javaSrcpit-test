const name = document.getElementById("name"); 
const age = parseInt(document.getElementById('age').value) || 0;
var list = document.getElementById('people');
list.innerHTML = '';


let people = [
  { name: 'hardy', age: 10, },
  { name: 'vusumuzi', age: 21, },
  { name: 'wandile', age: 65,},
  { name: 'charity', age: 28,  },
  { name: 'precious', age: 17,  },
  { name: 'andisiwe', age: 90,  },
  { name: 'mmapaseka', age: 30,  },
  { name: 'mhlonipheni', age: 20, },
  { name: 'khumbulani', age: 30,  },
  { name: 'sophie', age: 18,  },
  { name: 'lucky', age: 32, },
  { name: 'sithembiso', age: 32, },
  { name: 'happy', age: 18,  },
  { name: 'selina', age: 26, },
  { name: 'nkosiphendule', age: 30,  },
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

  