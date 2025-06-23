/* Desafio 01
// Declarar uma variável chamada `myvar`, sem valor. 
 // Após declarada, atribua o valor 10 à variável `myvar`.*/

/* let myvar = null; */
let myvar = 10;

/* // Declare uma nova variável chamada `soma`, e adicione uma instrução
somando os valores 15 e 8. 
// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador
de soma abreviado
*/

let soma = 15 + 8;
soma += 1;

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando operador de multiplicação abreviado.

soma *= 3;

console.log(soma);

// Declare uma variável chamada `unisenai`, atribuindo à ela o valor booleano
// que representa `verdadeiro`.

let uinisenai = true;

// Declare uma variável chamada `comida` que recebe um array com os valores
//'arroz', 'feijão' e 'ovo'.

let comida = ["Arroz", "Feijão", "Ovo"];

// Digite a instrução que imprime o valor de 'feijao', que está na variável
//`comida`.

console.log(comida[1]);

// Digite o código que verifica se a variável `soma' é igual a variável `myvar`
//(testando também o tipo).

if (soma == myvar) {
  console.log("verdadeiro");
} else {
  console.log("Falso");
}

if (typeof soma === typeof myvar) {
  console.log("Variáveis tem o mesmo tipo");
} else {
  console.log("Variáveis tem o tipo diferente");
}

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável
//`soma`.

if (myvar <= soma) {
  console.log("Valor menor");
} else {
  console.log("Valor maior");
}

// Crie uma função chamada `divisao` que receba como parâmetro dois
//números, e retorne o resultado da divisão entre eles.

let div = (num1, num2) => num1 / num2;

// Invoque a função criada acima, passando os parâmetros 10 e 2.

console.log(div(10, 2));
