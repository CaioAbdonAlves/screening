const PriorityQueue = require('./fila');

describe('PriorityQueue', () => {
    let queue;

    beforeEach(() => {
        queue = new PriorityQueue();
    });
    
    test('O método enqueue deve adicionar itens corretamente', () => {
        queue.enqueue({ name: 'Gato', priority: 1 });
        queue.enqueue({ name: 'Cachorro', priority: 4 });
        queue.enqueue({ name: 'Coelho', priority: 2 });
    
        expect(queue.getItems()).toEqual([
        { name: 'Gato', priority: 1 },
        { name: 'Coelho', priority: 2 },
        { name: 'Cachorro', priority: 4 }
        ]);
    });
});