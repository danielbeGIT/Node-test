const debug = require('debug');
const express = require('express');
const app = express();

// const log = require('debug')('namespace');

// logger
// logger:2
// logger:3

// controller:pokemon_friends
// controller:pokemon_cards
// models:pokemon_friends

// Namespaces
// DEBUG=* (logging from all namespaces)
// DEBUG=*logger (logging from logger-namespace)
// DEBUG=*logger:1 (logging from logger:1-namespace)
// DEBUG=*logger:* (logging from all logger:-namespace)

const testLogger = debug('logger');
const testLogger2 = debug('logger:2');
const testLogger3 = debug('logger:3');

testLogger('This is my testLogger');
testLogger2('This is my testLogger 2');
testLogger3('This is my testLogger 3');

const log = debug('log');
log('test');
// log(app);
const person = {
    id: 12,
    name: "Martin",
    email: "martin@email.nu"
};

log(person);

// %o = log it twice
// %O = log it regularly
// %o = low in a row
// %s = string
// %d = number
// %j = json
// %% = to log out %

// Log it as json
// log("%j", person);

log("%p is my user", person);
debug.formatters.p = (p) => {
    return p.id;
};

log("%p is my user", person);