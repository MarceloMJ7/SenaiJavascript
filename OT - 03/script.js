/*
1. Criando um loop: Crie um loop for que imprima números de 0 a 10.
2. Loop com condição: Crie um loop for que imprima somente números
ímpares de 0 a 20.
3. Usando while: Crie um loop while que imprima números de 0 a 10.
4. Interrompendo um loop: Crie um loop for que imprima números de 0 a
100, mas interrompa a execução quando chegar ao número 50.
5. Pulando uma iteração: Crie um loop for que imprima números de 0 a
20, mas pule a impressão do número 13.
6. Iterando um Array: Crie um array de nomes e use um loop for...of
para imprimir cada nome do array.

*/

/* 01 */

for (let i = 0; i < 11; i++) {
  console.log(i);
}

/* 02 */
for (let i = 0; i < 21; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

/* 03 */
let i = 0;
while (i < 11) {
  i++;
  console.log(i);
}

/* 04 */

for (let i = 0; i < 100; i++) {
  if (i === 50) {
    break;
  }
  console.log(i);
}

/* 05 */
for (let i = 0; i < 20; i++) {
  console.log(i);
  if (i === 12) {
    i++;
    continue;
  }
}

/* 06 */
let nomes = ["Marcelo", "Larissa", "Fernanda", "André", "Cristiano Ronaldo"];
for (let nomesArray of nomes) {
  console.log(nomesArray);
}
