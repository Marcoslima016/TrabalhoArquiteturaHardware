

var numero = 0;
var arrayBinario = [];
var resultado1;
var resultadoDivisao = 0;
var binario = '';


function base10ToBinario() {
    numero = $("#valorBase10").val();
    calcularBinario();
}

function calcularBinario() {
    resultado1 = numero % 2; console.log("modulo = " + resultado1);
    arrayBinario.push(resultado1);
    resultadoDivisao = (numero / 2) | 0; console.log("REsultado divisao = " + resultadoDivisao);
    numero = resultadoDivisao;
    var teste = arrayBinario[0];
    verificar();
}

function verificar() {
    if (resultadoDivisao >= 2) {
        calcularBinario();
    } else {
        somarArray();
    }
}

function somarArray() {
    console.log(arrayBinario.lenght);
    for (var i = 0, l = arrayBinario.length; i < l; i++) {
        console.log(arrayBinario[i]);
        console.log();
        binario = '' + arrayBinario[1];
        var invertido = arrayBinario.join(); console.log("**************************" + invertido);
        var invertido2 = invertido.split('').reverse().join('');
        var invertido3 = '1' + invertido2.replace(/[,]+/g, '');
        console.log("final: " + invertido3);
        $("#valorFinalBinario").val(invertido3);
    }
}











