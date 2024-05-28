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
     * Verifica se a fila está vazia.
     * @returns {boolean} - Retorna True se a fila estiver vazia, false caso contrário.
     */
    isEmpty() {
        return this.items.length === 0;
    }
}

module.exports = PriorityQueue;