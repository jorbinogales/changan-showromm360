import ButtonC from '../button';
import Share from '../../assets/icons/share.svg';
import Like from '../../assets/icons/like.svg';
import Zoom from '../../assets/icons/Zoom.svg';

const TitleC = () => {
	return (
		<>
			<div
				className="flex justify-between"
				style={{
					maxWidth: '110px',
				}}
			>
				<ButtonC
					className="cursor-pointer 
                    flex items-center justify-center w-12 h-12 button-blue-changan rounded-full text-white"
					Icon={Share}
					tooltipId="button-shared"
					tooltipText="Compartir"
				></ButtonC>
				<ButtonC
					className="cursor-pointer 
                    flex items-center justify-center w-12 h-12 button-blue-changan rounded-full text-white"
					Icon={Like}
					tooltipId="button-like"
					tooltipText="Me gusta"
				></ButtonC>
			</div>
			<h3 className="text-gray-changan open-sans-regular mt-2">CHANGAN SUV</h3>
			<h2 className="text-black-changan open-sans-bold">CS55 PLUS</h2>
			<ButtonC
				className="cursor-pointer 
                    flex items-center justify-center w-12 h-12 button-blue-changan text-white button-rounded-changan  float-right"
				Icon={Zoom}
				classNameIcon="p-2"
				tooltipId="button-zoom"
				tooltipText="Ampliar imagen"
			></ButtonC>
		</>
	);
};

export default TitleC;
