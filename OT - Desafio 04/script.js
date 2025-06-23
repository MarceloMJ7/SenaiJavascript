/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que
recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

let isTruthy = function (valor) {
  return !!valor;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(""));
console.log(isTruthy(0));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(NaN));
console.log(isTruthy(false));

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

console.log(isTruthy(true));
console.log(isTruthy(1));
console.log(isTruthy([]));
console.log(isTruthy("a"));
console.log(isTruthy({}));
console.log(isTruthy(-7));
console.log(isTruthy(Infinity));
console.log(isTruthy("0"));
console.log(isTruthy(new Date()));
console.log(isTruthy("false"));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

let carro = {
  marca: "Honda",
  modelo: "Sedan",
  placa: "asd15421",
  ano: 2025,
  cor: "Preto",
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0,
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = function (novaCor) {
  this.cor = novaCor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.getCor = function () {
  return this.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.getModelo = function () {
  return this.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.getMarca = function () {
  return this.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.getMarcaModelo = function () {
  return `Esse carro é um ${this.marca} ${this.modelo}`;
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro.
Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas
por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.adicionandoPessoas = function (quantidadeAdicionada) {
  if (this.quantidadePessoas + quantidadeAdicionada > this.assentos) {
    return `Não é possível adicionar mais pessoas. O carro só comporta ${this.assentos} pessoas no total.`;
  }
  let pessoasCarro = this.quantidadePessoas + quantidadeAdicionada; //Quantidade de pessoas no Carro atualmente
  this.quantidadePessoas = pessoasCarro;

  if (pessoasCarro >= this.assentos) {
    return `O carro já está lotado`;
  } else if (pessoasCarro < this.assentos) {
    let assentosDisponiveis = this.assentos - pessoasCarro; //Quantidade de assentos x pessoas no carro atualmente
    let pessoaOuPessoas = assentosDisponiveis === 1 ? "pessoa" : "pessoas";
    let cabemOuCabe = assentosDisponiveis === 1 ? "cabe" : "cabem";
    return `Só ${cabemOuCabe} mais ${assentosDisponiveis} ${pessoaOuPessoas}`;
  }
  this.quantidadePessoas = pessoasCarro;
  return `Quantidade de pessoas no carro é de ${this.quantidadePessoas}`;
};

carro.removendoPessoasCarro = function (pessoasRemovidas) {
  if (pessoasRemovidas >= this.quantidadePessoas) {
    this.quantidadePessoas = 0;
  } else {
    this.quantidadePessoas -= pessoasRemovidas;
  }

  let assentosDisponiveis = this.assentos - this.quantidadePessoas;
  let pessoaOuPessoas = assentosDisponiveis === 1 ? "pessoa" : "pessoas";

  return `O carro tem ${assentosDisponiveis} assentos disponíveis.`;
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas
abaixo,
utilize sempre o formato de invocação do método (ou chamada da
propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.
Qual a cor atual do carro?
*/

console.log(carro.cor); //Preto

// Mude a cor do carro para vermelho.

carro.cor = "Vermelho";

// E agora, qual a cor do carro?

console.log(carro.cor);

// Mude a cor do carro para verde musgo.

carro.cor = "Verde Musgo";

// E agora, qual a cor do carro?
console.log(carro.cor);

// Qual a marca e modelo do carro?
console.log(
  `A marca do carro é ${carro.getMarca()} e o modelo é ${carro.getModelo()}`
);

// Adicione 2 pessoas no carro.
console.log(carro.adicionandoPessoas(2));

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionandoPessoas(4));
console.log(carro.quantidadePessoas);

// Faça o carro encher.
console.log(carro.adicionandoPessoas(4)); //Nesse ponto já está cheio, o carro só comporta 5 pessoas no total, já adicionamos duas pessoas + 4 pessoas. na realidade não vamos conseguir adicionar essas 4 pessoas, apenas 3 delas.

// Tire 4 pessoas do carro.
console.log(carro.removendoPessoasCarro(4));
console.log(carro.quantidadePessoas);

// Adicione 10 pessoas no carro.
//Não é possível add 10 pessoas, o carro só suporta 5 pessoas no total
