const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



app.get('/api/:string', (req, res) => {
	console.log(req.params);
  res.send(req.params.string.split('').sort((a,b) => b > a).join(''));
});

app.get('*', (req,res) => {
	res.redirect('/');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('app has started!');
});