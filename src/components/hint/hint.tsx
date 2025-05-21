import React from 'react';
import './hint.css';

const HintC: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
	return (
		<div className="indicator-container" onClick={onClick}>
			<div className="pulse-ring"></div>
			<div className="indicator-core"></div>
		</div>
	);
};

export default HintC;
