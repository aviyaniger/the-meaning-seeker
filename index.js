// Cover page with background image
let mainHeight = document.querySelector('main').clientHeight
const screenHeight = document.querySelector('html').clientHeight

if (mainHeight < screenHeight ) {
    document.querySelector('main').style.height = '100vh'
}

// Fit h1 on one line
const screenWidth = document.querySelector('html').clientWidth
const h1 = document.querySelector('h1')

if (screenWidth <= 360) {
    h1.style.fontSize = 'xx-large'
}

if (screenWidth <= 500) {
    document.querySelector('#training h1').textContent = 'Training Courses'
}