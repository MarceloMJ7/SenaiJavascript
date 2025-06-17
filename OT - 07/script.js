/* 
1. Criar e Adicionar Pares Chave-Valor no Map: Crie um Map chamado
livros e adicione nele três pares de chave-valor, onde a chave é o
título do livro e o valor é o autor.
2. Acessar Valor no Map: Acesse o valor associado a uma das chaves no
Map livros que você criou e imprima o nome do autor.
3. Iterar Sobre um Map: Use um loop for...of para iterar sobre o Map
livros e imprimir todos os pares chave-valor.
4. Usando Métodos do Map: size, delete, has: No seu Map livros, use o
método size para imprimir o número de livros, delete para remover um
livro pelo título e has para verificar se um livro ainda está no Map.
5. Map com Tipos de Chaves Diferentes: Crie um Map chamado colecao
que contém diferentes tipos de chaves (como string, number, object)
e seus respectivos valores.
*/

/* 01 */ 
let livros = new Map();
livros.set('Harry Potter', 'JK')
livros.set('Potter', 'Autora2')
livros.set('Harry', 'Autora')

/* 02 */
console.log(livros.get('Potter'))

/* 03 */

for([chave,valor] of livros){
    console.log(`${chave}: ${valor}`)
}

/* 04 */
console.log(livros.size);
livros.delete('Potter');
console.log(livros.has('Potter'))

/* 05 */
let objetoChave = { id: 1 };
let colecao = new Map();

colecao.set("nome", "Marcelo");        
colecao.set(123, "Número chave");      
colecao.set(objetoChave, "Objeto chave"); 
