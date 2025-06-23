/* 
1. Criando uma Lista de Compras: Use o operador spread para combinar
dois arrays de itens de supermercado em uma lista de compras.
2. Atualizando um Perfil de Usuário: Crie um objeto usuario com
propriedades como nome e email. Use o operador spread para criar um
novo objeto com os dados do usuário e uma propriedade adicional
status.
3. Festa de Aniversário: Crie uma função que aceita um número variável
de nomes e os imprime como lista de convidados para uma festa de
aniversário, usando o operador spread para coletar os nomes.
4. Clonando um Array de Músicas: Dado um array de músicas, crie uma
cópia do array usando o operador spread. Altere um elemento no array
copiado e verifique se o array original permanece inalterado.
5. Mesclando Objetos com Informações Complementares: Crie dois
objetos, um com informações básicas de um filme (título e diretor) e
outro com informações complementares (ano e gênero). Use o operador
spread para mesclar esses objetos em um único objeto filme.
6. Criando um Menu de Restaurante Variável: Faça uma função criarMenu
que aceita vários itens (entradas, pratos principais, sobremesas) como
arrays e usa o operador spread para criar um único array de menu
*/

/* 01 */
let lista01 = ["Cerveja", "Carne", "Carvão"];
let lista02 = ["Macarrão", "Ovos", "Leite"];
let listaDeCompras = [...lista01, ...lista02];

console.log(listaDeCompras);

/* 02 */

let Usuario = {
    nome: 'Marcelo',
    email: 'underliine@hotmail.com'
}

let Usuario2 = {
    ...Usuario,
    status: 'Online'
}

console.log(Usuario2);

/* 03 */

function convidados(...nomes){
    console.log("Lista de convidados da festa:")
        for(let nomesDaFesta of nomes){
            console.log(" - " + nomesDaFesta);
        }
}

convidados("Marcelo", "Cristiano Ronaldo", "Neymar", "Messi");

/* 04 */

let musicas = ["Numb", "Faint", "Animal I have Become", "Sweet dreams"]
let musicas2 = [...musicas];

console.log(musicas2);


let musicas3 = ["2", "Faint", "Animal I have Become", "Sweet dreams"]
let musicas4 = [...musicas3];
console.log(musicas4);

/* 05 */

let filme = {
    titulo: 'Star Wars',
    Diretor: 'Não sei'
}

let filme2 = {
    ano: 1995,
    genero: 'ação'
}

let filmePrincipal = {
    ...filme,
    ...filme2
}

for(let propriedades in filmePrincipal){
    console.log(propriedades);
}

/* 06 */

function menuRestaurante(...menu){
    console.log("Menu do Restaurante:");
    for(let listaMenu of menu){
        console.log(" * " , listaMenu)
    }
}

menuRestaurante("Arroz", "Frango Assado", "Purê");
