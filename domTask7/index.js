// Write your code below:
const para=document.createElement('p');

const subHeading=document.createElement('h3');

subHeading.textContent ='Buy high quality organic fruits online';
subHeading.style.fontStyle='italic'

const divs=document.getElementsByTagName('div');
const firstDiv=divs[0];
firstDiv.appendChild(subHeading);

const secondDiv = divs[1];

const fruits=document.querySelector('.fruits');

para.id='fruits-total';
para.textContent='Total fruits: 4'

secondDiv.insertBefore(para,fruits);

