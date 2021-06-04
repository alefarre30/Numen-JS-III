function BinarioADecimal(num) {
  // tu codigo aca

  let numero = num.toString();
  let bitActual = "";
  let resultado = 0;
  let potencia = 0;

  for(let i = numero.length - 1; i >= 0; i--, potencia++){
    bitActual = Number(numero[i]) * Number(Math.pow(2,potencia));
    resultado += Number(bitActual);
  }

  return resultado;

}

function DecimalABinario(num) {
  // tu codigo aca

  let operacion = Math.floor(num/2);
  let resto = num%2;

  let cadenaBits = [];
  cadenaBits.push(resto);

  do{
    resto = operacion%2;
    operacion = Math.floor(operacion/2);
    cadenaBits.push(resto);
  }while(operacion!=0);

  return cadenaBits.reverse().toString().replaceAll(",", "");

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}