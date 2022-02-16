// nose si las debia comentar pero las comente igual por que era molesto que me
//saltara cada vez que hacia algo xd

// Tarea 1

// deneria de poner el sum en el return aun eso no lo tengo claro
/*
function numeros() {
  let num = [1, 2, 3, 4, 5];
  sum = 0;
  for (i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}

numeros();
*/

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
// tarea 4 nose si la hice bien por que decia que retorne un boleano
/*
function dosString(palabra, palabra2) {
  if (palabra.length === palabra2.length) {
    console.log(true);
  } else {
    console.log(false);
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
    console.log(true);
    return true;
  } else {
    console.log(false);
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
function elMasAlto() {
  const array = [4, 5, 4, 85, 105];
  mayor = 0;
  for (i = 0; i < array.length; i++) {
    if (mayor < array[i]) {
      mayor = array[i];
      console.log(mayor);
    }
  }
}

elMasAlto();
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
function arrayToString() {
  const laFuturaString = ["son", "las", "tres", "de", "manana"];
  const strin = laFuturaString.join(" ");
  console.log(strin);
  return strin;
}

arrayToString();
*/
// son las 3 de mañana y estoy en tu ventana
