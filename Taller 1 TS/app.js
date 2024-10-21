System.register("serie", [], function (exports_1, context_1) {
    "use strict";
    var Serie;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Serie = class Serie {
                id;
                nombre;
                canal;
                temporada;
                descripcion;
                link;
                imagen;
                constructor(id, nombre, canal, temporada, descripcion, link, imagen) {
                    this.id = id;
                    this.nombre = nombre;
                    this.canal = canal;
                    this.temporada = temporada;
                    this.descripcion = descripcion;
                    this.link = link;
                    this.imagen = imagen;
                }
            };
            exports_1("Serie", Serie);
        }
    };
});
System.register("data", ["serie"], function (exports_2, context_2) {
    "use strict";
    var serie_1, series;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (serie_1_1) {
                serie_1 = serie_1_1;
            }
        ],
        execute: function () {
            exports_2("series", series = [
                new serie_1.Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer.", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg"),
                new serie_1.Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary.", "https://www.netflix.com/co/title/70242311", "https://i.imgur.com/EvKe48G.jpg"),
                new serie_1.Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama, the series is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels.", "https://www.hbo.com/game-of-thrones", "https://i.imgur.com/TDCEV1S.jpg"),
                new serie_1.Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life.", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
                new serie_1.Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman).", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),
                new serie_1.Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg")
            ]);
        }
    };
});
System.register("app", ["data"], function (exports_3, context_3) {
    "use strict";
    var data_1, table, promedio, row;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (data_1_1) {
                data_1 = data_1_1;
            }
        ],
        execute: function () {
            table = document.getElementById('TableBody');
            promedio = (data_1.series.reduce((acc, serie) => acc + serie.temporada, 0) / data_1.series.length);
            data_1.series.forEach(series => {
                const row = table.insertRow();
                row.innerHTML = `<td>${series.id}</td>
                     <td>${series.nombre}</td>
                    <td>${series.canal}</td>
                     <td>${series.temporada}</td>`;
            });
            row = table.insertRow();
            row.innerHTML = `<td colspan="2">Promedio de temporadas: ${promedio}</td>`;
        }
    };
});
