import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Navbar from './components/Navbar';
import Container from './components/Container';

const apiKey = 'OLxua1rUTwjx3jEX7OjGdQ1xCT7tkgT9CW8VgKDb';

function App() {
	const [state, setState] = useState({});

	useEffect(() => {
		console.log('useEffect Worked.');
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
			.then((res) => {
				setState(res.data);
			})
			.catch((err) => console.error(err));
	}, []);

	console.log(state);

	return (
		<div className="App">
			<Navbar />
			<Container image={state.url} />
		</div>
	);
}

export default App;
