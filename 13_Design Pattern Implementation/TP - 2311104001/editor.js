// editor.js
const EventManager = require('./eventManager');

class Editor {
    constructor() {
        this.events = new EventManager();
        this.file = null;
    }

    openFile(path) {
        this.file = { name: path };
        this.events.notify('open', this.file.name);
    }

    saveFile() {
        if (this.file) {
            // Simulasi menulis file
            console.log(`File "${this.file.name}" saved.`);
            this.events.notify('save', this.file.name);
        }
    }
}

module.exports = Editor;
