const sectionSeleccionarAtaque = document.getElementById('choose-attack')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById ('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('choose-pet')
const inputHipodoge = document.getElementById('Hipodoge')
const inputCapipeo = document.getElementById('Capipeo')
const inputRatigueya = document.getElementById('Ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataque-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataque-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let mokepones = []
let ataqueJugador 
let ataqueEnemigo
let opcionDeMokepones

let vidasJugador = 3
let vidasEnemigo = 3

class mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida 
        this.ataques = []
    }
}

let hipodoge = new mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)

let capipeo = new mokepon('Capipeo', './assets/mokepons_mokepon_capipepo_attack.png', 5)

let ratigueya = new mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push(
    {nombre: 'water', id: 'boton-agua'},
    {nombre: 'water', id: 'boton-agua'},
    {nombre: 'water', id: 'boton-agua'},
    {nombre: 'fire', id: 'boton-fuego'},
    {nombre: 'earth', id: 'boton-tierra'},
)

capipeo.ataques.push(
    {nombre: 'earth', id: 'boton-tierra'},
    {nombre: 'earth', id: 'boton-tierra'},
    {nombre: 'earth', id: 'boton-tierra'},
    {nombre: 'fire', id: 'boton-fuego'},
    {nombre: 'water', id: 'boton-agua'},
)

ratigueya.ataques.push(
    {nombre: 'fire', id: 'boton-fuego'},
    {nombre: 'fire', id: 'boton-fuego'},
    {nombre: 'fire', id: 'boton-fuego'},
    {nombre: 'earth', id: 'boton-tierra'},
    {nombre: 'water', id: 'boton-agua'},
)

mokepones.push(hipodoge,capipeo,ratigueya)

function iniciarJuego() {    
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type = "radio" name = "mascota" id = ${mokepon.nombre}/>
        <label class = "tarjeta-de-mokepon" for = ${mokepon.nombre}> 
            <p> ${mokepon.nombre} </p>
            <img src = ${mokepon.foto}  alt = ${mokepon.nombre}>  
        </label>       
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones
    })
   
    botonMascotaJugador.addEventListener ('click', seleccionarMascotaJugador)     
       
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() { 
    
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

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

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = 'fire'
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = 'water'
    } else {
        ataqueEnemigo = 'earth'
    }

    combate()
}

function combate() {
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("Tie")
    }   else if (ataqueJugador == 'fire' && ataqueEnemigo == 'earth') {
        crearMensaje("You win") 
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }   else if (ataqueJugador == 'water' && ataqueEnemigo == 'fire') {
        crearMensaje("You win")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }   else if (ataqueJugador == 'earth' && ataqueEnemigo == 'water') {
        crearMensaje("You win") 
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }   else {
        crearMensaje("You lost")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("YOU WIN")
    } else if (vidasJugador ==0) {
        crearMensajeFinal("YOU LOST")
    } 
} 

function crearMensaje(resultado) {    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal 
    
    botonFuego.disabled = true 
    botonAgua.disabled = true
    botonTierra.disabled = true
    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
     
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}

window.addEventListener('load', iniciarJuego)


        
    
  






