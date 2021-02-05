const but = document.getElementById('bb');

//getElementByClassName will not work bcz it return array like object you need to tweak some you code a little ,use for loop 
//https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class

const mt = document.getElementById('form');
const label = document.querySelector('#form');
const cancel = document.querySelector('#cancel');
const backdrop = document.querySelector('#backdrop');
const para = document.querySelector('#para-g');
const add = document.querySelector('#add');
const lise = document.querySelector('#list');
const movie = document.querySelector('#MovieName');
const inpu = document.querySelectorAll('input');
const mov = document.querySelector('#mov');
const photo = document.querySelector('#photo');
const ratin = document.querySelector('#ratin');
const ima = document.querySelector('#love')
const clone = document.querySelector("#clone")
const fun = document.querySelector('#stt')
//https://source.unsplash.com/random


let arr = [] 

const tes = function () {
  clone.innerHTML = clone.innerHTML + "<div></div>";
  label.style.display = 'block'; 
  backdrop.style.display = 'block';
}

const backdp = () => {
  backdrop.style.display = 'none';
  label.style.display = 'none';
}
const faker = () => {
  clone.innerHTML = clone.innerHTML + '<div></div>'
}

const lst = () => {
  
  mov.innerHTML = inpu[0].value;
  //photo.innerHTML = inpu[1].value;
  // ima.style.display = 'block';
  ima.src = inpu[1].value;
  
  if (inpu[2].value > 5 || inpu[2].value < 1) {
    alert('invalid rating ')
  } else {
    ratin.innerHTML =  inpu[2].value;
  }
  
  
  
  clone.lastElementChild.innerHTML = lise.innerHTML;
  // arr.push(mov,inpu[1].value,inpu[2].value)
  // lise.innerHTML = arr;
  // lise.innerHTML = lise.innerHTML + inpu[1].value;
  // lise.innerHTML = lise.innerHTML + inpu[2].value;
  
}



but.addEventListener('click', tes);
cancel.addEventListener('click', () => {
  label.style.display = 'none'
  backdrop.style.display = 'none';
});
backdrop.addEventListener('click', backdp);
add.addEventListener('click', lst);


// there are two ways  to use input value to javaScript -----------
// 1.select using .querySelcetorAll('input') 
// 2. then use constant name like blabla[0].value
// or or or or or or or or or or or or or
// 3.select using direct id property 
// 4. then use bla.vlaue
