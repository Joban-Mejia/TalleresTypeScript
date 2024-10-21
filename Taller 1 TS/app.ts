/* import { series } from './data';

const seriesTable = document.getElementById('seriesTable');


series.forEach((serie) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <th scope="row">${serie.id}</th>
    <td>${serie.nombre}</td>
    <td>${serie.canal}</td>
    <td>${serie.temporada}</td>
    <td>
      <img src="${serie.imagen}" alt="${serie.nombre}" style="width: 100px;">
    </td>
    <td>
      <a href="${serie.link}" target="_blank">More Info</a>
    </td>
  `;
  seriesTable?.appendChild(row);
});
 */
import { series } from './data';

const table:HTMLTableElement = document.getElementById('TableBody') as HTMLTableElement;

let promedio = (series.reduce((acc, serie) => acc + serie.temporada, 0) / series.length);

series.forEach(series => {
    const row:HTMLTableRowElement = table.insertRow();
    row.innerHTML = `<td>${series.id}</td>
                     <td>${series.nombre}</td>
                    <td>${series.canal}</td>
                     <td>${series.temporada}</td>`;
});

const row:HTMLTableRowElement = table.insertRow();
row.innerHTML = `<td colspan="2">Promedio de temporadas: ${promedio}</td>`;
