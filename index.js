var left = document.getElementById('left')
var bruna = document.getElementById('bruna')
var leonardo = document.getElementById('leonardo')
var samantha = document.getElementById('samantha')
var right = document.getElementById('right')

function slideLeft() {
    bruna.style = 'display: none'
    samantha.style = 'display: flex'
}

function slideRight() {
    samantha.style = 'display: none'
    bruna.style = 'display: flex'
}
