var form = document.querySelector('form');

var descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.name = 'description';
descriptionInput.placeholder = 'Enter fruit description...';

form.insertBefore(descriptionInput, form.lastElementChild);

var form = document.querySelector('form');
var fruitsList = document.querySelector('.fruits');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  var fruitName = document.getElementById('fruit-to-add').value;
  var fruitDescription = document.querySelector('input[name="description"]').value;

  var newFruit = document.createElement('li');
  newFruit.className = 'fruit';

  var descriptionPara = document.createElement('p');
  descriptionPara.innerHTML = `<em>${fruitDescription}</em>`;

  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = 'x';

  newFruit.appendChild(document.createTextNode(fruitName + ' '));
  newFruit.appendChild(descriptionPara);
  newFruit.appendChild(deleteBtn);

  fruitsList.appendChild(newFruit);

  document.getElementById('fruit-to-add').value = '';
  document.querySelector('input[name="description"]').value = '';
});
