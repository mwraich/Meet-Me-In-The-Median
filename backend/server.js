// Server setup
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const port = 8000;

app.post('/api', (req, res) => {
	const number = parseInt(req.body.number);
	const result = getMedianPrime(number);

	res.json({ result });
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

const sieveOfEratosthenes = (n) => {
	const primes = [];
	const isPrime = new Array(n + 1).fill(true);

	isPrime[0] = false;
	isPrime[1] = false;

	for (let p = 2; p * p <= n; p++) {
		if (isPrime[p]) {
			for (let i = p * p; i <= n; i += p) {
				isPrime[i] = false;
			}
		}
	}
	for (let i = 2; i <= n; i++) {
		if (isPrime[i]) {
			primes.push(i);
		}
	}

	return primes;
};

const getMedian = (array) => {
	const length = array.length;
	const median = Math.floor(length / 2);
	if (array.length % 2 === 0) {
		return array.slice(median - 1, median + 1);
	} else {
		return array.slice(median, median + 1);
	}
};

const getMedianPrime = (number) => {
	const primes = sieveOfEratosthenes(number);
	return getMedian(primes);
};
