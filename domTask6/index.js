const mainHeading =document.querySelector('#main-heading');
mainHeading.style.textAlign='right';

const fruits=document.querySelector('.fruits');
fruits.style.Color='red';
fruits.style.backgroundColor='rgb(128 128 128)';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.borderRadius='5px';
fruits.style.listStyleType='none';

const basketHeading=document.getElementById('basket-heading');
basketHeading.style.color='brown';

const fruitItems=document.querySelectorAll('.fruit');
for(let i=0; i<fruitItems.length; i++){
    fruitItems[i].style.backgroundColor='white';
    fruitItems[i].style.padding='10px';
    fruitItems[i].style.margin='10px';
    fruitItems[i].style.borderRadius='5px';
}

    const EvenFruitItems=document.querySelectorAll('.fruit:nth-Child(even)');
    for(let i=0; i<EvenFruitItems.length; i++){
        EvenFruitItems[i].style.backgroundColor='brown';
      
    }
const EvenFruitItem=document.querySelectorAll('.fruit:nth-Child(even)');
    for(let i=0; i<EvenFruitItem.length; i++){
        EvenFruitItem[i].style.Color='white';
      
    }










// Write answer to the questions asked below: