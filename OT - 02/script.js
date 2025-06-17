/*Exercícios com arrays:
1. Adicionando Elementos a um Array: Declare um array chamado
animais e adicione três nomes de animais usando o método push.
2. Removendo o Primeiro Elemento do Array: A partir do array animais
criado anteriormente, remova o primeiro elemento usando shift e
imprima o array modificado.
3. Inserindo Elementos no Início do Array: Utilize o método unshift para
adicionar dois novos animais no início do array animais.
4. Alterando Elementos Específicos do Array: Mude o segundo elemento
do array animais para "girafa".
5. Usando Length para Contar Elementos: Declare um array frutas e
adicione algumas frutas a ele. Use length para imprimir o número total
de frutas no array.
6. Percorrendo um Array com Loop For: Utilize um loop for para percorrer
o array frutas criado e imprimir cada fruta individualmente.
*/

/* 01 */
let animais = [];
animais.push("Cavalo");
animais.push("Leão");
animais.push("Zebra");

/* 02 */
animais.shift();
console.log(animais);

/* 03 */
animais.unshift("Macaco");
animais.unshift("dog");
console.log(animais);

/* 04 */
animais[1] = "Gorila";
console.log(animais);

/* 05 */
let frutas = ["manga", "Uva", "Abacaxi", "Laranja", "Cenoura"];
console.log(animais.length);

/* 06 */

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
