import { series } from './data.js';

const table:HTMLTableElement = document.getElementById('seriesTable') as HTMLTableElement;

let promedio = (series.reduce((acc, serie) => acc + serie.temporada, 0) / series.length);

series.forEach(series => {
    const fila:HTMLTableRowElement = table.insertRow();
    fila.innerHTML = `<td>${series.id}</td>
                     <td>${series.nombre}</td>
                    <td>${series.canal}</td>
                     <td>${series.temporada}</td>`;
});

const fila:HTMLTableRowElement = table.insertRow();
fila.innerHTML = `<td colspan="2">Promedio de temporadas: ${promedio}</td>`;
