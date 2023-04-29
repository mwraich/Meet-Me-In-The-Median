import './App.css';
import { useState } from 'react';

function App() {
	const [response, setResponse] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:8000/api', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await response.json();
			setResponse(data);
		} catch (error) {
			console.error('Error fetching result:', error);
		}
	};
	return (
		<div>
			<button onClick={handleSubmit}>Submit</button>
			{response !== null && <p>Response: {response}</p>}
		</div>
	);
}

export default App;
