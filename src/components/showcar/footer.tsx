import { useState } from 'react';
import ButtonC from '../button';
import './footer.css';

import Interior from '../../assets/icons/interior.svg';
import Colors from '../../assets/icons/colors.svg';

const colorOptions = [
	{ name: 'white', code: '#ffff' },
	{ name: 'black', code: '#111111' },
	{ name: 'gray', code: '#3b3c44' },
	{ name: 'beige', code: '#b3b4b3' },
];

type FooterCProps = {
	onColorChange: (colorName: string) => void;
};

const FooterC = ({ onColorChange }: FooterCProps) => {
	const [showColors, setShowColors] = useState(false);
	const [activeColor, setActiveColor] = useState(colorOptions[0]);

	const toggleColors = () => setShowColors(!showColors);

	const selectColor = (color: any) => {
		setActiveColor(color);
		onColorChange(color.name); // ✅ Aquí informas al padre
	};

	return (
		<div className="flex items-center relative gap-2 mt-5">
			{/* Botón interior */}
			<ButtonC
				className="cursor-pointer flex items-center justify-center w-12 h-12 button-blue-changan text-white button-rounded-changan"
				Icon={Interior}
				classNameIcon="p-2"
				tooltipId="buttoninside"
				tooltipText="Entrar al vehículo"
			/>

			{/* Botón de colores */}
			<div className="relative flex items-center gap-1">
				<ButtonC
					className="cursor-pointer flex items-center justify-center w-12 h-12 button-blue-changan text-white button-rounded-changan"
					Icon={Colors}
					classNameIcon="p-1"
					tooltipId="buttoncolor"
					tooltipText="Cambiar color"
					onClick={toggleColors}
				/>

				{/* Menú de colores */}
				{showColors && (
					<div className="top-14 left-14p-2 flex gap-2 z-10">
						{colorOptions.map((color, index) => (
							<div
								key={color.code}
								title={color.name}
								className={`color-option ${
									activeColor.code === color.code ? 'selected' : ''
								} opacity-0 fade-in`}
								style={{
									backgroundColor: color.code,
									animationDelay: `${index * 100}ms`,
									animationFillMode: 'forwards',
								}}
								onClick={() => selectColor(color)}
							>
								{activeColor.code === color.code && (
									<span className="checkmark" aria-label="Color seleccionado">
										<svg viewBox="0 0 24 24" fill="none">
											<polyline points="20 6 9 17 4 12" />
										</svg>
									</span>
								)}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default FooterC;
