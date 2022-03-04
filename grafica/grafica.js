 var lista = [];
 var lista_2 = [];



 function pintar(){

    var nombres = []
    var name = [];
    for (var i = 0; i < lista.length; i++) {
            nombres.push('nombre' + i)
            name.push('lista_2'+ i)
            }
    var ctx = document.getElementById('myChart').getContext('2d');
    var texto = document.getElementById()
    var chart = new Chart(ctx, {
    type: 'line',
    data:{
    datasets: [{
        data: lista,lista_2,
        backgroundColor: ['#111','#352'],
        label: 'Comparacion de navegadores'}],
        labels:nombres,name},
    options: {responsive: true}
    });
}

function request(){

    
    var req = new XMLHttpRequest();
    req.open('GET', 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m', false);
    req.send(null);
    if (req.status == 200)
        dump(req.responseText);
        let aux = JSON.parse(req.responseText);
    
        for (let i = 0; i < aux.length; i++) {
            lista.push(aux[i][3])
            lista_2.push(aux[i][5])
            
        }
    pintar() 
    
}