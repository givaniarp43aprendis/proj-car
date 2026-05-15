

let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = document.querySelectorAll('.list .item')

let indicator = document.querySelector('.indicator')
let dots =document.querySelectorAll('ul li.active')
let list = document.querySelector('.list') 


function updateUI() {
    // 1. Atualiza o número
    numberDisplay.innerText = String(active + 1).padStart(2, '0')

    // 2. Atualiza as bolinhas (dots)
    let dotOld = document.querySelector('.indicator ul li.active')
    if (dotOld) dotOld.classList.remove('active')
    dots[active].classList.add('active')
}




let active = 0
let firstPosition = 0
let lastPosition = items.length - 1



nextButton.onclick = () => {
 
   
let itemOld = document.querySelector('.list .item.active')
    itemOld.classList.remove('active')

list.style.setProperty('--calculation',  1) 
    active= active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')

 

  
}
prevButton.onclick = () => {
  list.style.setProperty('--calculation',  - 1)  
let itemNovo = document.querySelector('.list .item.active')
 itemNovo.classList.remove('active')
 active = active - 1 < firstPosition ? lastPosition : active - 1
 items[active].classList.add('active')

    
   

}

