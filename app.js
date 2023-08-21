const containerEl = document.getElementById('container')
const countEl = document.getElementById('count')
const btnRefresh = document.getElementById('btnRefresh')

const randomNumber = parseInt( Math.random() * 500 )
countEl.innerHTML = randomNumber;

btnRefresh.addEventListener('click', () => {
    generateSquares()
})


function createRandomColor(){
        // define 3 random numbers
        let red = Math.random() * 255 ;
        let green = Math.random() * 255 ; 
        let blue = Math.random() * 255 ;
    
        // convert to integer 
        red = parseInt(red); 
        green = parseInt(green)
        blue = parseInt(blue)
    
        const bgColor = `rgb( ${red}, ${green}, ${blue} )`;
        return bgColor; 
}

function createCircles (){
    containerEl.innerHTML = ""; 

    for ( let x = 1 ; x < randomNumber ; x ++ ){
        // create a dom object 
        const box = document.createElement('div')
        box.style.backgroundColor = createRandomColor();
        box.classList.add('colorful-box')
        
        const animationDely = parseInt ( Math.random() * 1000 )
        box.style.animationDelay = `${animationDely}ms`;

    
        // append to document
        containerEl.appendChild(box)
    }
    
}

function generateSquares(){


    let i = 0 ; 

    console.log('loop started')

    while ( i <= 50 )
    {
        console.log(i)
        i = i + 3.25 ; 
    }

    console.log('loop ended.')
}