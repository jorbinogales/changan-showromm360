import React, { useState, useEffect, useRef } from 'react';
import 'react-circular-progressbar/dist/styles.css';

import TitleC from '../components/showcar/title';
import ArrowRoundedLeft from './../assets/icons/arrow_rounded_left.svg';
import ArrowRoundedRight from './../assets/icons/arrow_rounded_right.svg';

import IndicatorC from '../components/indicator/Indicator';
import FooterC from '../components/showcar/footer';
import './index.css';
import WhatsAppButton from '../components/whatsapp/whatsapp';
import highlightPositions from '../components/hightlights/hightlights';
import HintC from '../components/hint/hint';
import PreloaderC from '../components/preloader/preloader';
import HintModalC from '../components/hint/hintModal';
import InformationC from '../components/information/information';

const TOTAL_IMAGES = 180;
const STEP = 4;
const MAX_INDEX = TOTAL_IMAGES - STEP;

const formatNumber = (num: number): any => String(num).padStart(4, '0');

const Showroom = () => {
	/* Modales */
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedHint, setSelectedHint] = useState<{
		content: string;
		imageUrl: any;
	} | null>(null);

	const [currentColor, setCurrenColor] = useState('white');
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isBouncing, setIsBouncing] = useState(false);

	/* Cargando imagenes */
	const [loadedCount, setLoadedCount] = useState(0);
	const [loading, setLoading] = useState(true);
	const [lastLoadedImage, setLastLoadedImage] = useState<string | null>(null);

	const startX = useRef<number | null>(null);

	const COLORS = ['black', 'beige', 'white', 'gray'];

	useEffect(() => {
		preloadImages(COLORS, (loaded, imgSrc) => {
			setLoadedCount((prev) => prev + STEP);
			setLastLoadedImage(imgSrc); // Guardamos la imagen cargada
		}).then(() => {
			setLoading(false);
		});
	}, []);

	const preloadImages = async (
		colors: string[],
		onProgress: (loaded: number, imgSrc: string) => void
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
							onProgress(i + STEP, src); // Ahora enviamos la src
							resolve();
						};
						img.onerror = () => resolve();
					})
				);
			}
		}

		await Promise.all(promises);
	};

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

	const handleMouseUp = () => {
		startX.current = null;
		window.removeEventListener('mouseup', handleMouseUp);
		window.removeEventListener('mousemove', handleMouseMove);
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

	// abrir modal
	const openModalInfo = (id: string) => {
		const hint = highlightPositions[formatNumber(currentIndex)]?.find(
			(p: any) => p.id === id
		);
		if (hint) {
			setSelectedHint({
				content:
					hint.hint.content || 'No hay información disponible para este hint.',
				imageUrl:
					hint.hint.image ||
					'https://changanvzla.com/wp-content/uploads/2024/10/camioneta-CS55-Plus-galeria2.jpg',
			});
			setIsModalOpen(true);
		}
	};

	const imageSrc = `/src/assets/vehicles/cs55plus/${currentColor}/${formatNumber(
		currentIndex
	)}.png`;

	const imgRef = useRef<HTMLImageElement | null>(null); //
	const [imgHeight, setImgHeight] = useState(0);

	useEffect(() => {
		if (imgRef.current) {
			setImgHeight(imgRef.current.offsetHeight);
		}
	}, [imageSrc]); // o cualquier dependencia que cambie el tamaño de la imagen

	useEffect(() => {
		const updateHeight = () => {
			if (imgRef.current) {
				setImgHeight(imgRef.current.offsetHeight);
			}
		};

		// Observador para cambios de tamaño
		const observer = new ResizeObserver(() => {
			updateHeight();
		});

		if (imgRef.current) {
			observer.observe(imgRef.current);
			// Fallback inicial por si ResizeObserver tarda
			setTimeout(updateHeight, 100);
		}

		// Cleanup
		return () => {
			if (imgRef.current) {
				observer.unobserve(imgRef.current);
			}
		};
	}, []);

	return (
		<>
			<PreloaderC
				percentage={percentage}
				lastLoadedImage={lastLoadedImage}
				loading={loading}
			/>
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
									ref={imgRef} // 👈 aquí
									src={imageSrc}
									className={`vehiculo ${isBouncing ? 'bounce' : ''}`}
									alt="Vehículo"
									draggable={false}
									onLoad={() => {
										// Captura la altura apenas la imagen carga
										if (imgRef.current) {
											setImgHeight(imgRef.current.offsetHeight);
										}
									}}
								/>
								<img
									src={ArrowRoundedRight}
									className="arrow-rounded-right arrow-blink"
									alt="Girar derecha"
								/>
								<div
									className={'vehiculo'}
									style={{
										position: 'absolute',
										margin: 'auto',
										right: 0,
										left: 0,
										height: imgHeight,
									}}
								>
									{highlightPositions[formatNumber(currentIndex)]?.map(
										(pos: any, idx: string) => (
											<div
												onClick={() => openModalInfo(pos.id)}
												key={idx}
												style={{
													position: 'absolute',
													top: pos.top,
													left: pos.left,
													display: pos.display,
													transform: 'translate(-50%, -50%)',
												}}
											>
												<HintC></HintC>
											</div>
										)
									)}
									<HintModalC
										isOpen={isModalOpen}
										setIsOpen={setIsModalOpen}
										content={selectedHint?.content}
										image={selectedHint?.imageUrl}
									/>
								</div>
							</div>

							<WhatsAppButton />
							<IndicatorC />
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
				<InformationC></InformationC>
			</div>
		</>
	);
};

export default Showroom;
