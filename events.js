var events = require('events');

var eventEmitter = new events.EventEmitter();

var myEventHandler = function(){
    console.log('I hear a Scream!')
};

eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream');