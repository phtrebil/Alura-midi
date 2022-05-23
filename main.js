let listaDeSom = document.querySelectorAll('audio')
let listaDeTecla = document.querySelectorAll('.tecla')

for(let i = 0; i < listaDeTecla.length; i++){
    listaDeTecla[i].onclick = function() {
    listaDeSom[i].play()
    }
}
