import React, { useState, useRef } from 'react';
import TitleC from '../components/showcar/title';
import ArrowRoundedLeft from './../assets/icons/arrow_rounded_left.svg';
import ArrowRoundedRight from './../assets/icons/arrow_rounded_right.svg';
import DobleArrow from './../assets/icons/double-arrow.svg';
import IndicatorC from '../components/indicator/Indicator';
import FooterC from '../components/showcar/footer';
import './index.css';

const TOTAL_IMAGES = 180;
const STEP = 4;
const MAX_INDEX = TOTAL_IMAGES - STEP;

const formatNumber = (num: number) => String(num).padStart(4, '0');

const Showroom = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const startX = useRef<number | null>(null);

	const toggleSidebar = () => {
		setIsSidebarOpen((prev) => !prev);
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		startX.current = e.touches[0].clientX;
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (startX.current === null) return;
		const currentX = e.touches[0].clientX;
		const diffX = currentX - startX.current;

		if (Math.abs(diffX) > 20) {
			if (diffX > 0) {
				setCurrentIndex((prev) => (prev + STEP > MAX_INDEX ? 0 : prev + STEP));
			} else {
				setCurrentIndex((prev) => (prev - STEP < 0 ? MAX_INDEX : prev - STEP));
			}
			startX.current = currentX;
		}
	};

	const handleMouseDown = (e: React.MouseEvent) => {
		startX.current = e.clientX;
		window.addEventListener('mouseup', handleMouseUp);
		window.addEventListener('mousemove', handleMouseMove);
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (startX.current === null) return;
		const diffX = e.clientX - startX.current;

		if (Math.abs(diffX) > 20) {
			if (diffX > 0) {
				setCurrentIndex((prev) => (prev + STEP > MAX_INDEX ? 0 : prev + STEP));
			} else {
				setCurrentIndex((prev) => (prev - STEP < 0 ? MAX_INDEX : prev - STEP));
			}
			startX.current = e.clientX;
		}
	};

	const handleMouseUp = () => {
		startX.current = null;
		window.removeEventListener('mouseup', handleMouseUp);
		window.removeEventListener('mousemove', handleMouseMove);
	};

	const imageSrc = `/src/assets/vehicles/cs55plus/beige/${formatNumber(
		currentIndex
	)}.png`;

	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<div
				className={`sidebar transition-all duration-300 ${
					isSidebarOpen ? 'w-30' : 'w-0'
				} overflow-hidden`}
			>
				<div className="p-4">
					<p>Contenido del sidebar</p>
				</div>
			</div>

			{/* Contenido principal */}
			<div className="flex-1 p-4 transition-all duration-300 relative">
				{/* Botón abrir sidebar */}
				<button onClick={toggleSidebar} className="sidebar-button">
					<img src={DobleArrow} />
				</button>

				<div className="h-[90vh] mt-[5vh] mb-[5vh] flex justify-center items-center">
					<div className="max-w-7xl container relative">
						<TitleC />
						<div
							className="vehicle-box relative max-w-[1000px] flex m-auto"
							onTouchStart={handleTouchStart}
							onTouchMove={handleTouchMove}
							onMouseDown={handleMouseDown}
							style={{ userSelect: 'none', cursor: 'grab' }}
						>
							<img
								src={ArrowRoundedLeft}
								className="arrow-rounded-left arrow-blink"
								alt="Girar izquierda"
							/>
							<img
								src={imageSrc}
								className="vehiculo"
								alt="Vehículo"
								draggable={false}
							/>
							<img
								src={ArrowRoundedRight}
								className="arrow-rounded-right arrow-blink"
								alt="Girar derecha"
							/>
						</div>
						<IndicatorC />
						<FooterC />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Showroom;
