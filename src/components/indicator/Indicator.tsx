import Mouse from './../../assets/icons/mouse.svg';
import ArrowLeft from './../../assets/icons/arrow_left.svg';
import ArrowRight from './../../assets/icons/arrow_right.svg';

import './indicator.css';
import { useEffect, useState } from 'react';

type IndicatorCProps = {
	showPlay: () => void;
};

const IndicatorC = ({ showPlay }: IndicatorCProps) => {
	const [visible, setVisible] = useState(true);

	const handleClickMove = () => {
		setVisible(false);
		showPlay();
	};

	const handleMouseMove = () => {
		setTimeout(() => {
			setVisible(false);
			showPlay();
		}, 1000);
	};

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	useEffect(() => {
		window.addEventListener('click', handleClickMove);

		return () => {
			window.removeEventListener('click', handleClickMove);
		};
	}, []);

	return (
		<div
			className={`indicator-wrapper ${
				visible ? 'indicator-visible' : 'indicator-hidden'
			}`}
		>
			<div className="indicator-box justify-center">
				<p className="text-center open-sans-regular text-white-changan mt-5">
					ARRASTRA PARA ROTAR
				</p>
				<div className="flex items-center justify-center gap-5 relative w-40 m-auto mt-10">
					<img src={ArrowLeft} className="animate-left-arrow absolute" />
					<img src={Mouse} className="mouse" />
					<img src={ArrowRight} className="animate-right-arrow absolute" />
				</div>
			</div>
		</div>
	);
};

export default IndicatorC;
