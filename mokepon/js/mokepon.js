let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego (){
    let sectionSeleccionarAtaque = document.getElementById('choose-attack')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById ('boton-mascota')
    botonMascotaJugador.addEventListener ('click', seleccionarMascotaJugador)     
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById ('boton-reiniciar')
    botonReiniciar.addEventListener ('click', reinciarJuego)

}

function seleccionarMascotaJugador() { 
    let sectionSeleccionarMascota = document.getElementById('choose-pet')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('choose-attack')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputHipodoge = document.getElementById ('Hipodoge')
    let inputCapipeo = document.getElementById ('Capipeo')
    let inputRatigueya = document.getElementById ('Ratigueya')
    let spanMascotaJugador = document.getElementById ('mascota-jugador')
  
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipeo.checked) {
        spanMascotaJugador.innerHTML = 'Capipeo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
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
    ataqueJugador = 'fire'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'water'
    ataqueAleatorioEnemigo() 
}
 function ataqueTierra() {
     ataqueJugador = 'earth'
     ataqueAleatorioEnemigo() 
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio (1,3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = 'fire'
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = 'water'
    } else {
        ataqueEnemigo = 'earth'
    }

    combate()
}

function combate (){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje ("Tie")
    }   else if (ataqueJugador == 'fire' && ataqueEnemigo == 'earth'){
        crearMensaje ("You win") 
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }   else if (ataqueJugador == 'water' && ataqueEnemigo == 'fire'){
        crearMensaje ("You win")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }   else if (ataqueJugador == 'earth' && ataqueEnemigo == 'water'){
        crearMensaje ("You win") 
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }   else {
        crearMensaje ("You lost")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()

}

function revisarVidas () {
    if (vidasEnemigo == 0) {
        crearMensajeFinal ("YOU WIN :)")
    } else if (vidasJugador ==0) {
        crearMensajeFinal ("YOU LOST :(")
    } 

} 

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let nuevoAtaqueDelJugador = document.getElementById('ataques-del-jugador')
    let nuevoAtaquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let notificacion = document.createElement('p')
    let ataquesDelEnemigo = document.createElement('p')
    let ataquesDelJugador = document.createElement('p')

    notificacion.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataquelJugador
    nuevoAtaquesDelEnemigo.innerHTML = ataqueEnemigo

    sectionMensajes.appendChild(notificacion)
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaquesDelEnemigo)

}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal 

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reinciarJuego() {
    location.reload()
     
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}

window.addEventListener('load', iniciarJuego)


        
    
    






