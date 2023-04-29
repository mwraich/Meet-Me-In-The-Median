// Server setup
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 8000;


// Utils
const { getMedianPrime } = require('./utils/prime');


app.post('/api', (req, res) => {
	const number = parseInt(req.body.number);
	const result = getMedianPrime(number);

	res.json({ result });
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});