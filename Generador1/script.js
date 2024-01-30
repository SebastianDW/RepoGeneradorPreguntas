document.getElementById('generarPregunta').addEventListener('click', generarPreguntaCompleta);

function cargarJson() {

    return fetch('lista.json')
        .then(function (res) {
            return res.json();
        }
        ).then(function (data) {
            console.log(Object.values(data)[0][1]);
        })
}

function recorrer() {
    var auxmateria = document.getElementById("opcionMateria");
    var materiaSeleccionada = auxmateria.value;

    console.log(materiaSeleccionada);
}



function seleccionadorMateria(materia, i) {
    return fetch('lista.json')
        .then(function (res) {
            return res.json();
        }
        ).then(function (data) {
            console.log(Object.values(data)[materia][i]);
        })
}
function prueba() {
    var auxmateria = document.getElementById("opcionMateria");
    var materiaSeleccionada = auxmateria.value;

    var listaTemas = seleccionadorMateria(materiaSeleccionada, 0);
    for (let i = 0; i <= listaTemas.length; i++) {
        console.log(seleccionadorMateria(materiaSeleccionada, i));
    }
}

function recorrerTemas() {
    /*da las opciones de temas en el combobox*/
    var select = document.getElementById("opcionTema");
    select.innerHTML = '';


    var auxmateria = document.getElementById("opcionMateria");
    var materiaSeleccionada = auxmateria.value;

    return fetch('lista.json')
        .then(function (res) {
            return res.json();
        }
        ).then(function (data) {
            for (let i = 0; i < Object.values(data)[materiaSeleccionada].length; i++) {
                console.log(Object.values(data)[materiaSeleccionada][i]);
                var areaSeleccion = document.getElementById("opcionTema");
                var nuevaOpcion = document.createElement("option");

                nuevaOpcion.value = i;
                nuevaOpcion.id = "materiaOP";
                nuevaOpcion.title = Object.values(data)[materiaSeleccionada][i];
                nuevaOpcion.text = Object.values(data)[materiaSeleccionada][i];
                areaSeleccion.add(nuevaOpcion);
            }
        })
}

function copiarPregunta() {
    /** esta funcion copia al portapapeles la pregunta ya formada */
    console.log("copair");

    var textACopiar = document.getElementById("textoPregunta");

    var rango = document.createRange();
    rango.selectNode(textACopiar);

    var seleccion = window.getSelection();
    seleccion.removeAllRanges();
    seleccion.addRange(rango);

    document.execCommand("copy");

    seleccion.removeAllRanges();
}

function generarPreguntaCompleta() {
    var pregunta = document.getElementById("textoPregunta");
    var auxmateria = document.getElementById("opcionMateria");
    var materiaSeleccionada = auxmateria.value;
    var tema = document.getElementById("opcionTema");
    var temaSeleccionada = tema.value;

    fetch('lista.json')
        .then(function (res) {
            return res.json();
        }
        ).then(function (data) {

            let especificacionesPregunta = "";
            switch (parseInt(materiaSeleccionada)) {
                case 1: especificacionesPregunta = "un texto de al menos 15 lineas"; break;
                case 2: especificacionesPregunta = " la pregunta de al menos 4 lineas "; break;
                case 3: especificacionesPregunta = " la pregunta de al menos 2 lineas "; break;
                case 4: especificacionesPregunta = " la pregunta de al menos 2 lineas "; break;
                case 5: especificacionesPregunta = " la pregunta de al menos 2 lineas "; break;
                case 6: especificacionesPregunta = " la pregunta de al menos 2 lineas "; break;
                case 7: especificacionesPregunta = " puede ser teorico o practico"; break;
                case 8: especificacionesPregunta = " la pregunta de al menos 4 lineas o con ejemplos "; break;
                case 9: especificacionesPregunta = " de al menos 5 lineas"; break;
                case 10: especificacionesPregunta = " de al menos 5 lineas"; break;
                case 11: especificacionesPregunta = " de al menos 5 lineas"; break;
                case 12: especificacionesPregunta = " de al menos 5 lineas"; break;
                case 13: especificacionesPregunta = " de al menos 5 lineas"; break;
                case 14: especificacionesPregunta = " de al menos 5 lineas"; break;
                case 15: especificacionesPregunta = " de al menos 5 lineas"; break;
                case 16: especificacionesPregunta = " una pregunta practica de al menos 3 lineas"; break;
                case 17: especificacionesPregunta = " pregunta practica de 3 lineas"; break;
                case 18: especificacionesPregunta = " de al menos 4 lineas"; break;
            }


            /*desde aqui opcional */
            fetch('preguntas.json')
                .then(function (res) {
                    return res.json();
                }
                ).then(function (data2) {
                    pregunta.innerHTML = "Genera una pregunta tipo examen de admision, considera las siguientes preguntas" +
                        Object.values(data2)[materiaSeleccionada][0]
                        + Object.values(data2)[materiaSeleccionada][1]
                        + Object.values(data2)[materiaSeleccionada][2]
                        +
                        "estas preguntas dadas son de nivel 5 / 10, la pregunta generada debe ser de nivel 8 / 10, además la pregunta debe tratarse sobre el siguiente tema: " +
                        Object.values(data)[materiaSeleccionada][temaSeleccionada] + especificacionesPregunta + "además dame la respuesta.sigue el siguiente formato: [Enunciado de la pregunta] alternativa 1 alternativa 2 alternativa 3 alternativa 4 alternativa 5  [respuesta]";

                })
            /*hasta aqui opcional */
            /*pregunta.innerHTML = "Genera una pregunta tipo examen de admision, considera las siguientes preguntas" + "preguntasModelo" +
                "estas preguntas dadas son de nivel 5 / 10, la pregunta generada debe ser de nivel 8 / 10, además la pregunta debe tratarse sobre el siguiente tema: " +
                Object.values(data)[materiaSeleccionada][temaSeleccionada] + especificacionesPregunta + "además dame la respuesta.sigue el siguiente formato: [Enunciado de la pregunta] alternativa 1 alternativa 2 alternativa 3 alternativa 4 alternativa 5  [respuesta]";
 */
        })
}

function negarConfirmacion() {
    document.getElementById("confirmacionSection").style.display = "none";
}


