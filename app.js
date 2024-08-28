// seleccionar Encriptar
const btnEncriptar = document.querySelector(".btn_encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const resp = document.querySelector(".probar");
const contenido = document.querySelector(".caja_resultado_contenedor");
const btnDesencriptar = document.querySelector(".btn_desencriptar");
const btnCopiar = document.querySelector(".btn-copiar");

//encriptar
btnEncriptar.addEventListener("click",e=>{
    e.preventDefault();
    let textoIngresado = txtEncriptar.value
    console.log('texto capturado: ', textoIngresado);
    let txt = textoIngresado.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(textoIngresado == ""){
        alert("No puede estar el campo vacio");
    } else if(textoIngresado !== txt){
        alert("No debe tener acentos y caracteres especiales");
    }
    else if(textoIngresado !== textoIngresado.toLowerCase()){
        alert("El texto debe ser todo en minúscula");
    }
    else{
     //   textoEncriptado = textoEncriptado.replace(/a/mg, "ai");
     textoIngresado = textoIngresado.replace(/e/mg, "enter");
     textoIngresado = textoIngresado.replace(/i/mg, "imes");
     textoIngresado = textoIngresado.replace(/a/mg, "ai");
     textoIngresado = textoIngresado.replace(/o/mg, "ober");
     textoIngresado = textoIngresado.replace(/u/mg, "ufat");

        resp.innerHTML = textoIngresado;
        btnCopiar.style.visibility = "inherit";
        contenido.remove(); 
    }
});

//desencriptar//
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let textoEncriptado = txtEncriptar.value;
    let txt = textoEncriptado.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(textoEncriptado == ""){
        alert("No puede estar el campo vacio");
    }
    else if(textoEncriptado !== txt){
        alert("No debe tener acentos y caracteres especiales");
    }
    else if(textoEncriptado !== textoEncriptado.toLowerCase()){
        alert("El texto debe ser todo en minúscula");
    }
    else{
        //textoEncriptado = textoEncriptado.replace(/ai/mg, "a");
        textoEncriptado = textoEncriptado.replace(/enter/mg, "e");
        textoEncriptado = textoEncriptado.replace(/imes/mg, "i");
        textoEncriptado = textoEncriptado.replace(/ai/mg, "a");
        textoEncriptado = textoEncriptado.replace(/ober/mg, "o");
        textoEncriptado = textoEncriptado.replace(/ufat/mg, "u");

        resp.innerHTML = textoEncriptado;
        btnCopiar.style.visibility = "inherit";
        contenido.remove(); 
    }
});

//Boton de Copiar//
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = resp;
    copiar.select();
    document.execCommand("copy"); 
});
