//Create and Trigger Custom event in nodejs
const events = require("events");
const event = new events.EventEmitter();
event.on('click', () => console.log("First event created"));
event.emit('click');








$("#button").on('click', function() {
    console.log("First event created");

});