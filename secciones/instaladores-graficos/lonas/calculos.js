const PRECIO_M2 = 20490;
const VIATICO = 20000;

const inputAncho = document.getElementById("anchoLona");
const inputAlto = document.getElementById("altoLona");

const metrosCuadrados = document.getElementById("metrosCuadrados");
const precioEstimado = document.getElementById("precioEstimado");

function calcular() {

  const ancho = Number(inputAncho.value);
  const alto = Number(inputAlto.value);

  if (
    ancho <= 0 ||
    alto <= 0 ||
    isNaN(ancho) ||
    isNaN(alto)
  ) {

    metrosCuadrados.textContent =
      "Metros cuadrados: —";

    precioEstimado.textContent =
      "Estimación: —";

    return;
  }

  const m2 = ancho * alto;

  const total =
    (m2 * PRECIO_M2) +
    VIATICO;

  metrosCuadrados.textContent =
    `Metros cuadrados: ${m2.toFixed(2)} m²`;

  precioEstimado.textContent =
    `Estimación: $${Math.round(total).toLocaleString("es-AR")}`;
}

inputAncho.addEventListener(
  "input",
  calcular
);

inputAlto.addEventListener(
  "input",
  calcular
);

calcular();