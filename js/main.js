// GUARDAR EL ESTADO (COLUMNA ACTIVA)
let columnaActiva = 1;

// SELECCIONAR COLUMNA
const columnas = document.querySelectorAll('.columna');

// ESCUCHAR CLICKS EN CADA COLUMNA
columnas.forEach((columna, indice) => {
 columna.addEventListener('click', function () {
  cambiarColumna(indice);
 });
});

// CAMBIAR EL ESTADO DE LAS COLUMNAS
function cambiarColumna(indice) {
 columnas[columnaActiva].classList.remove('active');
 columnas[indice].classList.add('active');
 columnaActiva = indice;
}
