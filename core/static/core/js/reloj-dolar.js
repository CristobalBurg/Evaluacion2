function reloj() {
    var ahora = new Date();
    var dia = ahora.getDate();
    var mes = ahora.getMonth() + 1;
    var anno = ahora.getFullYear();
    var h = ahora.getHours();
    var m = ahora.getMinutes();
    var s = ahora.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('reloj').innerHTML =
        '<span class="badge badge-pill badge-info p-2">' + dia + "/" + mes + "/" + anno + " (" + h + ":" + m + ":" + s + "<i class='fa fa-clock text-white ml-1'></i>)</span>";
    setTimeout(reloj, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i; }
    return i;
}

var dolar = 0;
var euro = 0;


async function usdfunc(event) {
    var targetCurrency = event.target.value;

    var conversion;
    var valorPeso = document.converter.peso.value;

    switch (targetCurrency) {
        case "dolar":
            conversion = valorPeso / dolar;
            break;
        case "euro":
            conversion = valorPeso / euro;
            break;


    }

    var output = document.getElementById("output");
    output.innerHTML = "<span class='badge badge-pill badge-primary'> $" + valorPeso + " CLP = " + conversion.toFixed(2) + " " + targetCurrency + "</span>";

}

$(document).ready(function() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'https://mindicador.cl/api', true);
    xmlHttp.send();


    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data)
            dolar = data.dolar.valor;
            euro = data.euro.valor;

        }
    };
});