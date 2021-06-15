// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "tarea" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

function BinarySearchTree(data){ 
  this.value = data;
  this.left = null;
  this.right = null;
  this.hojas = 1;
  this.insert = function (data){
    if (data < this.value && this.left) {
      this.left.insert(data);
      
    } else if (data < this.value) {
      this.left = new BinarySearchTree(data);
    }

    if (data > this.value && this.right) {
      this.right.insert(data);
    } else if (data > this.value) {
      this.right = new BinarySearchTree(data);
    }
    
    this.hojas++;
  },
  this.contains = function (data){
    if (this.value === data) {
      return true;
    }

    if (data < this.value && this.left) {
      return this.left.contains(data);
    } else if (data > this.value && this.right) {
      return this.right.contains(data);
    } else {
      return false;
    }
  },
  this.depthFirstForEach = function (cb, type = 'in-order', node = null){
    if(!node){
      node = this;
    }
    
    if(type === 'in-order'){
      if(node.left){
        this.depthFirstForEach(cb, type, node.left);
      }
      cb(node.value);
      if(node.right){
        this.depthFirstForEach(cb, type, node.right);
      }
    }else if(type === 'pre-order'){  
      cb(node.value);
      if(node.left){
        this.depthFirstForEach(cb, type, node.left);
      }
      if(node.right){
        this.depthFirstForEach(cb, type, node.right);
      }
    }else if(type === 'post-order'){
      if(node.left){
        this.depthFirstForEach(cb, type, node.left);
      }
      if(node.right){
        this.depthFirstForEach(cb, type, node.right);
      }
      cb(node.value);
    }
  },
  this.breadthFirstForEach = function (cb, array=null){
    if(!array) {
      var array = [];
    }
    !!this.left && array.push(this.left);
    !!this.right && array.push(this.right);
    cb(this.value);
    !!array.length && array.shift().breadthFirstForEach(cb, array);
  },
  this.size = function (){
    return this.hojas;
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
