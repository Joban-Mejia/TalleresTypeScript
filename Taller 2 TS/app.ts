import { series } from './data.js';

const table: HTMLTableElement = document.getElementById('seriesTable') as HTMLTableElement;
const cardTitle: HTMLElement = document.querySelector('.card-title') as HTMLElement;
const cardText: HTMLElement = document.querySelector('.card-text') as HTMLElement;
const cardLink: HTMLAnchorElement = document.querySelector('.btn') as HTMLAnchorElement;
const cardImage: HTMLImageElement = document.querySelector('.card-img-top') as HTMLImageElement;

// Calculamos el promedio de temporadas
const promedio: number = series.reduce((acc, serie) => acc + serie.temporada, 0) / series.length;

// Renderizamos las series en la tabla
series.forEach((serie) => {
    const fila: HTMLTableRowElement = table.insertRow();
    fila.innerHTML = `<td>${serie.id}</td>
                    <td class="pointer-name">${serie.nombre}</td>
                    <td>${serie.canal}</td>
                    <td>${serie.temporada}</td>`;

    const nombreSerie = fila.querySelector('.pointer-name');
    nombreSerie?.addEventListener('click', function() {
        mostrarDetalles(serie);
    });
});

// Mostrar el promedio de temporadas en la última fila
const filaPromedio: HTMLTableRowElement = table.insertRow();
filaPromedio.innerHTML = `<td colspan="4">Promedio de temporadas: ${promedio}</td>`;

// Definimos el tipo de la función mostrarDetalles
function mostrarDetalles(serie: { id: number, nombre: string, canal: string, temporada: number, descripcion: string, link: string, imagen: string }): void {
    cardTitle.textContent = serie.nombre;
    cardText.textContent = serie.descripcion;
    cardLink.href = serie.link;
    cardLink.textContent = "Mirala Aquí";
    cardLink.target = "_blank";
    cardImage.src = serie.imagen;
}
