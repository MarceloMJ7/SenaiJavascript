/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual
qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do
campeonato,
e imprima o nome desse campeonato no console.
*/

let championship = "Campeonato Brasileiro";

console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5
elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes
devem
estar na ordem em que eles aparecem na tabela no momento da solução
desse
desafio.
*/

let teams = ["São Paulo", "Flamengo", "Santos", "Palmeiras", "Corinthians", "Vasco"];

console.log('Times que estão participando do campeonato:', teams);

/*
Crie uma função chamada `showTeamPosition` com as seguintes
características:
- A função deve receber um número por parâmetro;
- A função deve retornar a frase:
"O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
- Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o
time
que está nessa posição no array criado acima com os nomes dos times.
--------------
Dica: lembre-se que arrays começam no índice zero, então a posição
passada
deve ser sempre um número a mais que o índice do array ;)
--------------
- A função só deve retornar a frase acima somente se o time estiver entre
os 5 primeiros.
- Se não houver time para a posição passada, deve retornar a mensagem:
"Não temos a informação do time que está nessa posição."
*/

function showTeamPosition(numero) {
    if (numero > 4) {
        return 'Não temos a informação do time que está nessa posição.'
    }
    return `O time que está em ${numero + 1}º lugar é o ${teams[numero]}.`
}

console.log(showTeamPosition(3));

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando
a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/

console.log(showTeamPosition(0));
console.log(showTeamPosition(1));
console.log(showTeamPosition(2));
console.log(showTeamPosition(3));
console.log(showTeamPosition(4));
console.log(showTeamPosition(5));

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura
de
repetição "while".
*/

let numero = 20;
while (numero <= 30) {
    console.log(numero++)
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
- A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
- Escolha 5 cores que serão convertidas do nome da cor para o seu
equivalente hexadecimal (pode ser qualquer tom);
- Usando a estrutura switch, verifique se a cor passada por parâmetro é
algum hexa escolhido. Se for, retorne a frase:
"O hexadecimal para a cor [COR] é [HEXADECIMAL].";
- Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
a frase:
"Não temos o equivalente hexadecimal para [COR]."
*/

function convertToHex(cor) {
    let corString = ["Preto", "Roxo", "Vermelho", "Verde", "Branco", "Azul", "Cinza", "Amarelo"];
    let hexaCor = ["#000000", "#b846a9", "#fa0d0d", "#16f00e", "#fcfcfc", "#341da3", "#dedde0", "#edd51d"];
    let corLower = cor.toLowerCase();
    switch (corLower) {
        case "preto":
            return `O hexadecimal para a cor ${corString[0]} é ${hexaCor[0]}. `
            break;
        case "roxo":
            return `O hexadecimal para a cor ${corString[1]} é ${hexaCor[1]}. `
            break;
        case "vermelho":
            return `O hexadecimal para a cor ${corString[2]} é ${hexaCor[2]}. `
            break;
        case "verde":
            return `O hexadecimal para a cor ${corString[3]} é ${hexaCor[3]}. `
            break;
        case "branco":
            return `O hexadecimal para a cor ${corString[4]} é ${hexaCor[4]}. `
            break;
        case "azul":
            return `O hexadecimal para a cor ${corString[5]} é ${hexaCor[5]}. `
            break;
        case "cinza":
            return `O hexadecimal para a cor ${corString[6]} é ${hexaCor[6]}. `
            break;
        case "amarelo":
            return `O hexadecimal para a cor ${corString[7]} é ${hexaCor[7]}. `
            break;
        default:

            return `Não temos o equivalente hexadecimal para ${cor}.`
    }

}

console.log(convertToHex("branco escuro"));
console.log(convertToHex("preto"));
console.log(convertToHex("roxo"));
console.log(convertToHex("azul"));
console.log(convertToHex("branco"));
console.log(convertToHex("cinza"));
console.log(convertToHex("amarelo"));
console.log(convertToHex("vermelho"));
