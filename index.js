const http = require('http');
const Game = require('./src/Game')
let app = http.createServer();

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
<<<<<<< HEAD
console.log('Node server running on port 3000'); 
=======
console.log('Node server running on port 3000');
const game = new Game()
game.start()
>>>>>>> d769e8dd9e36a23bde66167a4c6cdd03beedadde
