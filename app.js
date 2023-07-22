const nomreEl = document.querySelector('#nomre')

const result = document.querySelector('#result')

const btnEl = document.querySelector('#btn')


btnEl.addEventListener('click', () => {
    const grade = nomreEl.value 

    if ( grade > 20 )
    {

        result.innerHTML = "The Number you entered is not valid."

    }
    
    else if( grade > 15 ){
        result.innerHTML = "Greate You are a genius!"
    }

    else if ( grade > 10 ){
        result.innerHTML = "Hey Not bad !"
    }

    else if ( grade < 0 ) {

        result.innerHTML = "The Number you entered is not valid."

    }

    else {
        result.innerHTML = "You couldn't pass the test. I am so sorry. you should go to the hell."
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

