const
	express = require('express'),
	app = express();
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
// 	res.sendFile(__dirname +  '/index.html');
// });

// app.get('/information', (req, res) => {
// 	res.sendFile(__dirname +  '/greet.html');
// });

// app.get('/:information/:id', (req, res) => {
// 	res.send(`ID is ${req.params.information}/${req.params.id}`);
// });

app.listen(3000);
