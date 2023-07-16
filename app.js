const containerEl = document.querySelector('#container')
const btnRedEl = document.querySelector('#btn-red')
const btnGreenEl = document.querySelector('#btn-green')

// Image ELEMENTS 

const img01El = document.querySelector('#img-01')
const img02El = document.querySelector('#img-02')
const img03El = document.querySelector('#img-03')


btnRedEl.addEventListener('click',
 () => containerEl.style.backgroundColor = "red" )
btnRedEl.addEventListener('click',
 () => containerEl.style.width = "8rem" )
btnRedEl.addEventListener('click',
 () => containerEl.style.height = "8rem" )
btnRedEl.addEventListener('click',
 () => containerEl.style.borderRadius = "0" )




 // KIABOLUKI -> UPPERCASE
 // kiaboluki -> lowercase
 // kiaBoluki -> camelCase

 btnGreenEl.addEventListener('click', () => 
    containerEl.style.backgroundColor = "green" // camelCase
 )
 btnGreenEl.addEventListener('click', () => 
    containerEl.style.width = "16rem" // camelCase
 )
 btnGreenEl.addEventListener('click', () => 
    containerEl.style.height = "16rem" // camelCase
 )
 btnGreenEl.addEventListener('click', () => 
    containerEl.style.borderRadius = "50%" // camelCase
 )


 // change images 

 // hide first image
 img01El.addEventListener( 'click' , () => 
    img01El.style.display = 'none'
 )

 // show second image
 img01El.addEventListener( 'click' , () => 
    img02El.style.display = 'block'
 )

 // if user clicked on image 02 
img02El.addEventListener('click', () => 
// hide image #02
    img02El.style.display= "none"

)

img02El.addEventListener('click', () => 
 // show image #03
    img03El.style.display= "block"

)


// if user clicked on image #3 
img03El.addEventListener('click', () => 
// hide image #3 
    img03El.style.display = 'none'
)


img03El.addEventListener('click', () => 
// show image #1
    img01El.style.display = 'block'
)

