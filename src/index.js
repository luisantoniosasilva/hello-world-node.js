const express = require('express');
const { helloWorldController, userMessageController } = require('./controller/helloWorldController');

const app = express();
app.use(express.json());

app.get('/hello', helloWorldController);
app.post('/message', userMessageController);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


/* O arquivo index.js é o ponto de entrada do seu aplicativo.
Ele importa o controlador helloWorldßController do diretório controller.
Em seguida, define uma rota para o caminho raiz '/' e associa o controlador a essa rota.
Quando o cliente acessar essa rota, o controlador helloWorldController será acionado e enviará
a mensagem 'Hello World' como resposta. O servidor também é iniciado na porta 3000.

Com essa estrutura, temos a separação clara de responsabilidades.
O caso de uso é responsável por definir a lógica de negócio, o controlador lida com as
requisições e respostas HTTP, e o arquivo index.js é o ponto de entrada do aplicativo, onde
as rotas são definidas e o servidor é iniciado. 

Este é o ponto de entrada do aplicativo.
No início do arquivo, importamos o framework Express.js.
Em seguida, importamos o controlador helloWorldController do arquivo helloWorldController.js.
Criamos uma instância do servidor Express.js e a armazenamos na variável app.
Definimos uma rota para o caminho raiz '/' do servidor utilizando o método get do app.
Associamos o controlador helloWorldController à rota raiz. Isso significa que quando o cliente acessar o caminho raiz, o controlador será acionado.
Dentro do controlador, a mensagem 'Hello World' é obtida através do caso de uso e enviada como resposta para o cliente.
Finalmente, o servidor é iniciado na porta 3000 e uma mensagem é exibida no console para indicar que o servidor está em execução.

O que significa a linha const express = require('express');?
    Essa linha importa o módulo express, que é um framework web para Node.js, 
    permitindo que você crie aplicativos web e defina rotas e endpoints para lidar 
    com as requisições HTTP.

O que é o objeto app?
    O objeto app é uma instância do framework express. Ele representa o aplicativo 
    web que será executado e manipula as rotas e as requisições HTTP.

O que a função app.get('/', helloWorldController); faz?
    Essa linha define uma rota GET para a raiz ('/') do aplicativo. 
    Quando um cliente faz uma requisição GET para a raiz, o controlador helloWorldController 
    será acionado para processar essa requisição.

Por que é necessário chamar a função listen para iniciar o servidor?
    A função listen é usada para iniciar o servidor HTTP e fazê-lo escutar em uma determinada porta. 
    No exemplo dado, o servidor será iniciado na porta 3000. Isso permite que o aplicativo receba as 
    requisições HTTP e as processe.

Como eu posso iniciar o servidor e testar o aplicativo?
P   ara iniciar o servidor e testar o aplicativo, você pode executar o arquivo index.js 
    usando o Node.js. Após iniciar o servidor, você pode acessar http://localhost:3000/ em seu 
    navegador ou usar ferramentas como o Postman ou o cURL para fazer uma requisição GET para o 
    endpoint raiz e verificar se a resposta recebida é a mensagem "Hello World".


*/