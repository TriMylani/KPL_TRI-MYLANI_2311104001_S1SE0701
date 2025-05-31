// listeners/loggingListener.js
class LoggingListener {
    constructor(logFilename, message) {
        this.logFilename = logFilename;
        this.message = message;
    }

    update(filename) {
        console.log(`[LOG to ${this.logFilename}]: ${this.message.replace('%s', filename)}`);
    }
}

module.exports = LoggingListener;
