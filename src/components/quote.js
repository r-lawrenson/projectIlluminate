import { useEffect, useState } from 'react';
import '../App.css';

const Quote = () => {
	const [quote, setQuote] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchQuote = async () => {
			try {
				const response = await fetch(
					'https://zenquotes.io/api/random',
				);
				if (!response.ok) {
					throw new Error(response.statusText);
				}

				const data = await response.json();
				setQuote(data);
			} catch (err) {
				setError('Could not fetch data');
				console.log(err.message);
			}
		};
		fetchQuote();
	}, []);

	return (
		<div>
			{quote.map((quotes, i) => (
                <div key={i}>
                    {error && <p>{error}</p>}
                    <h1>{quotes.q}</h1>
                    <h1>{quotes.a}</h1>
                </div>
            ))}
			
		</div>
	);
}

export default Quote;