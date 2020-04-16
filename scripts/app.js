const API = new Api()
const UI = new Interfaz()
const formulario = document.getElementById('buscarCasos')
let resultado
//Funciones Casos por paises
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const paisBuscado = document.getElementById('inputPais').value

    if (paisBuscado === '') {
        UI.mostrarMensaje('Debes completar el campo.', 'alert bg-danger text-center h4')
    } else {
        API.obtenerCasosPais(paisBuscado)
            .then(data => {
                UI.MostrarResultado(data.resultado)
            })
            .catch((e) => {
                const resultadoAnterior = document.querySelector('#resultado  div')
                if (resultadoAnterior) {
                    resultadoAnterior.remove()
                }
                UI.mostrarMensaje('Pais buscado incorrecto.', 'alert bg-danger text-center h4')
            })
    }
})