const PriorityQueue = require('./fila');

describe('PriorityQueue', () => {
    let queue;

    beforeEach(() => {
        queue = new PriorityQueue();
    });
    
    test('O método enqueue deve adicionar itens corretamente.', () => {
        queue.enqueue({ name: 'Gato', priority: 1 });
        queue.enqueue({ name: 'Cachorro', priority: 4 });
        queue.enqueue({ name: 'Coelho', priority: 2 });
    
        expect(queue.getItems()).toEqual([
        { name: 'Gato', priority: 1 },
        { name: 'Coelho', priority: 2 },
        { name: 'Cachorro', priority: 4 }
        ]);
    });

    test('O método dequeue deve remover e retornar o item corretamente.', () => {
        queue.enqueue({ name: 'Gato', priority: 1 });
        queue.enqueue({ name: 'Cachorro', priority: 4 });
        
        expect(queue.dequeue()).toBe('Gato');
        expect(queue.getItems()).toEqual([{ name: 'Cachorro', priority: 4 }]);
    });

    test('O método front deve retornar o item correto', () => {
        queue.enqueue({ name: 'Gato', priority: 1 });
        queue.enqueue({ name: 'Cachorro', priority: 4 });

        expect(queue.front()).toBe('Gato');
        expect(queue.getItems()).toEqual([
        { name: 'Gato', priority: 1 },
        { name: 'Cachorro', priority: 4 }
        ]);
    });

    test('O método size deve retornar o número correto de itens na fila', () => {
        queue.enqueue({ name: 'Gato', priority: 1 });
        queue.enqueue({ name: 'Cachorro', priority: 4 });

        expect(queue.size()).toBe(2);
    });

    test('O método isEmpty deve retornar true se a lista estiver vazia.', () => {
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue({ name: 'Gato', priority: 1 });
        expect(queue.isEmpty()).toBe(false);
    });

    test('O método getItems deve retornar todos os itens da fila.', () => {
        queue.enqueue({ name: 'Gato', priority: 1 });
        queue.enqueue({ name: 'Cachorro', priority: 4 });

        expect(queue.getItems()).toEqual([
        { name: 'Gato', priority: 1 },
        { name: 'Cachorro', priority: 4 }
        ]);
    });
});