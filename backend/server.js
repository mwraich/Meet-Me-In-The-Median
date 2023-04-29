// Server setup
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const port = 8000;

app.get('/api', (req, res) => {
	res.json('I am a server, can I take your order?');
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
