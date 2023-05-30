let numero = parseInt(prompt("Digite um número:"));

console.log("Tabuada do " + numero + ":");

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado);
}
