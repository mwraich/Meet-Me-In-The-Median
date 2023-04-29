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
			} else {
				setError('An error occurred while processing your request.');
			}
		} catch (error) {
			console.error('Error fetching result:', error);
			setError('An error occurred while connecting to the server.');
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
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
			{result !== null && <p>Result: {result.join(', ')}</p>}
			{error !== null && <p>{error}</p>}
		</div>
	);
}

export default App;
