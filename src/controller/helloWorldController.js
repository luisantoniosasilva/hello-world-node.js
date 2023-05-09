const { getHelloWorldMessage, getUserMessage } = require('../business/helloWorldUseCase');

function helloWorldController(req, res) {
  const message = getHelloWorldMessage();
  res.send(message);
}

function userMessageController(req, res) {
  const { message } = req.body;
  const response = getUserMessage(message);
  res.send(response);
}

module.exports = {
  helloWorldController,
  userMessageController,
};


/* O arquivo helloWorldController.js contém o controlador helloWorldController. 
Ele importa o caso de uso helloWorldUseCase do diretório business e chama essa f
unção para obter a mensagem 'Hello World'. Em seguida, a mensagem é enviada como 
resposta para o cliente. 

-> Neste arquivo, temos outra função chamada helloWorldController.
-> Essa função é responsável por lidar com as requisições e respostas HTTP.
-> No início do arquivo, importamos o caso de uso helloWorldUseCase do arquivo helloWorldUseCase.js.
-> Dentro da função helloWorldController, chamamos o caso de uso helloWorldUseCase 
para obter a mensagem 'Hello World'.
-> Em seguida, enviamos essa mensagem como resposta para o cliente.

O que significa a linha const { helloWorldUseCase } = require('../business/helloWorldUseCase');?
    Essa linha importa a função helloWorldUseCase do arquivo helloWorldUseCase.js localizado na pasta 
    business. O require é uma função do Node.js que permite importar módulos (arquivos) para uso no seu 
    código.

Por que o parâmetro req é passado para a função helloWorldController?
    O parâmetro req representa o objeto de solicitação HTTP. Ele contém informações sobre a requisição 
    feita pelo cliente, como os dados enviados e os cabeçalhos. O controlador precisa desse objeto para 
    acessar as informações da requisição e processá-las conforme necessário.

Por que o parâmetro res é passado para a função helloWorldController?
    O parâmetro res representa o objeto de resposta HTTP. Ele é usado para enviar uma resposta ao cliente 
    após o processamento da requisição. O controlador utiliza esse objeto para enviar a mensagem 
    de "Hello World" como resposta para o cliente.

O que a função helloWorldController faz?
    A função helloWorldController é responsável por processar uma requisição HTTP e enviar uma resposta ao 
    cliente. Ela chama a função helloWorldUseCase para obter a mensagem "Hello World" e, em seguida, 
    usa o objeto de resposta res para enviar essa mensagem de volta ao cliente.


*/