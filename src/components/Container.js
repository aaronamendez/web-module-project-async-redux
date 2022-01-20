import React from 'react';
import MoreInfo from './MoreInfo';

const Container = ({
	showInfo,
	image,
	title,
	date,
	explanation,
	handleToggle,
}) => {
	return (
		<div className="container">
			<h1>Nasa Photo Of The Day Fetcher</h1>
			<img src={image} alt="Nasa Picture Of The Day" />
			<MoreInfo
				showInfo={showInfo}
				title={title}
				date={date}
				explanation={explanation}
				handleToggle={handleToggle}
			/>
		</div>
	);
};

export default Container;
