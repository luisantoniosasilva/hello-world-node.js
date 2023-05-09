const { getHelloWorldMessage, getUserMessage } = require('../src/business/helloWorldUseCase');

describe('helloWorldUseCase', () => {
    it('should return the string "Hello World"', () => {
        const result = getHelloWorldMessage();
        expect(result).toBe('Hello World');
    });

    it('should return a non-empty string', () => {
        const result = getHelloWorldMessage();
        expect(result).toBeTruthy();
        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
    });

    it('should always return the string "Hello World"', () => {
        const result1 = getHelloWorldMessage();
        const result2 = getHelloWorldMessage();
        expect(result1).toBe('Hello World');
        expect(result2).toBe('Hello World');
    });
    
    it('should not return a different string', () => {
        const result = getHelloWorldMessage();
        expect(result).toBe('Hello World');
        expect(result).not.toBe('Hello');
        expect(result).not.toBe('World');
    });
      
    it('should return the given input string', () => {
        const input = 'OpenAI';
        const result = getUserMessage(input);
        expect(result).toBe(input);
    });

    it('should handle empty input and return an empty string', () => {
        const input = '';
        const result = getUserMessage(input);
        expect(result).toBe('');
    });

    it('should handle special characters in the input string', () => {
        const input = '@#$%';
        const result = getUserMessage(input);
        expect(result).toBe(input);
    });

    // Add more test cases to cover additional scenarios

});



/* 
Nesse código, importamos a função helloWorldUseCase do arquivo helloWorldUseCase.js. 
Em seguida, utilizamos o describe para agrupar os testes e o it para definir um caso 
de teste específico. Dentro do caso de teste, chamamos a função helloWorldUseCase e usamos o expect para verificar se o resultado é igual à string "Hello World".



*/