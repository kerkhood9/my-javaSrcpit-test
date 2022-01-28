var person = ['hardy, 35', 'khumbulani,30', 'william,21', 'Mmapaseka,28', 'happy,29', 'sithembiso,32', 'kagisho,26', 'mdud,31', 'precious,32', 'selina,26', 'nkosi,21', 'andiwe,31'];

var display = document.getElementById('display');


for (let i = 0; i < person.length; i++) {
  display.innerHTML += "<li>" + person[i] + "</li>";

}