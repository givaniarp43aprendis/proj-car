

let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = document.querySelectorAll('.list .item')

let indicators = document.querySelector('.indicator')
/*let dots = document.querySelector(' ul li.active')*/ 
let list = document.querySelector('.list')

let dots = document.querySelectorAll('.indicator ul li')
let number = document.querySelector('.numbr')

function updateIndicators() {

    // REMOVE ACTIVE DE TODOS
    dots.forEach((dot) => {
        dot.classList.remove('active')
    })

    // ADICIONA ACTIVE NO DOT ATUAL
    dots[active].classList.add('active')

    // MUDA O NÚMERO
    number.innerHTML = '0' + (active + 1)
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

   updateIndicators()



  
}
prevButton.onclick = () => {
  list.style.setProperty('--calculation',  - 1)  
let itemNovo = document.querySelector('.list .item.active')
 itemNovo.classList.remove('active')
 active = active - 1 < firstPosition ? lastPosition : active - 1
 items[active].classList.add('active')

    updateIndicators()
   

}

