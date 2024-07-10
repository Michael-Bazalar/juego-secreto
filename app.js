let numeroSecreto = 0;
let intento = 0;
let listaNumerosSorteados = [];
let numeroMaximo =10;

condicionesIniciales()

function condicionesIniciales(){
    asignarTextoElemento('h1',"El juego del número secreto");
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intento= 1;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //es igual a let numeroGenerado = parseInt(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        //si el número generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        if(numeroDeUsuario===numeroSecreto){
            asignarTextoElemento('p',`acertaste en ${intento} ${(intento>1)?'intentos':'intento'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else 
        //el usuario no acertó
        if(numeroDeUsuario<numeroSecreto){
            asignarTextoElemento('p','el número secreto es mayor')
        }else{
            asignarTextoElemento('p','el número secreto es menor')
        }
        intento++;
        limpiarCaja()
        return
}

function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;  
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja()
    //indica mensaje de 1 a 10
    // generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales()
    //deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
        
}