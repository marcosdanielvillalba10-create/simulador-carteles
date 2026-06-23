const inputFotoFachada =
document.getElementById("inputFotoFachada");

const botonSubirFoto =
document.getElementById("botonSubirFoto");

const imagenFachada =
document.getElementById("imagenFachada");

const inputDiseno =
document.getElementById("inputDiseno");

const botonSubirDiseno =
document.getElementById("botonSubirDiseno");

const imagenvinilo =
document.getElementById("imagenvinilo");

const botonMas =
document.getElementById("botonMas");

const botonMenos =
document.getElementById("botonMenos");

const moverArriba =
document.getElementById("moverArriba");

const moverAbajo =
document.getElementById("moverAbajo");

const moverIzquierda =
document.getElementById("moverIzquierda");

const moverDerecha =
document.getElementById("moverDerecha");

const rotarIzquierda =
document.getElementById("rotarIzquierda");

const rotarDerecha =
document.getElementById("rotarDerecha");

let escala = 1;
let posicionX = 0;
let posicionY = 0;
let rotacion = 0;

function actualizarTransformacion() {

  imagenvinilo.style.transform =
  `
  translate(${posicionX}px, ${posicionY}px)
  scale(${escala})
  rotate(${rotacion}deg)
  `;

}

botonSubirFoto.addEventListener(
  "click",
  () => inputFotoFachada.click()
);

inputFotoFachada.addEventListener(
  "change",
  (evento) => {

    const archivo =
    evento.target.files[0];

    if (!archivo) return;

    imagenFachada.src =
    URL.createObjectURL(archivo);

  }
);

botonSubirDiseno.addEventListener(
  "click",
  () => inputDiseno.click()
);

inputDiseno.addEventListener(
  "change",
  (evento) => {

    const archivo =
    evento.target.files[0];

    if (!archivo) return;

    imagenvinilo.src =
    URL.createObjectURL(archivo);

  }
);

botonMas.addEventListener(
  "click",
  () => {

    escala += 0.1;

    actualizarTransformacion();

  }
);

botonMenos.addEventListener(
  "click",
  () => {

    escala -= 0.1;

    if (escala < 0.1) {

      escala = 0.1;

    }

    actualizarTransformacion();

  }
);

moverArriba.addEventListener(
  "click",
  () => {

    posicionY -= 10;

    actualizarTransformacion();

  }
);

moverAbajo.addEventListener(
  "click",
  () => {

    posicionY += 10;

    actualizarTransformacion();

  }
);

moverIzquierda.addEventListener(
  "click",
  () => {

    posicionX -= 10;

    actualizarTransformacion();

  }
);

moverDerecha.addEventListener(
  "click",
  () => {

    posicionX += 10;

    actualizarTransformacion();

  }
);

rotarIzquierda.addEventListener(
  "click",
  () => {

    rotacion -= 5;

    actualizarTransformacion();

  }
);

rotarDerecha.addEventListener(
  "click",
  () => {

    rotacion += 5;

    actualizarTransformacion();

  }
);

actualizarTransformacion();
const botonInstagram =
document.getElementById("botonInstagram");

if(botonInstagram){

  botonInstagram.addEventListener(
    "click",
    () => {

      window.open(
        "https://www.instagram.com/instaladoresgraficos_?igsh=bmRuMDA0bzV2NWhh",
        "_blank"
      );

    }
  );

}


const botonWhatsapp =
document.getElementById("botonWhatsapp");

if(botonWhatsapp){

  botonWhatsapp.addEventListener(
    "click",
    () => {

    window.open(
  "https://wa.me/5493518550148?text=Hola,%20utilicé%20el%20cotizador%20web%20y%20quiero%20recibir%20asesoramiento%20sobre%20mi%20cartel.",
  "_blank"
);

    }
  );

}