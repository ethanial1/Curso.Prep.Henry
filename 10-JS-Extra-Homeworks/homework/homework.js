// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let newArray = [];

  for (let clave in objeto) {
    newArray.push([clave, objeto[clave]]);
  }

  return newArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  /*
  let alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","x","y","z"];
  var sum = 0;
  let resultado = {}

  for (let i = 0; i < alfabeto.length; i++) {
    for (let j = 0; j < string.length; j++) {
        if (alfabeto[i] === string[j]) {
            sum += 1;
        }
        
        if (sum > 0 ){
          resultado[alfabeto[i]] = sum;
        }
    }
    sum = 0;
  }

  return resultado;*/

  var obj = {}

  for (let i = 0; i < string.length; i++) {  
    if (Object.keys(obj).includes(string[i])) {
      obj[string[i]] = obj[string[i]] + 1
      continue;
    }
    obj[string[i]] = 1
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  let mayus = "",minus = "";

  for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i].toUpperCase()) mayus += s[i];
      else minus += s[i];
  }

  return mayus + minus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let acc = 0,aux;
  let nueva = "";

  str += " ";

  for(let i = 0; i < str.length; i++) {
      if(str[i] !== " ") acc += 1;
      else {
          aux = i;
          for (let j = 0; j < acc; j++) {
              nueva += str[aux-= 1];
          }
          acc = 0;
          nueva += str[i];
      }
  }

  return nueva.substring(0, nueva.length - 1);
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  /*
  Number.prototype.reverso = function() {
    return parseInt(this.toString().split('').reverse().join('')) * Math.sign(num);
  }

  if (numero === numero.reverso) {
    return "Es capicua";
  }
  return "No es capicua";*/

  let cadena= numero.toString();
  let cadenaInvertida = "";
	
  cadenaInvertida = cadena.split("").reverse().join("");
	if(cadena == cadenaInvertida){
        return "Es capicua"
  }
  return "No es capicua"

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let nueva = '';
  for (let index in cadena) {
    if (cadena[index] !== 'a' && cadena[index] !== 'b' && cadena[index] !== 'c') {
        nueva += cadena[index];
    }
  }

  return nueva;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let long = []

  for (let index in arr) {
      long.push(arr[index].length);
  }

  // ordenar el arreglo de longitudes
  long.sort();

  // recorrer en base al arreglo de longitudes
  let aux = "";
  let nueva = long.map(function(elemento) {
    for (let ind in arr) {
        if(elemento === arr[ind].length) {
            aux = arr[ind];
            arr.splice(ind,1);
            return aux;
        }
    }
  });

  return nueva;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  let intersection = arreglo1.filter(v => arreglo2.includes(v))

  return intersection;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

