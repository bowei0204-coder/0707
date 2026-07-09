// document.querySelector('#abc')

const block1 = document.querySelector('.circle')
// console.log(block1)

const block2 = document.querySelector('.cross')

block1.addEventListener('click',() => {
    block1.classList.toggle('display-none')
})

block2.addEventListener('click',() => {
    block2.classList.toggle('display-none')
})