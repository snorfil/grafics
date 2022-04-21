 var lista = [];
 var nombrePares = [];

 
 async function request(){
    var req = new XMLHttpRequest();
    var par = document.getElementsByTagName('h2')[0].innerText;
    
    await req.open('GET', 'https://api.binance.com/api/v3/klines?symbol='+par+'&interval=5m', false);
    req.send(null);
    if (req.status == 200)
        dump(req.responseText);
        let aux = JSON.parse(req.responseText);
    
        for (let i = 0; i < aux.length; i++) {
            lista.push(aux[i][3])
            //lista_2.push(aux[i][5])
            
        }
    pintar() 
    //pintarPrueba()
}
async function pares(){
    var req = new XMLHttpRequest();
    var par = document.getElementsByTagName('h2')[0].innerText;
    
    await req.open('GET', 'https://api.binance.com/api/v3/ticker/price', false);
    req.send(null);
    if (req.status == 200)
        dump(req.responseText);
        let aux = JSON.parse(req.responseText);
    
        for (let i = 0; i < aux.length; i++) {
            nombrePares.push(aux[i]['symbol'])  
        }

        var myParent = document.body;

    //Create array of options to be added

    //Create and append select list
    var selectList = document.getElementById("selector");
   

    //Create and append the options
    for (var i = 0; i < nombrePares.length; i++) {
        var option = document.createElement("option");
        option.value = nombrePares[i];
        option.text = nombrePares[i];
        selectList.appendChild(option);
    }

}
function crearDataset(){
    return 
}
function pintarPrueba(){
    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
      ];
    
      const data = {
        labels: labels,
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        },{
            label: 'My second dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(100, 20, 132)',
            data: [5, 15, 10, 4, 40, 40, 65],
          }]
      };
    
      const config = {
        type: 'line',
        data: data,
        options: {
            animation: true
        }
      };
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );

}

function pintar(){

    var nombres = []

    for (var i = 0; i < lista.length; i++) {
            nombres.push('' + i)
            }

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart
    (ctx, 
        {
    type: 'line',
    data:{
    datasets: [{
        data: lista,

        backgroundColor: ['#111'],
        label: 'index del dato:'}],
        labels:nombres},
    options: {responsive: false}
    });
    var intervalos = document.querySelectorAll('.intervalo');
 var titular = document.querySelector('#titular');

 for (var i = 0; i < intervalos.length; i++) {

   intervalos[i].addEventListener('click', function() {

     titular.innerText = this.innerText;
   });

 }
}







