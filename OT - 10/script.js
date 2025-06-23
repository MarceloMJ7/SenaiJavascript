/* 
1. Criando um Convite: Use a concatenação de strings para criar um
convite. Inclua o nome do destinatário, o tipo de evento e a data, usando
variáveis.
2. Diário de Bordo: Escreva um pequeno diário de bordo usando template
literals, incluindo data, local e uma descrição do que aconteceu no dia.
3. Redator de Notícias: Crie uma string que represente uma notícia,
utilizando o método replace() para substituir um fato errado por um
correto.
4. Caixa de Comentários: Use o método trim() para limpar os
comentários dos usuários antes de publicá-los em um blog ou fórum.
5. Carta para um Amigo: Utilize \\n para formatar uma carta para um
amigo, com saudação, corpo da mensagem e despedida, cada um em
uma nova linha.
6. Citações Famosas: Crie uma string que inclua uma citação famosa de
uma pessoa, utilizando caracteres de escape para incluir aspas na
citação. 
*/

/* 01 */

let destinatario = "Cristiano Ronaldo";
let data = 25;

console.log(destinatario, "você está convidado para a nossa festa de aniversário no dia", data, "de agosto");

/* 02 */

let dia = 7;
let local = "Faculdade"

console.log(`No dia ${dia}, nossa turma da ${local}, tivemos um jogo de futebol e ganhamos de 5 a 0`);

/* 03 */
let noticia = "O Brasil venceu a Copa do Mundo de 2023.";
let noticiaCorrigida = noticia.replace("2023", "2026");

console.log(noticiaCorrigida);

/* 04 */
let comentariosEspacos = "   vamos torcer   "
let comentariosSemEspacos = comentariosEspacos.trim();

console.log(comentariosSemEspacos);

/* 05 */
let carta = "Olá, João!\n\nEspero que você esteja bem.\nQueria te contar que estou  aprendendo JavaScript e estou gostando bastante!\nVamos marcar um café essa semana pra conversar.\n\nAbraços,\nMarcelo";

console.log(carta);

/* 06 */
let citacao = "Albert Einstein uma vez disse: \"A imaginação é mais importante que o conhecimento.\"";

console.log(citacao);



