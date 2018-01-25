const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/:string', (req, res) => {
	const string = req.params.string;
	const result = [...string].sort((a,b) => b > a).join('');
	
  res.send({ string, result });
});

app.get('*', (req,res) => {
	res.redirect('/');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('app has started!');
});