import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import TitleC from '../components/showcar/title';
import ArrowRoundedLeft from './../assets/icons/arrow_rounded_left.svg';
import ArrowRoundedRight from './../assets/icons/arrow_rounded_right.svg';
import Play from './../assets/icons/play.png';
import Stop from './../assets/icons/stop.svg';

import IndicatorC from '../components/indicator/Indicator';
import FooterC from '../components/showcar/footer';
import './index.css';
import WhatsAppButton from '../components/whatsapp/whatsapp';

const TOTAL_IMAGES = 180;
const STEP = 4;
const MAX_INDEX = TOTAL_IMAGES - STEP;

const formatNumber = (num: number) => String(num).padStart(4, '0');

const preloadImages = async (
	colors: string[],
	onProgress: (loaded: number) => void
) => {
	const promises: Promise<void>[] = [];

	for (const color of colors) {
		for (let i = 0; i < TOTAL_IMAGES; i += STEP) {
			const src = `/src/assets/vehicles/cs55plus/${color}/${formatNumber(
				i
			)}.png`;
			promises.push(
				new Promise((resolve) => {
					const img = new Image();
					img.src = src;
					img.onload = () => {
						onProgress(i + STEP);
						resolve();
					};
					img.onerror = () => resolve();
				})
			);
		}
	}

	await Promise.all(promises);
};

const Showroom = () => {
	const [currentColor, setCurrenColor] = useState('beige');
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isBouncing, setIsBouncing] = useState(false);

	/* Ocultar boton de play al arrastar */
	const [isDragging, setIsDragging] = useState(false);

	/* Rotacion automatica del vehiculo */
	const [isPlaying, setIsPlaying] = useState(false);
	const [showPlay, setShowPlay] = useState(false);
	const animationRef = useRef<number | null>(null);

	/* Cargando imagenes */
	const [loadedCount, setLoadedCount] = useState(0);
	const [loading, setLoading] = useState(true);

	const startX = useRef<number | null>(null);

	const COLORS = ['black', 'beige', 'white', 'gray'];

	useEffect(() => {
		preloadImages(COLORS, (loaded) => {
			setLoadedCount((prev) => prev + STEP);
		}).then(() => {
			setLoading(false);
		});
	}, []);

	const percentage = Math.min((loadedCount / TOTAL_IMAGES) * 100, 100);

	const changeColor = (color: string) => {
		setIsBouncing(true);
		setCurrenColor(color);
		// Quitar la clase bounce después de que termine la animación
		setTimeout(() => {
			setIsBouncing(false);
		}, 500); // Tiempo que coincide con la duración de la animación
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		setIsDragging(true);
		startX.current = e.touches[0].clientX;
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		setIsDragging(true);
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
		setIsDragging(false);
		startX.current = e.clientX;
		window.addEventListener('mouseup', handleMouseUp);
		window.addEventListener('mousemove', handleMouseMove);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
		startX.current = null;
		window.removeEventListener('mouseup', handleMouseUp);
		window.removeEventListener('mousemove', handleMouseMove);
	};

	const handleMouseMove = (e: MouseEvent) => {
		setIsDragging(true);
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

	const showPlaying = () => {
		setShowPlay(true);
	};

	/* Rotacion automatica del vehiculo */
	const lastFrameTime = useRef<number>(0);
	const ROTATION_DELAY = 150; // tiempo en milisegundos entre cada paso (ajusta esto si quieres más lento o rápido)
	const rotate = (time: number) => {
		if (time - lastFrameTime.current >= ROTATION_DELAY) {
			setCurrentIndex((prev) => (prev + STEP > MAX_INDEX ? 0 : prev + STEP));
			lastFrameTime.current = time;
		}
		animationRef.current = requestAnimationFrame(rotate);
	};

	const togglePlay = () => {
		console.log(isPlaying);
		if (isPlaying) {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
				animationRef.current = null;
			}
			setIsPlaying(false);
		} else {
			setIsPlaying(true);
			lastFrameTime.current = performance.now();
			animationRef.current = requestAnimationFrame(rotate);
		}
	};

	/* Rotacion automatica del vehiculo cuando se desmonte el componente */
	React.useEffect(() => {
		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, []);

	const imageSrc = `/src/assets/vehicles/cs55plus/${currentColor}/${formatNumber(
		currentIndex
	)}.png`;

	if (loading) {
		return (
			<div className="h-screen w-screen flex items-center justify-center">
				<div style={{ width: 120, height: 120 }}>
					<CircularProgressbar
						value={percentage}
						text={`${Math.round(percentage)}%`}
						styles={buildStyles({
							textSize: '16px',
							pathColor: '#ff0000',
							textColor: '#000',
							trailColor: '#eee',
						})}
					/>
				</div>
			</div>
		);
	}

	return (
		<>
			<div className="flex">
				{/* Contenido principal */}
				<div className="flex-1 p-4 transition-all duration-300 relative">
					{/* Botón abrir sidebar */}
					<div className="mb-[5vh] flex justify-center items-center">
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
									onClick={togglePlay}
									src={imageSrc}
									className={`vehiculo ${isBouncing ? 'bounce' : ''}`}
									alt="Vehículo"
									draggable={false}
								/>
								{!isPlaying && !isDragging && showPlay === true && (
									<img
										onClick={togglePlay}
										src={Play}
										className="fade-in absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full z-10 hover:scale-110 transition"
									/>
								)}
								{isPlaying && !isDragging && showPlay === true && (
									<img
										onClick={togglePlay}
										src={Stop}
										className="absolute top-1/2 left-1/2 w-10 h-10 opacity-25"
									/>
								)}

								<img
									src={ArrowRoundedRight}
									className="arrow-rounded-right arrow-blink"
									alt="Girar derecha"
								/>
							</div>
							<WhatsAppButton />
							<IndicatorC showPlay={showPlaying} />
							<FooterC onColorChange={changeColor} />
						</div>
					</div>
				</div>
			</div>
			<div className="wave relative overflow-hidden">
				<div className="custom-shape-divider-top-1747853131">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path
							d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
							className="shape-fill"
						></path>
					</svg>
				</div>
			</div>
			<div className="body-content">
				{/* <div className="information bg-white grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="bg-blue-200 p-4">Columna 1</div>
					<div className="bg-red-200 p-4">Columna 2</div>
				</div> */}
			</div>
		</>
	);
};

export default Showroom;
