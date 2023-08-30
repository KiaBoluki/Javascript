

const containerEl = document.getElementById('container'); 

function showTime(){
const date = new Date(); 
    containerEl.innerText = 
    `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`; 
}


setInterval(showTime, 1000)
setInterval(changeBackgroundColor, 1000)

function changeBackgroundColor(){
    const red = parseInt ( Math.random() * 255 )
    const green = parseInt ( Math.random() * 255 )
    const blue = parseInt ( Math.random() * 255 )
    const newColor = `rgb(${red}, ${green}, ${blue})`; 

    document.body.style.backgroundColor = newColor; 

}