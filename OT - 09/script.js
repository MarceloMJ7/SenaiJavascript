/* 
1. Criar uma Classe Animal: Crie uma classe Animal com um construtor
que recebe o nome e o som que o animal faz. Adicione um método
falar que imprime o som do animal.
2. Classe Veículo com Método de Velocidade: Desenvolva uma classe
Veiculo com propriedades como marca, modelo e velocidadeMaxima.
Adicione um método descrever que imprime uma descrição do veículo.
3. Classe Estudante com Notas: Amplie a classe Estudante para incluir
um array de notas. Adicione um método calcularMedia que retorna a
média das notas.
4. Método Estático para Conversão de Temperatura: Na classe
Utilitario, adicione um método estático que converte temperatura de
Celsius para Fahrenheit.
5. Jogo Simples com Classe: Crie uma classe Jogo com um método
estático que gera um número aleatório e permite ao usuário adivinhar. O
método retorna se o usuário acertou ou não.
6. Classe ContaBancaria com Método de Saque: Na classe
ContaBancaria, adicione um método sacar que permite sacar um
valor do saldo, garantindo que o saldo não fique negativo.

*/

/* 01 */
class Animal {
    constructor(nome, som) {
        this.nome = nome;
        this.som = som;
    }
    falar() {
        console.log(`Som do animal: ${this.som}`);
    }
}

/* 02 */

class Veiculo {
    constructor(marca, modelo, velMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.velMaxima = velMaxima;
    }

    descricao() {
        console.log(`Descrição do Carro: ${this.marca}, ${this.modelo}, ${this.velMaxima}`)
    }
}

/* 03 */

class Estudante {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }

    calcularMedia() {
        if (this.notas.length === 0) {
            return 0;
        }
        let soma = 0;

        for (let notasBim of this.notas) {
            soma += notasBim;
        }

        return soma / this.notas.length;
    }
}

let estudante1 = new Estudante("Ronaldo", [10, 9, 10, 8]);

console.log(`A média final do aluno ${estudante1.nome} é: ${estudante1.calcularMedia()}`);

/* 04 */

class utilitario {
    static conversorTemp(Temperatura) {
        return (Temperatura * 9 / 5) + 32;
    }
}

/* 05 */

class Jogo {

   static numeroInteiroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static adivinhaNumero(numero) {
        const numeroSorteado = this.numeroInteiroAleatorio(0, 3);
    
        if (numero === numeroSorteado) {
            console.log(`Você acertou! O número sorteado foi: ${numeroSorteado}`);
        } else {
            console.log(`Você errou! O número correto era ${numeroSorteado}`);
        }
    }
}

Jogo.adivinhaNumero(2);

/* 06 */ 

class ContaBancaria{
    #saldo;
    constructor(saldoInicial){
        this.#saldo = saldoInicial;
    }

    getSaldo(valor){
        if(valor > this.#saldo){
            console.log("Você não tem saldo suficiente")
        }else{
            console.log("Saque efetuado com sucesso")
        }
    }
}

let pessoa = new ContaBancaria(10);

pessoa.getSaldo(10);