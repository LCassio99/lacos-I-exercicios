let conta = 0
let comer = prompt('Deseja comer mais uma coxinha? S/N')

while(comer.toUpperCase() === 'S'){

  conta += 2.5
  comer = prompt('Deseja comer mais uma coxinha? S/N')

}

console.log('Valor total da conta: R$ ' + conta.toFixed(2))
