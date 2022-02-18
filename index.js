// nose si las debia comentar pero las comente igual por que era molesto que me
//saltara cada vez que hacia algo xd

// Tarea 1

function numeritos(array) {
  let esta = 0;
  for (let i = 0; i < array.length; i++) {
    esta += array[i];
  }
  return esta;
}

let algo = [1, 5, 5, 5, 5];

numeritos(algo);

// tarea 2
/*
function pitagoras() {
  const base = 18;
  const altura = 15;
  resultado = (base * altura) / 2;
  return resultado;
}

pitagoras();
*/
//  Tarea 3

// seguro existe otra manera de hacerlo pero solo se me ocurrio esta xd

/*function años() {
  let dias = prompt("ingrese la cantindad de dias para saber cuantos años son");
  if (dias > 365 && dias <= 729) {
    console.log(1);
  } else if (dias >= 730 && dias < 2159) {
    console.log(2);
  } else if (dias >= 2160) {
    console.log(6);
  }
}
años();*/
/*
function year() {
  let dia = prompt("ingrese la cantidad de dias");
  if (dia > Math.floor(365) && dia <= 3649) {
    alert("1 year");
  } else if (dia >= Math.ceil(3650)) {
    alert("10 year");
  } else {
    alert("it's not a year");
  }
}

year();
*/
/*
function dosString(palabra, palabra2) {
  if (palabra.length === palabra2.length) {
    return true;
  } else {
    return false;
  }
}

dosString("hola", "hola");
*/
// Tarea 5
/*
function darVuelta(string) {
  return string.split("").reverse().join("");
}

console.log(darVuelta("hola"));
*/
// tarea 6
// nose si seria la manera correcta pero solo se me ocurrio esta xd
/*
function divisible() {
  let numero = prompt("ingrese un numero para saber si es divisible entre 5");
  if (numero % 5 == 0) {
    return true;
  } else {
    return false;
  }
}

divisible();
*/
//tarea 7

/*
function firstMayus(mayus) {
  return mayus.charAt(0).toUpperCase() + mayus.slice(1);
}

console.log(firstMayus("buenas"));
*/

//tarea 8
/*
function elMasAlto(array) {
  for (let i = 0; i < array.length; i++) {
    array[i];
  }
  return array;
}

const elMayor = [100, 150, 1, 50, 7];
let max = Math.max(...elMayor);

elMasAlto(max);
*/
// tarea 9

/*
function firtsCharacter(first) {
  return first.slice(1);
}

console.log(firtsCharacter("tardes"));
*/

// tarea 10
/*
function toString(algo) {
  for (let i = 0; i < 1; i++) {
    console.log(algo);
  }
  return algo;
}

const fututeString = ["hola", "buenas", "noches"];
const muBien = fututeString.join(" ");
toString(muBien);
*/
