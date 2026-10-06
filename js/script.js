function bienvenida() {
    alert("¡Gracias por visitar ARLY!");
}
function revisarQuiz() {
    const respuestas = {
        q1: "b",
        q2: "a",
        q3: "a",
        q4: "b",
        q5: "c",
        q6: "a",
        q7: "b",
        q8: "c"
    };

    let puntos = 0;

    for (let pregunta in respuestas) {
        const seleccion = document.querySelector(
            `input[name="${pregunta}"]:checked`
        );

        if (seleccion && seleccion.value === respuestas[pregunta]) {
            puntos++;
        }
    }

    const resultado = document.getElementById("resultado");

    resultado.textContent =
        "Obtuviste " + puntos + " de 8 respuestas correctas.";
}