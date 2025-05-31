import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './preloader.css';

interface PreloaderCProps {
	percentage: number;
	lastLoadedImage?: string | null;
	loading: boolean;
}

const PreloaderC: React.FC<PreloaderCProps> = ({
	percentage,
	lastLoadedImage,
	loading,
}) => {
	if (!loading) return null;

	return (
		<div className="loading-screen">
			<div className="progress-wrapper">
				<CircularProgressbar
					value={percentage}
					text={`${Math.round(percentage)}%`}
					styles={buildStyles({
						textSize: '16px',
						pathColor: '#183E75',
						textColor: '#000',
						trailColor: '#eee',
					})}
				/>
				{lastLoadedImage && (
					<img
						src={lastLoadedImage}
						alt="Chagan cs55 plus"
						className="loading-image"
					/>
				)}
			</div>
		</div>
	);
};

export default PreloaderC;
