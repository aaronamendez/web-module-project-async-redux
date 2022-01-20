import React from 'react';

const Container = ({ image }) => {
	return (
		<div className="container">
			<h1>Nasa Photo Of The Day Fetcher</h1>
			<img src={image} alt="Nasa Picture Of The Day" />

			<button>More Info</button>
		</div>
	);
};

export default Container;
