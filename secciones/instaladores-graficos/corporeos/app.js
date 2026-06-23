// =========================
// ELEMENTOS
// =========================

const inputFoto =
  document.getElementById(
    "inputFoto"
  );

const botonSubirFoto =
  document.getElementById(
    "botonSubirFoto"
  );

const botonInstagram =
  document.getElementById(
    "botonInstagram"
  );

const imagenFachada =
  document.getElementById(
    "imagenFachada"
  );

const inputTexto =
  document.getElementById(
    "inputTexto"
  );

const inputFachada =
  document.getElementById(
    "inputFachada"
  );

const cartelDemo =
  document.getElementById(
    "cartelDemo"
  );

const textoCartel =
  document.getElementById(
    "textoCartel"
  );

const selectorColor =
  document.getElementById(
    "selectorColor"
  );

const selectorTipografia =
  document.getElementById(
    "selectorTipografia"
  );

const selectorEstilo =
  document.getElementById(
    "selectorEstilo"
  );

const botonMas =
  document.getElementById(
    "botonMas"
  );

const botonMenos =
  document.getElementById(
    "botonMenos"
  );

const moverArriba =
  document.getElementById(
    "moverArriba"
  );

const moverAbajo =
  document.getElementById(
    "moverAbajo"
  );

const moverIzquierda =
  document.getElementById(
    "moverIzquierda"
  );

const moverDerecha =
  document.getElementById(
    "moverDerecha"
  );

const rotarIzquierda =
  document.getElementById(
    "rotarIzquierda"
  );

const rotarDerecha =
  document.getElementById(
    "rotarDerecha"
  );

const botonWhatsapp =
  document.getElementById(
    "botonWhatsapp"
  );

const altoEstimado =
  document.getElementById(
    "altoEstimado"
  );

const cantidadLetras =
  document.getElementById(
    "cantidadLetras"
  );

const precioEstimado =
  document.getElementById(
    "precioEstimado"
  );

const contenedorPreview =
  document.querySelector(
    ".contenedorPreview"
  );
const inicioLocal =
  document.getElementById(
    "inicioLocal"
  );

const finLocal =
  document.getElementById(
    "finLocal"
  );

// =========================
// ESTADO
// =========================

let tamanioActual = 52;

let posicionX = 0;
let posicionY = 0;

let rotacion = 0;
let porcentajeInicio = 15;

let porcentajeFin = 85;

// =========================
// FOTO
// =========================

botonSubirFoto.addEventListener(

  "click",

  () => {

    inputFoto.click();

  }
);


inputFoto.addEventListener(

  "change",

  (event) => {

    const archivo =
      event.target.files[0];

    if(!archivo){

      return;
    }

    const lector =
      new FileReader();

    lector.onload =
      (e) => {

        imagenFachada.src =
          e.target.result;
      };

    lector.readAsDataURL(
      archivo
    );
  }
);


// =========================
// TEXTO
// =========================

inputTexto.addEventListener(

  "input",

  () => {

    const texto =
      inputTexto.value.trim();

    textoCartel.textContent =

      texto || "TU CARTEL";

    actualizarCotizacion();

  }
);


// =========================
// COLOR
// =========================

selectorColor.addEventListener(

  "change",

  () => {

    const color =
      selectorColor.value;

    textoCartel.style.setProperty(
      "--color-canto",
      color
    );

    if(
      selectorEstilo.value ===
      "polifan"
    ){

      textoCartel.style.color =
        color;
    }

    else if(
      selectorEstilo.value ===
      "acrilico"
    ){

      textoCartel.style.color =
        "#ffffff";
    }

    else if(
      selectorEstilo.value ===
      "galvanizado"
    ){

      textoCartel.style.color =
        "#d8d8d8";
    }

  }
);


// =========================
// TIPOGRAFIA
// =========================

selectorTipografia.addEventListener(

  "change",

  () => {

    textoCartel.style.fontFamily =
      selectorTipografia.value;

    actualizarCotizacion();

  }
);


// =========================
// ESTILOS
// =========================

function actualizarEstilo(){

  textoCartel.classList.remove(
    "estilo-polifan",
    "estilo-galvanizado",
    "estilo-acrilico",
  );


  if(
    selectorEstilo.value ===
    "polifan"
  ){

    textoCartel.classList.add(
      "estilo-polifan"
    );
  }


  if(
    selectorEstilo.value ===
    "galvanizado"
  ){

    textoCartel.classList.add(
      "estilo-galvanizado"
    );
  }


  if(
    selectorEstilo.value ===
    "acrilico"
  ){

    textoCartel.classList.add(
      "estilo-acrilico"
    );
  }

const color =
  selectorColor.value;

if(
  selectorEstilo.value ===
  "polifan"
){

  textoCartel.style.color =
    color;
}

else if(
  selectorEstilo.value ===
  "acrilico"
){

  textoCartel.style.color =
    "#ffffff";
}

else if(
  selectorEstilo.value ===
  "galvanizado"
){

  textoCartel.style.color =
    "#d8d8d8";
}
}


