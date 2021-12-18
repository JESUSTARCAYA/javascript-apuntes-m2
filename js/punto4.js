const num1 = prompt('ingrese un numero', '');
const num2 = prompt('ingrese otro numero', '');
const conv1 = parseFloat (num1) 
const conv2 = parseFloat (num2)
const suma = conv1 + conv2 ;
alert(`el numero es  ${suma.toFixed(2)}`)

//PAR RESUMUR CODIGO  UNSANDO TUFICSE alert(`el numero es  ${(parseFloat (num1)+parseFloat (num2)).toFixed(2)}`)