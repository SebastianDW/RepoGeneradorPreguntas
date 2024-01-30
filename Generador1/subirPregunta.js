function identificar() {
    document.getElementById("confirmacionSection").style.display = "flex";
    // Obtener el valor del textarea
    var textoPregunta = document.getElementById("textareaPregunta").value;

    // Variables para almacenar los datos
    var enunciadoReal;
    var alternativa1;
    var alternativa2;
    var alternativa3;
    var alternativa4;
    var alternativa5;
    var respuesta;

    // Patrón para detectar el enunciado de la pregunta
    const patronEnunciado = /\[Enunciado de la pregunta\]\s*([\s\S]+?)(?=\[Respuesta\]|\n|$)/;

    // Patrón para detectar cada alternativa
    const patronAlternativas = /([A-E]\).+?)\n/g;

    // Patrón para detectar la respuesta
    const patronRespuesta = /\[respuesta\]\s*([\s\S]+?)(?=\[Enunciado de la pregunta\]|\n|$)/i;


    // Extraer el enunciado de la pregunta
    const matchEnunciado = textoPregunta.match(patronEnunciado);
    enunciadoReal = matchEnunciado ? matchEnunciado[1] : null;

    // Extraer las alternativas
    let matchAlternativas;
    const alternativas = [];
    let i = 1;
    while ((matchAlternativas = patronAlternativas.exec(textoPregunta)) !== null && i <= 5) {
        switch (i) {
            case 1:
                alternativa1 = matchAlternativas[1];
                break;
            case 2:
                alternativa2 = matchAlternativas[1];
                break;
            case 3:
                alternativa3 = matchAlternativas[1];
                break;
            case 4:
                alternativa4 = matchAlternativas[1];
                break;
            case 5:
                alternativa5 = matchAlternativas[1];
                break;
        }
        i++;
    }

    // Extraer la respuesta
    const matchRespuesta = textoPregunta.match(patronRespuesta);
    respuesta = matchRespuesta ? matchRespuesta[1] : null;

    // Ahora puedes utilizar las variables según sea necesario
    console.log("Enunciado:", enunciadoReal);
    console.log("Alternativa 1:", alternativa1);
    console.log("Alternativa 2:", alternativa2);
    console.log("Alternativa 3:", alternativa3);
    console.log("Alternativa 4:", alternativa4);
    console.log("Alternativa 5:", alternativa5);
    console.log("Respuesta:", respuesta);



    document.getElementById("p_enunciado").innerHTML = enunciadoReal;
    document.getElementById("p_alter1").innerHTML = alternativa1;
    document.getElementById("p_alter2").innerHTML = alternativa2;
    document.getElementById("p_alter3").innerHTML = alternativa3;
    document.getElementById("p_alter4").innerHTML = alternativa4;
    document.getElementById("p_alter5").innerHTML = alternativa5;
    document.getElementById("p_respuesta").innerHTML = respuesta;

}
