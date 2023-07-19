const nomreEl = document.querySelector('#nomre')

const result = document.querySelector('#result')

const btnEl = document.querySelector('#btn')


btnEl.addEventListener('click', () => {
    const grade = nomreEl.value 
    if ( grade > 15 ){
        result.innerHTML = "GREATE !!! YOU PASSED ."
    }

    if ( grade < 15 ){
        result.innerHTML = "NOT BAD "
    }

    if ( grade < 10 ){
        result.innerHTML = "YOU REFUSED . IDIOT "
    }
})


const btnChangeModeEl = document.querySelector("#change"); 


btnChangeModeEl.addEventListener( 'click' , () => {
    
    if ( btnChangeModeEl.innerHTML == "Dark Mode"){
        btnChangeModeEl.innerHTML = "Light Mode"

        document.body.classList.add('dark')
    }else {
        btnChangeModeEl.innerHTML = "Dark Mode"
        document.body.classList.remove('dark')

    }

})

