import ButtonC from '../button';
import Share from '../../assets/icons/share.svg';
import Like from '../../assets/icons/like.svg';
import Zoom from '../../assets/icons/Zoom.svg';

const TitleC = () => {
	const handleShare = () => {
		if (navigator.share) {
			navigator
				.share({
					title: 'CHANGAN CS55 PLUS',
					text: 'Descubre el nuevo SUV de Changan',
					url: window.location.href,
				})
				.then(() => console.log('Contenido compartido'))
				.catch((error) => console.error('Error al compartir:', error));
		} else {
			alert('La opción de compartir no está disponible en este navegador.');
		}
	};

	return (
		<>
			<div
				className="flex justify-between"
				style={{
					maxWidth: '110px',
				}}
			>
				<ButtonC
					className="cursor-pointer flex items-center justify-center w-12 h-12 button-blue-changan rounded-full text-white"
					Icon={Share}
					tooltipId="buttonshared"
					tooltipText="Compartir"
					onClick={handleShare}
				/>
				<ButtonC
					className="cursor-pointer  flex items-center justify-center w-12 h-12 button-blue-changan rounded-full text-white"
					Icon={Like}
					tooltipId="buttonlike"
					tooltipText="Me gusta"
				></ButtonC>
			</div>
			<h3 className="text-gray-changan open-sans-regular mt-2">CHANGAN SUV</h3>
			<h2 className="text-black-changan open-sans-bold">CS55 PLUS</h2>
			{/* <ButtonC
				className="cursor-pointer flex items-center justify-center w-12 h-12 button-blue-changan text-white button-rounded-changan  float-right"
				Icon={Zoom}
				classNameIcon="p-2"
				tooltipId="button-zoom"
				tooltipText="Ampliar imagen"
			></ButtonC> */}
		</>
	);
};

export default TitleC;
