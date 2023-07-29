
const yearEl = document.getElementById('year');
const btnSubmitEl = document.getElementById('btnSubmit');
const resultEl = document.getElementById('result'); 

btnSubmitEl.addEventListener('click', () => {
  const yearNumber = yearEl.value; 

  if ( yearNumber < 1000 || yearNumber > 3000 ){
    resultEl.innerHTML = 'Adade vared shode bayad beyn e 1000-3000 bashad.'
  }

  else{

    const dividedByFour = yearNumber % 4 ; 
    const dividedByHundred = yearNumber % 100 ;

    if ( dividedByFour == 0 && dividedByHundred != 0 ){
      resultEl.innerHTML = "Sal e morede nazar kabise ast.";
      resultEl.style.backgroundColor = "#a9ff81" ;
      resultEl.style.border = "1px solid #226602" ;
      resultEl.style.color = "#226602" ;
      resultEl.style.padding = "1rem 2rem" ;

    }
    else{
      resultEl.innerHTML = "Sal e morede nazar kabise NIST.";
      resultEl.style.backgroundColor = "#ff9595" ;
      resultEl.style.border = "1px solid #5a0000" ;
      resultEl.style.color = "#5a0000" ;
      resultEl.style.padding = "1rem 2rem" ;
    }

  }
})