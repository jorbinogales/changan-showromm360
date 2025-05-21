import { useState } from 'react';
import './navbar.css';

const NavbarC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="p-4 font-play text-primary">
			<div className="max-w-[1300px] w-full mx-auto flex justify-between items-center">
				{/* Logo */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					id="Capa_2"
					data-name="Capa 2"
					viewBox="0 0 787.7 122.19"
					style={{
						maxWidth: '250px',
						fill: '#183e75',
					}}
				>
					<g id="Capa_1-2" data-name="Capa 1">
						<path
							className="cls-1"
							d="m70.05,0C12.05,0-3.19,21.11.52,62.6c3.72,41.57,18.83,59.58,69.53,59.58s65.8-18.02,69.53-59.58C143.3,21.12,128.06,0,70.05,0Zm66.41,62.32c-1.93,21.5-6.9,34.87-16.14,43.33-9.96,9.13-25.93,13.38-50.27,13.38s-40.31-4.25-50.27-13.38c-9.24-8.47-14.22-21.84-16.14-43.33-1.82-20.27,1.21-33.97,9.53-43.13C22.99,8.39,40.99,3.15,70.05,3.15s47.07,5.25,56.88,16.05c8.32,9.16,11.35,22.86,9.53,43.12ZM70.07,6.3C17.96,6.3,3.97,25.06,7.33,62.44c3.36,37.27,17.01,53.43,62.74,53.43s59.38-16.16,62.74-53.43c3.37-37.38-10.63-56.14-62.74-56.14Zm-5.82,103.86c-18.02-.64-30.09-4.24-37.72-11.22-7.75-7.08-11.94-18.5-13.61-37-1.56-17.33.93-28.92,7.83-36.48,3.74-4.1,9.08-7.23,16.04-9.46.35-.12.73.15.73.53v34.14c0,5.68,1.43,11.27,4.15,16.26l23.1,42.41c.21.37-.09.84-.51.82Zm4.59-38.68c-3.68-7.59-14.92-31.21-25.08-56.61-.13-.32.06-.69.4-.76,7.26-1.46,15.87-2.21,25.92-2.21s18.66.74,25.92,2.21c.34.07.53.44.4.76-10.16,25.4-21.4,49.02-25.08,56.61-.5,1.04-1.97,1.04-2.47,0Zm58.39-9.54c-1.67,18.5-5.86,29.92-13.61,37-7.63,6.98-19.71,10.58-37.72,11.22-.43.01-.72-.45-.51-.82l23.1-42.41c2.72-4.99,4.14-10.58,4.14-16.26V16.54c0-.38.37-.65.73-.53,6.96,2.23,12.3,5.37,16.04,9.46,6.9,7.55,9.39,19.14,7.83,36.48Zm49.54-1.4c0,22.58,11.19,31.68,37.77,31.68h29.08v-13.09h-26.38c-15.39,0-20.29-5-20.29-18.58,0-12.39,4.99-17.39,19.78-17.39h26.88v-13.09h-28.48c-25.98,0-38.37,9.69-38.37,30.48Zm138.6-7.4h-34.58v-23.08h-18.99v62.16h18.99v-25.48h34.58v25.48h18.89V30.06h-18.89v23.08Zm79.34-23.08h-21.08l-26.38,62.16h16.59l19.89-47.57c.6-1.5,1.7-1.5,2.4.1l20.79,47.46h20.69l-25.78-57.96c-1.4-3.2-3.4-4.2-7.09-4.2Zm103.92,34.48c0,1.3-1,1.8-1.9,1l-38.07-32.78c-2.6-2.3-4.5-2.7-8.49-2.7h-9.99v62.16h15.59v-34.87c0-1.1.8-1.4,1.6-.7l37.97,32.78c2.4,2.1,4.4,2.8,7.7,2.8h8.69c1.6,0,2.5-.9,2.5-2.5V30.06h-15.59v34.48Zm32.37-4.2c0,22.98,11.19,31.88,38.57,31.88h35.28c1.6,0,2.5-.9,2.5-2.5v-32.38c0-1.6-.9-2.5-2.5-2.5h-29.58v12.49h13.29c.7,0,1.2.5,1.2,1.2v9.39c0,.7-.5,1.2-1.2,1.2h-16.69c-16.09,0-20.68-2.3-20.68-18.79,0-14.99,4.8-17.29,20.19-17.29h35.97v-13.09l-37.17.1c-26.68,0-39.17,9.3-39.17,30.28Zm137.2-30.28h-21.08l-26.38,62.15h16.59l19.89-47.57c.6-1.5,1.7-1.5,2.4.1l20.79,47.46h20.69l-25.78-57.96c-1.4-3.2-3.4-4.2-7.1-4.2Zm103.92,0v34.47c0,1.3-1,1.8-1.9,1l-38.07-32.78c-2.6-2.3-4.5-2.7-8.49-2.7h-9.99v62.15h15.59v-34.87c0-1.1.8-1.4,1.6-.7l37.97,32.78c2.4,2.1,4.4,2.8,7.7,2.8h8.69c1.6,0,2.5-.9,2.5-2.5V30.07h-15.59Z"
						></path>
					</g>
				</svg>

				{/* Botón hamburguesa (solo en móviles) */}
				<button
					className="md:hidden text-primary-changan"
					onClick={() => setIsOpen(!isOpen)}
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>

				{/* Menú en pantallas grandes */}
				<ul className="hidden md:flex space-x-6">
					{[
						'Inicio',
						'Descubre Changan',
						'Vehículos',
						'Concesionarios',
						'Contacto',
					].map((item) => (
						<li key={item}>
							<p className="cursor-pointer hover:underline text-primary-changan play-bold">
								{item}
							</p>
						</li>
					))}
				</ul>
			</div>

			{/* Sidebar (drawer) responsive */}
			<div
				className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				} transition-transform duration-300 ease-in-out`}
			>
				<div className="flex justify-end p-4">
					<button onClick={() => setIsOpen(false)}>
						<svg
							className="w-6 h-6 text-primary-changan"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				<ul className="flex flex-col space-y-4 p-6">
					{[
						'Inicio',
						'Descubre Changan',
						'Vehículos',
						'Concesionarios',
						'Contacto',
					].map((item) => (
						<li key={item}>
							<p
								className="cursor-pointer text-primary-changan play-regular"
								onClick={() => setIsOpen(false)}
							>
								{item}
							</p>
						</li>
					))}
				</ul>
			</div>

			{/* Fondo oscuro al abrir el sidebar */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black opacity-30 z-40"
					onClick={() => setIsOpen(false)}
				/>
			)}
		</nav>
	);
};

export default NavbarC;
