let frutasDoBrasil = ['Maçã', 'Banana', 'Laranja', 'Abacaxi', 'Morango'];

console.log('Ranking das strings:');

for (let i = 0; i < frutasDoBrasil.length; i++) {
  let ranking = (i + 1) + '. ' + frutasDoBrasil[i];
  console.log(ranking);
}
