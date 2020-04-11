class Interfaz {

    limpiarDiv(div) {
        const resultadoAnterior = document.querySelector(div)
        if (resultadoAnterior) {
            resultadoAnterior.remove()
        }
    }

    mostrarMensaje(mensaje, clases) {
        this.limpiarDiv('#resultado div')

        const div = document.createElement('div')

        div.className = clases
        div.appendChild(document.createTextNode(mensaje))

        const divMensaje = document.querySelector('.mensajes')
        divMensaje.appendChild(div)

        setTimeout(() => {
            document.querySelector('.mensajes div').remove()
        }, 3000)
    }

    MostrarResultado(resultado) {
        const pais = resultado.country
        const casosConfirmados = resultado.cases
        const casosMuertes = resultado.deaths
        const casosRecuperados = resultado.recovered
        const cantidadTests = resultado.totalTests

        const divResultado = ` <div><h2 class="tituloPais">${pais}</h2>
                     <h4>Casos: ${casosConfirmados} | Muertes: ${casosMuertes} <h4>
                     <h4>Recuperados: ${casosRecuperados} | Tests: ${cantidadTests} <h4></div>`

        if (pais === '' && casosConfirmados === '' && casosMuertes === '' && casosRecuperados === '' && cantidadTests === '') {
            mostrarOcultarSpinner('block')
        }
        const resultadoAnterior = document.querySelector('.mensajes div')
        if (resultadoAnterior) {
            limpiarDiv('.mensajes div')
        }

        document.getElementById('resultado').innerHTML = divResultado
    }

    mostrarOcultarSpinner(vista) {
        const spinner = document.querySelector('.contenido-spinner')
        spinner.style.display = vista
    }

    mostrarCasosPais(data) {

        const htmlCasosConfirmados = `<li>Confirmados : ${data.cases}</li>`
        const htmlCasosRecuperados = `<li>Recuperados : ${data.recovered}</li>`
        const htmlCasosMuertes = `<li>Muertes : ${data.deaths}</li>`
        const htmlCantidadTests = `<li>Tests : ${data.totalTests}</li>`
        const htmlCasosActivos = `<li>Activos : ${data.cases - data.recovered } </li>`
        const htmlCasosCriticos = `<li>Criticos: ${data.critical } </li>`

        document.getElementById('casoConfiramdos').innerHTML = htmlCasosConfirmados
        document.getElementById('casoRecuperados').innerHTML = htmlCasosRecuperados
        document.getElementById('casoMuertes').innerHTML = htmlCasosMuertes
        document.getElementById('casoTests').innerHTML = htmlCantidadTests
        document.getElementById('casosActivos').innerHTML = htmlCasosActivos
        document.getElementById('casoCriticos').innerHTML = htmlCasosCriticos
    }

}