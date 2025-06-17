/* 
1. Criar e Adicionar Valores ao Set: Crie um Set chamado frutas e
adicione nele três frutas diferentes. Depois, tente adicionar uma fruta
que já está no Set.
2. Verificar Valores no Set: Use o método has para verificar se uma fruta
específica está no seu Set frutas.
3. Remover Valores do Set: Use o método delete para remover uma fruta
do seu Set frutas.
4. Limpar o Set: Use o método clear para limpar todo o seu Set frutas.
5. Tamanho do Set: Crie um Set com vários valores e use a propriedade
size para imprimir o número de elementos no Set.
6. Iterar Sobre um Set: Use um loop for...of para iterar sobre o seu Set
e imprimir cada valor.
7. Criar um Set a Partir de um Array: Crie um array com alguns valores
duplicados. Em seguida, crie um Set a partir desse array para remover
as duplicatas.
*/

/* 01 */
let frutas = new Set();

frutas.add("Melancia");
frutas.add("Morango");
frutas.add("Abacate");

/* 02 */

console.log(frutas.has("Melancia"));

/* 03 */

frutas.delete("Melancia");

console.log(frutas.has("Melancia"));

/* 04 */

frutas.clear();

console.log(frutas.size);

/* 05 */

let jogadores = new Set();
jogadores.add("Cristiano Ronaldo");
jogadores.add("Cristiano");
jogadores.add("Messi");
jogadores.add("Neymar");
jogadores.add("Zidane");

console.log(jogadores.size);

/* 06 */

for(let nomes of jogadores){
    console.log("Jogador:", nomes)
}

/* 07 */ 

let numerosDuplicados = [1,1,1,2,3,4,5,6,7,6,6,7,7,7,10];

let numerosUnicos = new Set(numerosDuplicados);

console.log(numerosUnicos);

