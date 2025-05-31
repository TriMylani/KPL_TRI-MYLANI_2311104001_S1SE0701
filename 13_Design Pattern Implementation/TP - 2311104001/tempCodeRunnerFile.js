// index.js
const Editor = require('./editor');
const LoggingListener = require('./listeners/loggingListener');
const EmailAlertsListener = require('./listeners/emailAlertsListener');

const editor = new Editor();

const logger = new LoggingListener(
    'log.txt',
    'Someone has opened the file: %s'
);
editor.events.subscribe('open', logger);

const emailAlerts = new EmailAlertsListener(
    'admin@example.com',
    'Someone has changed the file: %s'
);
editor.events.subscribe('save', emailAlerts);

// Simulasi bisnis
editor.openFile('artikel.txt');
editor.saveFile();
