const button = document.querySelector('button')
const body = document.querySelector('body')
const color = ['red','pink','yellow','blue','grey','purple','green']

body.style.backgroundColor = 'violet'

button.addEventListener('click',changeColor)
function changeColor(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}