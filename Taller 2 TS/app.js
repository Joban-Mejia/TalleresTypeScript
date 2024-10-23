import { series } from './data.js';
var table = document.getElementById('seriesTable');
var cardTitle = document.querySelector('.card-title');
var cardText = document.querySelector('.card-text');
var cardLink = document.querySelector('.btn');
var cardImage = document.querySelector('.card-img-top');
// Calculamos el promedio de temporadas
var promedio = series.reduce(function (acc, serie) { return acc + serie.temporada; }, 0) / series.length;
// Renderizamos las series en la tabla
series.forEach(function (serie) {
    var fila = table.insertRow();
    fila.innerHTML = "<td>".concat(serie.id, "</td>\n                      <td class=\"pointer-name\">").concat(serie.nombre, "</td>\n                      <td>").concat(serie.canal, "</td>\n                      <td>").concat(serie.temporada, "</td>");
    // Añadimos un event listener a cada fila
    var nombreSerie = fila.querySelector('.pointer-name');
    nombreSerie === null || nombreSerie === void 0 ? void 0 : nombreSerie.addEventListener('click', function () {
        mostrarDetalles(serie);
    });
});
// Mostrar el promedio de temporadas en la última fila
var filaPromedio = table.insertRow();
filaPromedio.innerHTML = "<td colspan=\"4\">Promedio de temporadas: ".concat(promedio, "</td>");
// Definimos el tipo de la función mostrarDetalles
function mostrarDetalles(serie) {
    cardTitle.textContent = serie.nombre;
    cardText.textContent = serie.descripcion;
    cardLink.href = serie.link;
    cardLink.textContent = "Mirala Aquí";
    cardLink.target = "_blank";
    cardImage.src = serie.imagen;
}
