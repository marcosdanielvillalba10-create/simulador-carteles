// =========================
// CONFIGURACION GENERAL
// =========================

const PRECIO_POR_CM = 3600;

const MARGEN_SEGURIDAD = 1.00;


// =========================
// TIPOGRAFIAS
// =========================

const TIPOGRAFIAS = {

  Inlanders: {
    factorAltura: 0.24,
    factorComplejidad: 1.00
  },

  Montserrat: {
    factorAltura: 0.20,
    factorComplejidad: 1.00
  },

  Sono: {
    factorAltura: 0.22,
    factorComplejidad: 1.00
  }

};


// =========================
// UTILIDADES
// =========================

function contarLetras(texto){

  return texto
    .replace(/\s/g, "")
    .length;
}


// =========================
// CALCULO PRINCIPAL
// =========================

function calcularPrecio(
  anchoFachada,
  porcentajeCartel,
  texto,
  tipografia
){

  if(
    !anchoFachada ||
    !porcentajeCartel ||
    !texto ||
    !tipografia
  ){

    return null;
  }

  const config =
    TIPOGRAFIAS[tipografia];

  if(!config){

    return null;
  }

  const anchoCartel =

    anchoFachada *
    porcentajeCartel;

  const alturaEstimada =

    anchoCartel *
    config.factorAltura;

  const cantidadLetras =

    contarLetras(texto);

  let precio =

    alturaEstimada *
    cantidadLetras *
    PRECIO_POR_CM;

  precio *=
    config.factorComplejidad;

  precio *=
    MARGEN_SEGURIDAD;

  return {

    anchoCartel:
      Math.round(anchoCartel),

    alturaEstimada:
      Math.round(alturaEstimada),

    cantidadLetras,

    precioEstimado:
      Math.round(precio)

  };

}