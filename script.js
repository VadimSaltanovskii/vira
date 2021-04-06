let button = document.getElementById('start')
let popup = document.getElementById('popup')
let body = document.getElementsByClassName('page')
button.addEventListener('click', () => {
    popup.style.display = 'block'
    popup.innerHTML = `${new Date()}`
})