selectorEstilo.addEventListener(

  "change",

  actualizarEstilo
);


// =========================
// TAMAÑO
// =========================

botonMas.addEventListener(

  "click",

  () => {

    tamanioActual += 4;

    textoCartel.style.fontSize =

      `${tamanioActual}px`;

    actualizarCotizacion();

  }
);


botonMenos.addEventListener(

  "click",

  () => {

    tamanioActual -= 4;

    if(tamanioActual < 18){

      tamanioActual = 18;
    }

    textoCartel.style.fontSize =

      `${tamanioActual}px`;

    actualizarCotizacion();

  }
);


// =========================
// TRANSFORM
// =========================
function actualizarTransform(){

  cartelDemo.style.transform =

    `
      translate(${posicionX}px, ${posicionY}px)
      rotate(${rotacion}deg)
    `;
}


// =========================
// POSICION
// =========================

moverArriba.addEventListener(

  "click",

  () => {

    posicionY -= 10;

    actualizarTransform();

  }
);


moverAbajo.addEventListener(

  "click",

  () => {

    posicionY += 10;

    actualizarTransform();

  }
);


moverIzquierda.addEventListener(

  "click",

  () => {

    posicionX -= 10;

    actualizarTransform();

  }
);


moverDerecha.addEventListener(

  "click",

  () => {

    posicionX += 10;

    actualizarTransform();

  }
);


// =========================
// ROTACION
// =========================

rotarIzquierda.addEventListener(

  "click",

  () => {

    rotacion -= 2;

    actualizarTransform();

  }
);


rotarDerecha.addEventListener(

  "click",

  () => {

    rotacion += 2;

    actualizarTransform();

  }
);


// =========================
// COTIZACION
// =========================

function actualizarCotizacion(){

  const anchoFachada =

    Number(
      inputFachada.value
    );

  const texto =

    textoCartel.textContent.trim();

  const tipografia =

    selectorTipografia.value;

  if(
    !anchoFachada ||
    !texto
  ){

    altoEstimado.textContent =
      "Alto estimado: —";

    cantidadLetras.textContent =
      "Letras: —";

    precioEstimado.textContent =
      "Estimación: —";

    return;
  }

  const anchoLocalVisible =

  contenedorPreview.offsetWidth *

  (
    (porcentajeFin - porcentajeInicio)
    / 100
  );

const porcentajeCartel =

  textoCartel.offsetWidth /

  anchoLocalVisible;
  const resultado =

    calcularPrecio(
      anchoFachada,
      porcentajeCartel,
      texto,
      tipografia
    );

  if(!resultado){

    return;
  }

  altoEstimado.textContent =

    `Alto estimado: ${resultado.alturaEstimada} cm`;

  cantidadLetras.textContent =

    `Letras: ${resultado.cantidadLetras}`;

  precioEstimado.textContent =

    `Estimación: $${resultado.precioEstimado.toLocaleString("es-AR")}`;
}


inputFachada.addEventListener(

  "input",

  actualizarCotizacion

);
inicioLocal.addEventListener(

  "input",

  () => {

    if(
      Number(inicioLocal.value) >=
      Number(finLocal.value)
    ){

      inicioLocal.value =
        Number(finLocal.value) - 1;
    }

    porcentajeInicio =
      Number(inicioLocal.value);

    actualizarCotizacion();

  }

);


finLocal.addEventListener(

  "input",

  () => {

    if(
      Number(finLocal.value) <=
      Number(inicioLocal.value)
    ){

      finLocal.value =
        Number(inicioLocal.value) + 1;
    }

    porcentajeFin =
      Number(finLocal.value);

    actualizarCotizacion();

  }

);

// =========================
// WHATSAPP
// =========================

botonWhatsapp.addEventListener(

  "click",

  () => {

    const nombre =
      inputTexto.value || "Mi negocio";

    const estilo =
      selectorEstilo.options[
        selectorEstilo.selectedIndex
      ].text;

    const color =
      selectorColor.options[
        selectorColor.selectedIndex
      ].text;

    const mensaje =

`Hola.

Utilicé el simulador y quiero solicitar mi asesoramiento sin costo para evaluar la mejor opción de cartel para mi negocio.

Datos de la simulación:

• Nombre del negocio: ${nombre}

• Estilo seleccionado: ${estilo}

• Color seleccionado: ${color}

Me gustaría recibir una recomendación profesional y una propuesta personalizada.`;



    const url =

`https://wa.me/5493518550148?text=${encodeURIComponent(mensaje)}`;

    window.open(
      url,
      "_blank"
    );

  }
);

// =========================
// INSTAGRAM
// =========================

botonInstagram.addEventListener(

  "click",

  () => {

    window.open(
      "https://www.instagram.com/instaladoresgraficos_?igsh=bmRuMDA0bzV2NWhh",
      "_blank"
    );

  }
);
// =========================
// INICIO
// =========================

actualizarEstilo();

textoCartel.style.fontFamily =
  selectorTipografia.value;

textoCartel.style.setProperty(
  "--color-canto",
  selectorColor.value
);

actualizarCotizacion();