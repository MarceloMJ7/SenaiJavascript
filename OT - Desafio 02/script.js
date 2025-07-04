// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(num1, num2) {
  return num1 + num2;
}
// Declare uma variável que receba a invocação da função criada acima,
//passando dois números quaisquer por argumento, e somando `5` ao resultado
//retornado da função.

let resultadoFuncao = soma(7, 7);

resultadoFuncao += 5;
// Qual o valor atualizado dessa variável?

console.log(resultadoFuncao);

// Declare uma nova variável, sem valor

let novaVariavel = null;

//Crie uma função que adicione um valor à variável criada acima, e retorne a
//string: O valor da variável agora é VALOR. Onde VALOR é o novo valor da variável.

function atribundoValor(novoValor) {
  novaVariavel = novoValor;
  console.log(`O valor da variável agora é VALOR ${novaVariavel}`);
}

// Invoque a função criada acima.

atribundoValor("Marcelo");

// Qual o retorno da função? (Use comentários de bloco).
//O retorno da função agora é Marcelo

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função
deve retornar a string:
Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando
`2` ao resultado da multiplicação.
*/

function multiplicação(num1, num2, num3) {
  if (num1 == null || num2 == null || num3 == null) {
    console.log("Preencha todos os valores corretamente!");
  }
  return num1 * num2 * num3 + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.

multiplicação(1, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(multiplicação(3, 3, 5));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado);
// 47

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o
segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function somaNumeros(num1, num2, num3) {
  if (num1 == null && num2 == null && num3 == null) {
    return false;
  }
  if (num1 != null && num2 == null && num3 == null) {
    return num1;
  }
  if (num1 != null && num2 != null && num3 == null) {
    return num1 + num2;
  }
  if (num1 != null && num2 != null && num3 != null) {
    return (num1 + num2) / num3;
  }
  return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum
//argumento, com um, com dois e com três.) Coloque um comentário de linha
//ao lado da função com o resultado de cada invocação.

console.log(somaNumeros(1)); //1

console.log(somaNumeros(1, 3)); //4

console.log(somaNumeros(5, 7, 7)); // 1,71

console.log(somaNumeros()); //false
