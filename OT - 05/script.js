/* 
1. Função que Calcula a Área de um Retângulo: Crie uma função que
calcula a área de um retângulo dado largura e altura.
2. Função para Verificar Número Par: Faça uma função que recebe um
número e retorna true se for par e false se for ímpar.
3. Converter Polegadas em Centímetros: Escreva uma função que
converte polegadas em centímetros.
4. IMC: Escreva uma função que calcula o Índice de Massa Corporal (IMC).
5. Maiúsculas para Minúsculas: Crie uma função que recebe uma string e
retorna a mesma string em letras minúsculas.
6. Crie uma arrow function chamada multiplicaPorDez que recebe um
número como parâmetro e retorna o valor multiplicado por 10.
*/

/* 01 */

let calculaArea = (base, altura) => base * altura;

console.log("A área total é de:", calculaArea())

/* 02 */ 

function verificaNumeroPar(numero){
    if(numero % 2 == 0){
        console.log("O número é par")
    }else{
        console.log("o número é ímpar")
    }
}

verificaNumeroPar();

/* 03 */

let conversorPolegadasCM = (polegadas) => polegadas * 2.54;

console.log("O valor de polegadas convertido para CM é de:", conversorPolegadasCM());

/* 04 */

let calculaImc = (peso, altura) => peso / (altura * altura);

console.log("Resultado do calculo de IMC:", calculaImc(85, 1.87))

/* 05 */

function maiusculaParaMinuscula(string){
    return string.toLowerCase();
}

console.log(maiusculaParaMinuscula("OLA"));

/* 06 */

let multiplica = (numero) => numero * 10;

console.log("O resultado do número multiplicado:", multiplica(10))