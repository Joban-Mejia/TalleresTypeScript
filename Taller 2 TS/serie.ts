export class Serie {
    id: number;
    nombre: string;
    canal: string;
    temporada: number;
    descripcion: string;
    link: string;
    imagen: string;

    constructor(id: number, nombre: string, canal: string, temporada: number, descripcion: string, link: string, imagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporada = temporada;
        this.descripcion = descripcion;
        this.link = link;
        this.imagen = imagen;
    }
}
