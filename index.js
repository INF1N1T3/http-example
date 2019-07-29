const
	express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	urlencodedParser = bodyParser.urlencoded({extended: false});
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/index', (req, res) => {
	res.render('index');
});

app.post('/index', urlencodedParser, (req, res) => {
	if (!req.body) return res.sendStatus(400);
	console.log(req.body);
	res.render('index');
});

// app.get('/information', (req, res) => {
// 	res.sendFile(__dirname +  '/greet.html');
// });

// app.get('/:information/:id', (req, res) => {
// 	res.send(`ID is ${req.params.information}/${req.params.id}`);
// });

app.listen(3000);
