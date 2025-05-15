import ButtonC from '../button';

import Interior from '../../assets/icons/interior.svg';

const FooterC = () => {
	return (
		<>
			<ButtonC
				className="cursor-pointer 
                    flex items-center justify-center w-12 h-12 button-blue-changan text-white button-rounded-changan"
				Icon={Interior}
				classNameIcon="p-2"
				tooltipId="button-inside"
				tooltipText="Entrar al vehículo"
			></ButtonC>
		</>
	);
};

export default FooterC;
