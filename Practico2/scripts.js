let puntoUsuario = 0;
let puntoPc = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPc = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let ganaPunto = document.querySelector("#gano-punto");
let elejiTuOpcion = document.querySelector("#eleji-tu-opcion");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPc = document.querySelector("#eleccion-computadora");

let nombre = prompt("ingresa tu nombre");

// funcion para saludar al jugador 
function saludar(nombre) {
    let regex = /[0-9]+/;
  
      if(nombre == ''){
        return alert(`Debe agregar un nombre!`);
      }else if(!regex.test(nombre)){
          return alert(`¡¡¡Hola ${nombre}, a jugar!!!`);
      }else{
        return alert(` ${nombre} No es un nombre valido, por favor ingresa uno!`);
      }
  }
  saludar(nombre);


let botonesOpcion = document.querySelectorAll(".opcion");
botonesOpcion.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});


// funcion en la que identificamos la eleccion del jugador y la computadora, los puntos, quien gana y quien pierde
function iniciarTurno(e) {
    let eleccionPc = Math.floor(Math.random() * 3);
    let eleccionUsiario = e.currentTarget.id;

    if (eleccionPc === 0) {
        eleccionPc = "piedra✊";
    } else if (eleccionPc === 1) {
        eleccionPc = "papel✋";
    } else {
        eleccionPc = "tijera✌";
    }


    if (
        (eleccionUsiario === "piedra✊" && eleccionPc === "tijera✌") ||
        (eleccionUsiario === "papel✋" && eleccionPc === "piedra✊") ||
        (eleccionUsiario === "tijera✌" && eleccionPc === "papel✋")
    ) {
        ganaUsuario();
    } else if (
        (eleccionPc === "piedra✊" && eleccionUsiario === "tijera✌") ||
        (eleccionPc === "papel✋" && eleccionUsiario === "piedra✊") ||
        (eleccionPc === "tijera✌" && eleccionUsiario === "papel✋")
    ) {
        ganaPc();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsiario;
    contenedorEleccionPc.innerText = eleccionPc;

    if (puntoUsuario === 5 || puntoPc === 5) {
        if (puntoUsuario === 5) {
            instrucciones.innerText = "¡¡Ganaste el juego!! 🥳";
        }

        if (puntoPc === 5) {
            instrucciones.innerText = "¡¡La computadora ganó el juego!! 😢";
        }

        elejiTuOpcion.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }

}

// funcion en la que le sumamos puntos al usuario
function ganaUsuario() {
    puntoUsuario++;
    contenedorPuntosUsuario.innerText = puntoUsuario;
    ganaPunto.innerText = "¡¡Ganaste un punto!! 😎";
}

// funcion en la que le sumamos puntos a la computadora
function ganaPc() {
    puntoPc++;
    contenedorPuntosPc.innerText = puntoPc;
    ganaPunto.innerText = "¡¡La computadora ganó un punto!! 😭";
}

//funcion en la que mostramos el empate
function empate() {
    ganaPunto.innerText = "¡¡Empate!! 😱";
}

// funcion de reinicio del juego
function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elejiTuOpcion.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntoUsuario = 0;
    puntoPc = 0;

    contenedorPuntosUsuario.innerText = puntoUsuario;
    contenedorPuntosPc.innerText = puntoPc;

    instrucciones.innerText = "¡El primero en llegar a 5 gana!";
}