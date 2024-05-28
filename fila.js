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
}

module.exports = PriorityQueue;