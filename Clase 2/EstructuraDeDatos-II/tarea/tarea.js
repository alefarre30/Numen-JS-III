// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular 
// de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function Node(data) {
  this.value = data;
  this.next = null;
}


function LinkedList() {

    this.head = null;
    this._length = 0;
    
    this.add = function (data) {
      var node = new Node(data),
      current = this.head;
      
      if (!current) {
          this.head = node;
          this._length++;
          return node;
      }
      
      while (current.next) {
          current = current.next;
      }
      current.next = node;
      this._length++;
      return node;
  }

  this.search = function (valor) {
    
    if(!this.head){
      return null;
    }
    
    let current = this.head;

    while(current.next){
      
      if(typeof valor === "function"){
        if(typeof current.value === "object" && valor(current.value)){
          return current.value;
        }else if(valor(current.value)){
          return current.value;
        }
      }else{
        if(current.value === valor){
          return current.value;
        }
      }
      
      current = current.next;
    }
    
    if(typeof valor === "function"){
      if(typeof current.value === "object" && valor(current.value)){
        return current.value;
      }else if(valor(current.value)){
        return current.value;
      }
    }else{
      if(current.value === valor){
        return current.value;
      }
    }
    
    return null;
  }
  
  this.remove = function () {
    
    if(!this.head){
      return null;
    }
    
    if(!this.head.next){
      let value = this.head.value;
      this.head = null;
      return value;
    }
    
    let current = this.head;
    let previous = this.head.next;
    
    while(current.next){
        previous = current;
        current = current.next;
    }
    
    
    this._length--;
    
    previous.next = null;
    
    return current.value;


  }

}

// Hash Table
// Una hash table contiene un arreglo de "contenedores" donde puede guardar información.
// Para guardar un valor asociado a una key (string):
//    - Correr la key a través de una función hash para transformarla a un número entero.
//    - Usar ese número como índice para ver en cuál contenedor guardarás el valor.
// Para buscar el valor por su key:
//    - Correr la key por la función hash para conseguir el número.
//    - Usar el número para buscar el contenedor donde está el valor.
//    - Devolver el valor.

function HashTable() {
  this.numBuckets = 35;
  this.buckets = new Array(this.numBuckets);

  this.hash = function (key){
    //return key.toString().length % this.numBuckets;
    
    const H   = 37;
    let total = 1;

    for (var i = 0; i < key.toString().length; i++) {
      total += H * total + key.toString().charCodeAt(i);
    }
    total %= this.buckets.length;
    if (total < 1) {
      this.buckets.length -1
    }
    return parseInt(total);
  }
  
  this.hasKey = function (key) {
    let index = this.hash(key);
    if(this.buckets[index]){
      return true;
    }

    return false;
  }

  this.set = function (key,value){
    
    if(typeof key !== "string"){
      throw new TypeError('Keys must be strings')
    }
    
    let index = this.hash(key);

    if(!this.buckets[index]){
      this.buckets[index] = [];
    }else{
      delete this.buckets[index];
      this.buckets[index] = [];
    }

    this.buckets[index].push([key,value])
    return index
 }

 this.get = function (key){
  let index = this.hash(key);
    if(!this.buckets[index])return null
        for(let bucket of this.buckets[index]){
          if(bucket [0] === key){
            return bucket [1]
          }
        }
  }

}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
