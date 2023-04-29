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

	if (isNaN(number) || number < 0) {
		return res
			.status(400)
			.json({
				error:
					'Oops, Something went wrong. Please make sure you submitted a valid number.',
			});
	}
	try {
		const result = getMedianPrime(number);

		res.json({ result });
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ error: 'An error occurred while processing your request.' });
	}
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
