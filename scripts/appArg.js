const API = new Api()
const UI = new Interfaz()

const formulario = document.getElementById('buscarCasos')
let resultado


API.obtenerCasosPais('argentina')
    .then(data => {
        UI.mostrarCasosPais(data.resultado)
    })

API.obtenerCasosMundial()
    .then(data => {
        UI.mostrarCasosMundial(data.resultado)
    })