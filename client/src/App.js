import './App.css';
import { useState } from 'react';

function App() {
	const [number, setNumber] = useState('');
	const [result, setResult] = useState(null);
	const [error, setError] = useState(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:8000/api', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ number }),
			});
			if (response.ok) {
				const data = await response.json();
				setResult(data.result);
				setError(null);
			} else if (response.status === 400) {
				// not a number, or a negative number
				const data = await response.json();
				setError(data.error);
				setResult(null);
			} else {
				setError('An error occurred while processing your request.');
				setResult(null);
			}
		} catch (error) {
			console.error('Error fetching result:', error);
			setError('An error occurred while connecting to the server.');
		}
	};
	return (
		<div className="center">
			<h1>Meet Me In The Median</h1>
			<form className='medianForm' onSubmit={handleSubmit}>
				<label>
					Enter a number:
					<input
						type="number"
						value={number}
						onChange={(e) => setNumber(e.target.value)}
					/>
					<button type="submit">Submit</button>
				</label>
			</form>
			{result !== null && (
				<div>
					<h2>Your Median is: </h2>

					<p>Result: {result.length > 0 ? result.join(', ') : 'No Median'}</p>
				</div>
			)}
			{error !== null && <p className="error">{error}</p>}
		</div>
	);
}

export default App;
