const titleEl = document.getElementById('title')
const sizeEl = document.getElementById('size')
const colorEl = document.getElementById('color')
const priceEl = document.getElementById('price')
const btnAddEl = document.getElementById('btn-add-to-cart')
const cartEl = document.querySelector('#cart ul')

const products = []; 

btnAddEl.addEventListener('click', addToCard)

function addToCard(){
    const newProduct = []; 
    const titleValue = titleEl.value; 
    const sizeValue = sizeEl.value; 
    const colorValue = colorEl.value; 
    const priceValue = priceEl.value; 

    newProduct.push(titleValue, sizeValue, colorValue, priceValue)
    products.push(newProduct)
    cartEl.innerHTML = ""; 
    for (let index = 0; index < products.length; index++) {
        const element = products[index];
        cartEl.innerHTML += `<li>
            <h3>${element[0]}</h3>
            <h3>${element[1]}</h3>
            <h3>${element[2]}</h3>
            <h3>${element[3]}</h3>
        </li>`
        
    }
    console.log(newProduct)
}