const btnEncriptar = document.querySelector("#btn-encriptar");
const cajaTexto = document.querySelector("#caja-texto");
const botonDesencriptar = document.querySelector("#boton-desencriptar");
const cajaMensaje = document.querySelector("#caja-mensaje");

btnEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);

function limpiarCajaTexto() {
  cajaTexto.value = "";
}

function encriptar() {
  let mensajeOriginal = cajaTexto.value;
  let mensajeEncriptado = "";
  let contador = 0;
  while (contador < mensajeOriginal.length) {
    if (mensajeOriginal[contador] == "e") {
      mensajeEncriptado += "enter";
    } else if (mensajeOriginal[contador] == "i") {
      mensajeEncriptado += "imes";
    } else if (mensajeOriginal[contador] == "a") {
      mensajeEncriptado += "ai";
    } else if (mensajeOriginal[contador] == "o") {
      mensajeEncriptado += "ober";
    } else if (mensajeOriginal[contador] == "u") {
      mensajeEncriptado += "ufat";
    } else {
      mensajeEncriptado += mensajeOriginal[contador];
    }
    contador += 1;
  }
  limpiarCajaTexto();
  cajaMensaje.innerHTML = mensajeEncriptado;
}

function desencriptar() {
  let mensajeDesencriptado = cajaTexto.value;
  // enterimeshl //eihl
  mensajeDesencriptado = mensajeDesencriptado.replaceAll("enter", "e");
  mensajeDesencriptado = mensajeDesencriptado.replaceAll("imes", "i");
  mensajeDesencriptado = mensajeDesencriptado.replaceAll("ai", "a");
  mensajeDesencriptado = mensajeDesencriptado.replaceAll("ober", "o");
  mensajeDesencriptado = mensajeDesencriptado.replaceAll("ufat", "u");

  limpiarCajaTexto();
  cajaMensaje.innerHTML = mensajeDesencriptado;
}

async function copiar() {
  try {
    await navigator.clipboard.writeText(cajaMensaje.innerHTML);
    console.log("Contenido copiado al portapapeles");
  } catch (err) {
    console.error("Error al copiar: ", err);
  }
}

cajaTexto.addEventListener("keydown", (event) => {
  let letra = event.key;
  if (event.key == " " || event.key.length > 1 || (event.key.length == 1 && /^[a-z]{1}$/.test(letra))) {
  } else {
    alert("Solo minúsculas y sin acentos");
    event.preventDefault();
  }
});
