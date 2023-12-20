const fruit = document.getElementsByClassName('fruit');
console.log(fruit[2]);
fruit[2].style.backgroundColor='yellow';
for(let i=0; i<fruit.length; i++){
  fruit[i].style.fontWeight='bold';
}