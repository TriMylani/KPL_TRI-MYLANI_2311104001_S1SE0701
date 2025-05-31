// eventManager.js
class EventManager {
    constructor() {
        this.listeners = new Map();
    }

    subscribe(eventType, listener) {
        if (!this.listeners.has(eventType)) {
            this.listeners.set(eventType, []);
        }
        this.listeners.get(eventType).push(listener);
    }

    unsubscribe(eventType, listener) {
        if (this.listeners.has(eventType)) {
            const index = this.listeners.get(eventType).indexOf(listener);
            if (index !== -1) {
                this.listeners.get(eventType).splice(index, 1);
            }
        }
    }

    notify(eventType, data) {
        if (this.listeners.has(eventType)) {
            this.listeners.get(eventType).forEach(listener => {
                listener.update(data);
            });
        }
    }
}

module.exports = EventManager;
