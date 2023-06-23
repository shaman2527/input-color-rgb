const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoverde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoverde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo},${verde},${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

// Para actualizar red

inputRojo.addEventListener("change", (e) => {
  let rojo = e.target.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar verde obj (e)

inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoverde.innerText = verde;
  actualizarColor(rojo, verde, azul);
});

// para actualizar azul

inputAzul.addEventListener("change", (e) => {
  verde = inputAzul.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
});
