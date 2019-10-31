

function binarioToBase10() {
    var numeroBinario = $("#valorBinario").val(); //onsole.log("valor binario:" + numeroBinario);
    var arrayBinario = numeroBinario.split(''); //console.log("Array: " + arrayBinario);

    var potencia;
    var potencia = arrayBinario.length; console.log("tamanho: " + potencia);
    var potencia = potencia - 1;
    var resultado = 0;


    for (var i = 0, l = arrayBinario.length; i < l; i++) {
        console.log(arrayBinario[i]);
        var numAtual = arrayBinario[i];

        if (numAtual > 0) {
            resultado = resultado + (Math.pow(2, potencia)); console.log(resultado);
        }

        potencia = potencia - 1;
        $("#valorFinalBase10").val(resultado);
    }

};

