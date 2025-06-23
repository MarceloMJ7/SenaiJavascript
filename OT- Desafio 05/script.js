/*
Crie uma variável qualquer, que receba um array com alguns valores
aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

let carro = ["Camaro", "Civic", "Porsche", "Ferrari", "BMW"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function exibindoCarros(lista) {
  return lista;
}

exibindoCarros(carro);

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

let carros = exibindoCarros(carro);
console.log(carros[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores;
e o
segundo, um número. A função deve retornar o valor de um índice do array
que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o
número passado no
segundo parâmetro.
*/

let valores = [0, 3, 4, 7];

function retornandoValores(valor1, valor2) {
  return valor1[valor2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

let aleatorio = ["Nome", 7, true, false, "false"];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

for (let i = 0; i < carro.length; i++) {
  console.log(retornandoValores(carro, i));
}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome
do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
- `quantidadePaginas` - Number (quantidade de páginas)
- `autor` - String
- `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/


function book(livros){
  let nomesLivros = {
    harryPotter: {
      quantidadePaginas: 300,
      autor: 'J.K. Rowling',
      editora: 'Qualquer'
    },
    duna: {
      quantidadePaginas: 700,
      autor: 'Frank Patrick Herbert',
      editora: 'Loren'
    },
    eragon: {
      quantidadePaginas: 777,
      autor: 'Christopher Paolini',
      editora: 'ipson'
    }
  }
  if(livros == null){
    return nomesLivros
  }else{
    return nomesLivros[livros]
  }

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro
qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

let mostrandoPag = book("duna").quantidadePaginas;

console.log(`O livro Duna tem ${mostrandoPag} páginas`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer,
usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

let mostrandoAutor = book("eragon").autor;

console.log(`O autor do livro Eragon é ${mostrandoAutor}`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer,
usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

let mostrandoEditora = book("harryPotter").editora;

console.log(`O livro Harry Potter foi publicado pela editora ${mostrandoEditora}`);



