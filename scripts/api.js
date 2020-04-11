class Api {
    async obtenerCasosPais(pais) {
        const url = `https://coronavirus-19-api.herokuapp.com/countries/${pais}`

        const urlCasosPais = await fetch(url)
        let resultado
        console.log(url)

        await urlCasosPais.json()
            .then(data => {
                resultado = data
            })
        return {
            resultado
        }
    }

    async obtenerCasosMundial(estado) {
        const url = `https://coronavirus-19-api.herokuapp.com/all`

        const urlCasosTotal = await fetch(url)
        let resultado

        await urlCasosTotal.json()
            .then(data => {
                resultado = data
            })

        return {
            resultado
        }

    }

}