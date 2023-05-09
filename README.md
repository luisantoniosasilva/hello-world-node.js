# Hello World Node.js Project :wave:

Este é um projeto básico do Node.js que implementa uma simples API que retorna a string "Hello World". :rocket:

## Estrutura das Pastas :file_folder:

O projeto segue a seguinte estrutura de pastas:

- `src`: Contém o código-fonte principal do projeto. :computer:
  - `business`: Contém o caso de uso `helloWorldUseCase`, responsável por retornar a string "Hello World". :briefcase:
  - `controller`: Contém o controlador `helloWorldController`, responsável por lidar com as requisições e respostas HTTP. :raised_hands:
  - `framework`: Contém o arquivo `index.js`, que é o ponto de entrada do aplicativo, define as rotas e inicia o servidor Express. :globe_with_meridians:

- `test`: Contém os arquivos de teste relacionados ao projeto. :microscope:
  - `helloWorldUseCase.test.js`: Testa o caso de uso `helloWorldUseCase`. :white_check_mark:

## Executando o Projeto :arrow_forward:

Siga as instruções abaixo para executar o projeto em sua máquina local:

1. Clone este repositório para o seu ambiente local: :arrow_down:

```bash
git clone <URL DO REPOSITÓRIO>
```

2. Navegue até o diretório do projeto: :file_folder:

```bash
cd hello-world-nodejs
```

3. Instale as dependências do projeto: :package:

```bash
npm install
```

4. Execute o projeto: :rocket:

```bash
npm start
```

Isso iniciará o servidor e você poderá acessar a API em http://localhost:3000 no seu navegador ou em uma ferramenta como o Postman.

## Executando Testes :microscope:
Os testes automatizados podem ser executados usando o seguinte comando: :white_check_mark:

```bash
npm test
```

Isso iniciará a execução dos testes definidos no arquivo helloWorldUseCase.test.js e exibirá os resultados no terminal.

Certifique-se de ter executado o comando npm install anteriormente para instalar as dependências de teste.

Divirta-se codificando! :smiley: