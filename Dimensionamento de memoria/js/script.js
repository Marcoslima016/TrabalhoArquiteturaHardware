
var valorN = '';
var valorM = '';
var valorTotal = '';


//------------------------------------- INICIAR DIMENSIONAMENTO -------------------------------------

function startDim() {
  valorM = $("#valorM").val();
  valorN = $("#valorN").val();
  calcTotalMemoria();
}



//---------------------------------- CALCULAR TOTAL DE ARMAZENAMENTO -------------------------------

function calcTotalMemoria() {

  var totalMemoria = valorM * valorN;
  $("#resultadoTotal").val(totalMemoria);
  $("#resultadoN").val(valorN);
  $("#resultadoM").val(valorM);

  if (totalMemoria >= 1024) {
    totalMemoria = (totalMemoria / 8).toString();
    totalMemoriaL = totalMemoria.length; console.log("tamanho 1: " + totalMemoriaL);
    var totalMemoriaFinal = totalMemoria.replace(/[0]/g, '');
    console.log("*************" + totalMemoriaFinal);
    totalMemoriaL = totalMemoriaFinal.length; console.log("tamanho 2: " + totalMemoriaL);
    $("#resultadoTotal").val(totalMemoriaFinal + " MB");
  }

  calcE();

}

//------------------------------------ CALCULAR QTD DE ENDERECAMENTOS -------------------------------
var resultadoFinal;
function calcE() {

  valorN = $("#valorN").val();
  expoente = 1;
  var resultadExp = 0;

  while (resultadExp < valorN) {
    resultadExp = Math.pow(2, expoente);
    expoente++;
    console.log(expoente);

  }
  $("#resultadoE").val(expoente - 1);



};












