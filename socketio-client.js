var socket = require('socket.io-client')('http://129.28.69.70:4096');
socket.on('connect', function () {
    console.log('connected')
});
socket.on('event', function (data) {
    console.log('receive a event')
});

socket.on('disconnect', function () {
    console.log('disconnected')
});


socket.on('blocks/change', function () {
    //    console.log('blocks change')
});

socket.on('transactions/change', function () {
    console.log('transactions change')
});

socket.on('dapps/ca962bcae9adee9c41f880404e5058451d0b67af6a526b06922b85aceb243788', function (data) {
    console.log('dapps message of my side chain received:' + JSON.stringify(data));
});