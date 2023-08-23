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