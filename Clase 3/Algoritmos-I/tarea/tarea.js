// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [];
  arr.push(1); 
  let resultado = num;
  while(resultado > 1) { 
    for (let i = 2; i<= num; i++) { 
        if(resultado % i === 0) {
          resultado = resultado / i; 
          arr.push(i);
          break; 
        }
    }
  }

  return arr;

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var aux;
  let n = array.length;

  for (let k = 1; k < n; k++) {
      for (let i = 0; i < (n - k); i++) {
          if (array[i] > array[i + 1]) {
              aux = array[i];
              array[i] = array[i + 1];
              array[i + 1] = aux;
          }
      }
  }

   return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  const l = array.length;
  let j, temp;

  for ( let i = 1; i < l; i++ ) {
    j = i;
    temp = array[ i ];
    while ( j > 0 && array[ j - 1 ] > temp ) {
      array[ j ] = array[ j - 1 ];
      j--;
    }
    array[ j ] = temp;
  }

  return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for ( let j = 0; j < array.length; ++j ) {
    let i = iMin = j;
    for ( ++i; i < array.length; ++i ) {
      ( array[ i ] < array[ iMin ] ) && ( iMin = i );
    }
    [ array[ j ], array[ iMin ] ] = [ array[ iMin ], array[ j ] ];
  }

  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
