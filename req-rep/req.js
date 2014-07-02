var zmq = require("zmq");
var request = zmq.socket("req");

request.connect("tcp://127.0.0.1:5555");

setInterval(function() {
    console.log('sending: hello');
    var t = request.send("hello");
}, 1000);

request.on("message", function(msg) {
    console.log("Reply: " + msg.toString());
});
