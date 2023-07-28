// const x = 85 ;
// const y = '85';

// if ( x != y ){ // true
//     console.log('do addad barabar hastand')
// }
// else {
//     console.log ( 'do addad na mosavi hastand');
// }

const jMardEl = document.querySelector("#jensiat-mard");
const jZanEl = document.querySelector("#jensiat-zan");

const ageEl = document.querySelector("#age");

const btnSubmitEl = document.querySelector("#btnSubmit");

const resultEl = document.querySelector("#result");

const payanEl = document.querySelector('#payane-khedmat'); 
const moafEl = document.querySelector('#moafiat');

btnSubmitEl.addEventListener("click", () => {

  if (jMardEl.checked && ageEl.value > 18) {
    
    if ( payanEl.checked || moafEl.checked ){
        console.log('shoma mojaz hastid')
    }
    else {
        console.log('motasefane shoma nemitavanid edame bedahid. ')
    }

  }
  else {
    console.log('shoma niazi be taeede payane khedmat nadarid.')
  }
});
