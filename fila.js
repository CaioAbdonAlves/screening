class PriorityQueue {
    constructor() {
        this.items = [];
    }

    /**
     * Adiciona um item na fila com prioridade.
     * @param {Object} item - O item a ser adicionado na fila.
     * @param {string} item.name - Nome do item.
     * @param {number} item.priority - Propriedade do item. 
     */

    enqueue(item) {
        if (!item || typeof item.name !== 'string' || typeof item.priority !== 'number') {
            throw new Error('O item deve ter um nome e uma prioridade válida');
        }

        const index = this.items.findIndex((i) => i.priority > item.priority);
        if (index === -1) {
            this.items.push(item);
        } else {
            this.items.splice(index, 0, item);
        }
    }

    enqueueMultiple(items) {
        if (!Array.isArray(items)) {
            throw new Error('Deve ser fornecido um array de objetos (Itens)')
        }

        items.forEach((item) => this.enqueue(item));
    }

    /**
     * Remove e retorna o item da frente da fila.
     * @returns {string} - Nome do item removido.
     */
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('A fila está vazia.');
        }

        return this.items.shift().name;
    }

    /**
     * Retorna o item da frente da fila.
     * @returns {string} - Nome do item da frente.
     */
    front() {
        if (this.isEmpty()) {
            throw new Error('A fila está vazia.');
        }
        return this.items[0].name;
    }

    /**
     * Retorna todos os itens da fila.
     * @returns {Object[]} - Itens da fila.
     */
    getItems() {
        return this.items;
    }

    /**
     * Retorna a quantidade de itens na fila.
     * @returns {number} - Quantidade de itens na fila.
     */
    size() {
        return this.items.length;
    }

    /**
     * Verifica se a fila está vazia.
     * @returns {boolean} - Retorna True se a fila estiver vazia, false caso contrário.
     */
    isEmpty() {
        return this.items.length === 0;
    }
}

module.exports = PriorityQueue;

const items = [
  { name: 'Coelho', priority: 2 },
  { name: 'Vaca', priority: 2 },
  { name: 'Cachorro', priority: 4 }
]


// Exemplo de uso
const queue = new PriorityQueue();
queue.enqueueMultiple(items)
queue.enqueue({ name: 'Sapo', priority: 7 });
queue.enqueue({ name: 'Cachorro', priority: 4 });
queue.enqueue({ name: 'Coelho', priority: 2 });
queue.enqueue({ name: 'Vaca', priority: 3 });
queue.enqueue({ name: 'Papagaio', priority: 6 });
queue.enqueue({ name: 'Galinha', priority: 5 });
queue.enqueue({ name: 'Gato', priority: 1 });

console.log(queue.getItems());
console.log(queue.dequeue()); // Gato
console.log(queue.front()); // Coelho
console.log(queue.size()); // 6
console.log(queue.isEmpty()); // false
queue.enqueue({ name: 'Elefante', priority: 1 });
console.log(queue.getItems());