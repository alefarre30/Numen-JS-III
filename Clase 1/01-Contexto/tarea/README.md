
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiguen cual es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {      // PARAMETROS 8  9  10
  var x = 10;
  console.log(x);                //10 
  console.log(a);                //8
  var f = function(a, b, c) {
    b = a;        
    console.log(b);             //8   
    b = c;   
    var x = 5;
  }
  f(a,b,c);                     // PARAMETROS 8  9  10
  console.log(b);               // 9
}
c(8,9,10);
console.log(b);                 // 10
console.log(x);                 // 1
```

```javascript
console.log(bar);    //undefined
console.log(baz);    //undefined
foo();               //hola!
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Nahuel";
if(true) {
   var instructor = "Cristian";
}
console.log(instructor);   //Cristian
```

```javascript
var instructor = "Nahuel";
console.log(instructor);      //Nahuel
(function() {
   if(true) {
      var instructor = "Cristian";
      console.log(instructor);   //Cristian
   }
})();
console.log(instructor);   //Nahuel
```
```javascript
var instructor = "Nahuel";
let pm = "Cristian";
if (true) {
    var instructor = "Fernando";
    let pm = "Alejandra";
    console.log(instructor);        //Fernando
    console.log(pm);                //Alejandra
}
console.log(instructor);            //Fernando
console.log(pm);                    //Cristian
```
### Coerción de Datos

¿Qué crees que van dar estas operaciones?:

```javascript
6 / "3"        //2
"2" * "3"      //6
4 + 5 + "px"   //9px
"$" + 4 + 5    //$45
"4" - 2        //2
"4px" - 2      //NaN            
7 / 0          //Infinity
{}[0]          //undefined
parseInt("09") //9
5 && 2         //2
2 && 5         //5
5 || 0         //5
0 || 5         //5
[3]+[3]-[10]   //23   
3>2>1          //false
[] == ![]      //true

```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output que vemos en consola luego de ejecutar este código? Explicar porque es así:

La variable da undefined porque estoy mostrando la variable antes de su declaracion y definicion, 
en cambio la funcion puede ser llamada antes por el hoisting

```javascript
function test() {
   console.log(a);         //undefined
   console.log(foo());     //2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este:

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);   //NO SALE NADA
```


### This

¿Cuál es el output que vemos en consola luego de ejecutar esté código? Explicar porqué es así:

Porque asignarle a test el nombre del metodo del objeto prop este cambia su contexto, por lo que this deja 
de pertenecer al prop para pertenecer al contexto global en este caso fullname = "Juan Perez"

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Carlos Garcia',
   prop: {
      fullname: 'Pedro Guimenez',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden del ouput? ¿Por qué?

Porque primero salen los que no tienen setTimeout, estos ultimos quedan pendientes en una cola de tareas

```javascript
function printing() {
   console.log(1);                                    
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();

1
4
3
2

```
