import React from 'react';
import Whatsapp from './../../assets/icons/whatsapp.svg';
import './whatsapp.css';

const WhatsAppButton = () => {
	return (
		<a
			href="https://api.whatsapp.com/send?phone=584245613817&text=%C2%A1Hola!%20%F0%9F%91%8B%0A*Les%20escribo%20desde%20la%20p%C3%A1gina%20de*%20**Showroom360**%20*porque%20estoy%20interesado%20en%20el%20veh%C3%ADculo*%20**CS55%20Plus**.%0AMe%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20caracter%C3%ADsticas%2C%20disponibilidad%20y%20opciones%20de%20financiamiento.%20%F0%9F%9A%97%E2%9C%A8%0A%C2%A1Muchas%20gracias!" // ← cambia por tu número en formato internacional sin símbolos
			className="whatsapp-buttom fixed right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg z-50"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="WhatsApp"
		>
			<img src={Whatsapp} />
		</a>
	);
};

export default WhatsAppButton;
