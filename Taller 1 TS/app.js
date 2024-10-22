import { series } from './data.js';
var table = document.getElementById('seriesTable');
var promedio = (series.reduce(function (acc, serie) { return acc + serie.temporada; }, 0) / series.length);
series.forEach(function (series) {
    var fila = table.insertRow();
    fila.innerHTML = "<td>".concat(series.id, "</td>\n                     <td>").concat(series.nombre, "</td>\n                    <td>").concat(series.canal, "</td>\n                     <td>").concat(series.temporada, "</td>");
});
var fila = table.insertRow();
fila.innerHTML = "<td colspan=\"2\">Promedio de temporadas: ".concat(promedio, "</td>");
