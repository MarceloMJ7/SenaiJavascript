/* 
Exercícios com condicionais
1) Classificação por Idade: Escreva um programa que classifica uma pessoa
em categorias de idade: 'criança' (menos de 13 anos), 'adolescente' (entre 13 e
17 anos), 'adulto' (entre 18 e 64 anos) e 'idoso' (65 anos ou mais). Use a
estrutura if/else/else if.
2) Jogo de Adivinhação com Switch: Desenvolva um jogo simples de
adivinhação onde o usuário tenta adivinhar um número entre 1 e 5. Use
switch para verificar a escolha e imprimir se acertou ou não.
3) Avaliação de Notas: Crie um programa que, dada uma nota de um aluno,
classifica a nota como 'Reprovado' (menos de 6), 'Recuperação' (entre 6 e 7),
ou 'Aprovado' (mais de 7). Use switch.
*/

/* 01 */
let idade = 65;
if (idade < 13) {
  console.log("Você é uma Criança");
} else if (idade <= 18) {
  console.log("Você é um Adolescente");
} else if (idade <= 64) {
  console.log("Você é um Adulto");
} else {
  console.log("Você é um Idoso");
}

/* 02 */
let numeroEscolhido = 2;
let numeroCorreto = 2;
switch (numeroEscolhido) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    if (numeroEscolhido == numeroCorreto) {
      console.log("Você acertou");
    } else {
      console.log("Você errou");
    }
}

/* 03 */

let notaAluno = 10;
if(notaAluno < 6){
  console.log("Aluno Reprovado")
}else if(notaAluno <= 7){
  console.log("Aluno de Recuperação")
}else{
  console.log("Aluno Aprovado")
}
