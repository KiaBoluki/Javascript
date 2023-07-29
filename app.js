
const btnIncrement = document.getElementById('btnIncrement');
const btnIncrement5 = document.getElementById('btnIncrement5');
const btnIncrementTimes5 = document.getElementById('btnIncrementTimes5');
const btnExponential = document.getElementById('btnExponential');


const btnDecrement = document.getElementById('btnDecrement');
const btnDecrement5 = document.getElementById('btnDecrement5');
const btnDecrementDivide5 = document.getElementById('btnDecrementDivide5');

const resultEl = document.getElementById('result'); 


var number = 1 ; 

resultEl.innerHTML = number; 

btnIncrement.addEventListener('click' , () => {
  number ++; 
  resultEl.innerHTML = number; 
})

btnDecrement.addEventListener('click', ()=>{
  number --;
  resultEl.innerHTML = number; 
})
btnIncrement5.addEventListener('click' , () => {
  number = number + 5; 
  resultEl.innerHTML = number; 
})

btnDecrement5.addEventListener('click', ()=>{
  number = number - 5; 
  resultEl.innerHTML = number; 
})

btnIncrementTimes5.addEventListener('click', ()=>{
  number = number * 5 ; 
  resultEl.innerHTML = number; 
})


btnDecrementDivide5.addEventListener('click' , () => {
  number = number / 5 ; 
  resultEl.innerHTML = number; 
})

btnExponential.addEventListener( 'click' , () => {
  number = number ** 3; 
  resultEl.innerHTML = number; 
})