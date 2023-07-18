const btnDark = document.querySelector("#btn-dark");
const btnYellow = document.querySelector("#btn-yellow");

var modeName = 'Dark'; // متغیر // variable

btnDark.addEventListener('click', () => document.body.classList.toggle('dark'))
btnDark.addEventListener('click', () => modeName = 'Light' )
btnDark.addEventListener('click', () => modeName = 'Dark' )
btnDark.addEventListener('click', () => btnDark.innerHTML = modeName + " Mode")


btnDark.innerHTML = modeName + " Mode";

