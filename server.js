var app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    fs = require('fs');


app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");
});

// Pour envoyer 
app.get("/send",function(req,res){
	res.sendFile(__dirname+"/send.html");
});



// Quand le client se connecte
io.sockets.on("connection",function(socket){
	socket.emit("Message","Connexion réussi !");
	console.log("Un client arrive !");

	// Quand on a un texte a diffuser
	socket.on("MessageToBroadcast",function(message){
		socket.broadcast.emit("Message",message);
	});


});
server.listen(8080);
