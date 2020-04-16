let xlabels = []
let xCasesConfirmed = []
let xCasesDeaths = []
let xCasesRecovered = []
chartIt()
async function chartIt(){
   await getData()

const ctx = document.getElementById('chart').getContext('2d');
console.log('estoy acá1');  

const myChart = new Chart(ctx, {
  type: 'line',
    data: {
        labels: xlabels,

        datasets: [{
            label: 'Casos Confirmado',
            data: xCasesConfirmed,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },{
            label: 'Muertes ',
            data: xCasesDeaths,
            backgroundColor: 'rgba(63, 127, 191, 0.2)',
            borderColor: 'rgba(63, 127, 191, 1)',
            borderWidth: 1
        },
        {
          label: 'Recuperados',
          data: xCasesRecovered,
          backgroundColor: 'rgba(36, 175, 24, 0.2)',
          borderColor: 'rgba(36, 175, 24, 1)',
          borderWidth: 1
      }
      ]
    },

});
}
async function getData(){

fetch("https://juan-colombo95.github.io/AppCodvid19/data/timeseriesArg.json")
  .then(response => response.json())
  .then(data => {
    data["Argentina"].forEach(({ date, confirmed, recovered, deaths }) =>{
        let active = confirmed - recovered - deaths
        xCasesConfirmed.push( confirmed)
        xCasesDeaths.push(deaths)
        xCasesRecovered.push(recovered)
        xlabels.push(date)
        console.log('estoy acá 2');  

    });
  });

}
