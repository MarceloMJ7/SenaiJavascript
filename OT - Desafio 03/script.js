// Declarar uma variável qualquer, que receba um objeto vazio.

let qualquer = null;

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem
ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

let pessoa = {
  nome: "Marcelo",
  sobrenome: "Moura",
  sexo: "Masculino",
  idade: 29,
  altura: 1.87,
  peso: 85,
  andando: false,
  caminhouQuantosMetros: 0,
};

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O
método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez
que
for chamado.
*/

pessoa.fazerAniversario = function () {
  this.idade += 1;
};

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as
seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a
quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando
ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

pessoa.andar = function (quantidadeDeMetrosCaminhados) {
  this.caminhouQuantosMetros += quantidadeDeMetrosCaminhados;
  this.andando = "verdadeiro";
};

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o
valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

pessoa.parar = function () {
  this.andando = "Falso";
};

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

pessoa.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

pessoa.mostrarIdade = function () {
  return `${this.idade}`;
};

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

pessoa.mostrarPeso = function () {
  return `${this.peso}`;
};

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

pessoa.mostrarAltura = function () {
  return `${this.altura}`;
};

/*
Qual o nome completo da pessoa? (Use a instrução para responder e
comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.nomeCompleto(); //Marcelo Moura

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarIdade(); // 29

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarPeso(); //85

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarAltura(); //1.87

/*
Faça a `pessoa` fazer 3 aniversários.
*/

/* pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();
*/
/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

pessoa.mostrarIdade(); //32

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar`
3x,
com metragens diferentes passadas por parâmetro.
*/

pessoa.andar(5);
pessoa.andar(5);
pessoa.andar(5);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(pessoa.andando); //verdadeiro

/*
Se a pessoa ainda está andando, faça-a parar.
*/

pessoa.parar();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log(pessoa.andando); // falso

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e
comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log(pessoa.caminhouQuantosMetros); //15

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método
deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu
peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS]
metros!"
Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

pessoa.apresentacao = function () {
  let verificaSexo = this.sexo.toLowerCase() === "feminino" ? "a" : "o";
  let verificaIdade = this.idade === 1 ? "ano" : "anos";
  let verificaMetros =
    this.quantidadeDeMetrosCaminhados === 1 ? "metro" : "metros";
  return console.log(`Olá, eu sou ${verificaSexo} ${this.nomeCompleto()}, tenho ${
    this.idade
  } ${verificaIdade}, ${this.altura}, meu
peso é ${this.peso} kg e, só hoje, eu já caminhei ${this.caminhouQuantosMetros}
${verificaMetros}`);
};

pessoa.apresentacao();
