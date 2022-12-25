const sectionSeleccionarAtaque = document.getElementById('choose-attack')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById ('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('choose-pet')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataque-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataque-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones = []
let ataqueJugador  = [] 
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge 
let inputCapipeo 
let inputRatigueya 
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo 
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
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
    {nombre: 'water', id: 'boton-agua'},
    {nombre: 'fire', id: 'boton-fuego'},
)

ratigueya.ataques.push(
    {nombre: 'fire', id: 'boton-fuego'},
    {nombre: 'fire', id: 'boton-fuego'},
    {nombre: 'fire', id: 'boton-fuego'},
    {nombre: 'water', id: 'boton-agua'},
    {nombre: 'earth', id: 'boton-tierra'},
)

mokepones.push(hipodoge,capipeo,ratigueya)

function iniciarJuego() {    
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type = "radio" name = "mascota" id = ${mokepon.nombre} />
        <label class = "tarjeta-de-mokepon" for = ${mokepon.nombre}> 
            <p> ${mokepon.nombre} </p>
            <img src = ${mokepon.foto}  alt = ${mokepon.nombre}>  
        </label>       
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

     inputHipodoge = document.getElementById('Hipodoge')
     inputCapipeo = document.getElementById('Capipeo')
     inputRatigueya = document.getElementById('Ratigueya')
     
    })
   
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)     
       
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() { 
    
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipeo.checked) {
        spanMascotaJugador.innerHTML = inputCapipeo.id
        mascotaJugador = inputCapipeo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert('You have to choose a pet to continue')
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }      
    }

    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) { 
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id = ${ataque.id} class = "boton-de-ataque BAtaque"> ${ataque.nombre} </button> 
        `
        contenedorAtaques.innerHTML += ataquesMokepon             
    })

botonFuego = document.getElementById('boton-fuego')
botonAgua = document.getElementById('boton-agua')
botonTierra = document.getElementById('boton-tierra')
botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === 'fire') {
                ataqueJugador.push('fire')
                console.log(ataqueJugador)
                boton.style.background = '#362222'
            } else if (e.target.textContent === 'water') {
                ataqueJugador.push('water')
                console.log(ataqueJugador)
                boton.style.background = '#362222'
            } else {
                ataqueJugador.push('earth')
                console.log(ataqueJugador)
                boton.style.background = '#362222'
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('fire')
    } else if(ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('water')
    } else {
        ataqueEnemigo.push('earth')
    }
    console.log(ataqueEnemigo)
    inciarPelea()
}

function inciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueEnemigo[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}



function combate() {
    for (let index = 0; index < ataqueJugador.length; index++) {
    if(ataqueJugador[index] === ataqueEnemigo[index]) {
        indexAmbosOponentes(index, index)
        crearMensaje("Tie")
        }       
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
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

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


        
    
  






