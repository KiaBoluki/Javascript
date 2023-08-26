const gameEl = document.getElementById('game');
const fighterEl = document.getElementById('fighter')

window.addEventListener('keydown', goLeft);
const speed = 15;
let leftOffset = 0;


function goLeft(event) {

    // مقدار فاصله سمت چپ المان از بادی رو نشون میده
    let fighterElementLeft = parseInt(fighterEl.getBoundingClientRect().left);
    let gameElementLeft = parseInt(gameEl.getBoundingClientRect().left);
    // مقدار فاصله سمت راست المان از بادی رو نشون میده
    let fighterElementRight = parseInt(fighterEl.getBoundingClientRect().right);
    let gameElementRight = parseInt(gameEl.getBoundingClientRect().right);

    switch (event.key) {
        case 'ArrowLeft':
            if ( fighterElementLeft > gameElementLeft + speed )
            {
                leftOffset -= speed;
            }
            else{
                fighterEl.style.left = 0 ;
            }
            break;
        case 'ArrowRight':  // 680 - 15 = 665 
            if ( fighterElementRight < gameElementRight )
            {
                leftOffset += speed;
            }
            else{
                fighterEl.style.transform = `${gameElementRight}px` ;
            }
            break;

        case 'ArrowDown': 
            const bulletEl = document.createElement( 'div' )
            bulletEl.classList.add('bullet');
            fighterEl.appendChild(bulletEl); 

        default:
            console.log(event.key)

    }
    console.log('fighter left: ' ,fighterElementLeft, 'game left:' , gameElementLeft );
    console.log('fighter right: ' ,fighterElementRight, 'game right:' , gameElementRight );
    fighterEl.style.left = `${leftOffset}px`;
}


const imageContainerEl = document.getElementById('image-container');
const countEl = document.getElementById('count');

countEl.addEventListener( 'change' , (event)=>generateImage(event))


function generateImage(event ){

    const count = event.target.value; 
    if ( count > 10 )
    {
        count = 10 ; 
    }
    if ( count < 1 ){
        count = 1;
    }

    imageContainerEl.innerHTML = ""; 

    for (let index = 1; index <= count; index++) {
        // const width = parseInt( Math.random() * 4 ) * 100 + 100  ; 
        // const height = parseInt( Math.random() * 4 ) * 100 + 100  ; 

        const width = 100; const height = 100 ; 
        console.log(width);
        const newImageEl = document.createElement('img');
        newImageEl.src = `https://picsum.photos/seed/${index}/${width}/${height}`;
        newImageEl.loading = 'eager';
        imageContainerEl.appendChild(newImageEl);
    }
}

