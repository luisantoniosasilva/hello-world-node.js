const { helloWorldUseCase } = require('../src/business/helloWorldUseCase');

describe('helloWorldUseCase', () => {
  it('should return the string "Hello World"', () => {
    const result = helloWorldUseCase();
    expect(result).toBe('Hello World');
  });
});

/* 
Nesse código, importamos a função helloWorldUseCase do arquivo helloWorldUseCase.js. 
Em seguida, utilizamos o describe para agrupar os testes e o it para definir um caso 
de teste específico. Dentro do caso de teste, chamamos a função helloWorldUseCase e usamos 
o expect para verificar se o resultado é igual à string "Hello World".



*/