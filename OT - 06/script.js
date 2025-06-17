/* 
1. Criar e Acessar um Objeto: Crie um objeto chamado carro com
propriedades como marca, modelo e ano. Em seguida, acesse e
imprima a propriedade modelo do objeto.
2. Adicionar e Modificar Propriedades de um Objeto: A partir do objeto
carro criado, adicione uma propriedade cor e modifique o ano do
carro. Imprima o objeto modificado.
3. Criar um Método em um Objeto: Crie um objeto chamado calculadora
com um método soma que aceite dois números e retorne a soma deles.
4. Iterar Sobre as Propriedades de um Objeto: Dado um objeto, use um
loop for...in para iterar sobre todas as suas propriedades e imprimir
cada uma delas.
5. Entendendo Referências de Objetos: Crie um objeto livro com
propriedades como titulo e autor. Em seguida, crie outra variável
que referencie o objeto livro e modifique a propriedade titulo.
Verifique se o objeto original foi alterado.
6. Usando Métodos Avançados de Objeto: Dado um objeto, use o método
Object.keys() para listar todas as chaves do objeto. Repita o
processo com Object.values() para listar todos os valores.
*/

/* 01 */

let carro = {
    marca: 'Honda',
    modelo: 'Sedan',
    ano: 2010
}

console.log("O modelo do carro é", carro.modelo)

/* 02 */ 

carro.cor = 'Azul';
carro.ano = 2025;

console.log("O ano do carro é", carro.ano, "e a cor do carro é", carro.cor)

/* 03 */

let calculadora = {
     calculadora: (num1, num2) => num1 + num2
}

console.log("O resultado da soma:" ,calculadora.calculadora(5,5))

/* 04 */ 

for(let propriedades in carro){
    console.log(propriedades)
}

/* 05 */
let livro = {
    titulo: 'lorem',
    autor: 'Ipsum'
}

for(let propriedades in livro){
    console.log(propriedades)
}

let livro2 = livro;
livro2.titulo = 'Harry Potter'

console.log("O titulo mudou para", livro2.titulo)

/* 06 */ 

console.log(Object.keys(carro))
console.log(Object.values(carro))