// listeners/emailAlertsListener.js
class EmailAlertsListener {
    constructor(email, message) {
        this.email = email;
        this.message = message;
    }

    update(filename) {
        console.log(`[EMAIL to ${this.email}]: ${this.message.replace('%s', filename)}`);
    }
}

module.exports = EmailAlertsListener;
