const form=document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function(event){
  event.preventDefault();
  const fruitToAdd = document.getElementById('fruit-to-add');
  const newLi = document.createElement('li');
  const newLiText = document.createTextNode(fruitToAdd.value);

  newLi.appendChild(newLiText);
  newLi.className = 'fruit' ;

  const deleteBtn =document.createElement('button');
  const editBtn =document.createElement('button');

  const deleteBtnText = document.createTextNode('x');
  const editBtnText = document.createTextNode('edit');


  deleteBtn.appendChild(deleteBtnText);
  deleteBtn.className = 'delete-btn';
  editBtn.appendChild(editBtnText);
  editBtn.className = 'edit-btn';

  newLi.appendChild(deleteBtn);
  newLi.appendChild(editBtn);

  fruits.appendChild(newLi);
})

fruits.addEventListener('click',function(event){
  if(event.target.classList.contains('delete-btn')){
    const fruitToDelete=event.target.parentElement;
    fruits.removeChild(fruitToDelete);

  }
})

