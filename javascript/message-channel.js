var channel = new MessageChannel();
channel.port1.onmessage = function (ev) {
  console.log("port1...", ev.data)
}
channel.port2.onmessage = function (ev) {
  console.log("port2...", ev.data)
}
channel.port1.postMessage('111'); // port2... 111
