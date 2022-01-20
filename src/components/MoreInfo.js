import React from 'react';

const MoreInfo = ({ showInfo, title, date, explanation, handleToggle }) => {
	const Show = () => {
		return (
			<div>
				<h2>{title}</h2>
				<p>{date}</p>
				<h3>{explanation}</h3>
			</div>
		);
	};
	const Hide = () => {
		return <div></div>;
	};

	return (
		<div className="moreInfo">
			<button className="btn-grad btn" onClick={handleToggle}>
				More Info
			</button>
			{showInfo ? <Show /> : <Hide />}
			<footer>This is the footer</footer>
		</div>
	);
};

export default MoreInfo;
