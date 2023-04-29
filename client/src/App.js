import './App.css';
import { useState } from 'react';

function App() {
	const [number, setNumber] = useState('');
	const [result, setResult] = useState(null);
	const [error, setError] = useState(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		try {
			const response = await fetch('http://localhost:8000/api', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ number }),
			});
			const data = await response.json();
			setResult(data.result);
		} catch (error) {
			setError(
				'Oops, Something went wrong. Please make sure you submitted a valid number.',
			);
			console.error('Error fetching result:', error);
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
