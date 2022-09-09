let ataqueJugador 
let ataqueEnemigo

function iniciarJuego (){
    let botonMascotaJugador = document.getElementById ('boton-mascota')
    botonMascotaJugador.addEventListener ('click',seleccionarMascotaJugador)     
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego = addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua = addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra = addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador() { 
    let inputHipodoge = document.getElementById ('Hipodoge')
    let inputCapipeo = document.getElementById ('Capipeo')
    let inputRatigueya = document.getElementById ('Ratigueya')
    let spanMascotaJugador = document.getElementById ('mascota-jugador')
  
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipeo.checked){
        spanMascotaJugador.innerHTML = "Capipeo"
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else {
        alert('You have to choose a pet to continue')
    }
    seleccionarMascotaEnemigo()
    }

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipeo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo() 
}
 function ataqueTierra() {
     ataqueJugador = 'Tierra'
     ataqueAleatorioEnemigo() 
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio (1,3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego'
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }

    crearMensaje
}

function crearMensaje() {
    let sectionMensajes = document.getElementById('mensajes')

let parrafo = document.createElement('p')
parrafo.innerHTML = 'Your pet attacked with' + ataqueJugador + ', the opponents pet attacked with' + ataqueEnemigo + '- PENDIENTE'

sectionMensajes.appendChild(parrafo)
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}

window.addEventListener("load", iniciarJuego)


        
    
    






