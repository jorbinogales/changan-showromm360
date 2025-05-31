import { AnimatePresence, motion } from 'framer-motion';

interface HintModalProps {
	isOpen: boolean;
	setIsOpen: (val: boolean) => void;
	content?: string;
	image?: any;
}

const HintModalC: React.FC<HintModalProps> = ({
	isOpen,
	setIsOpen,
	content,
	image,
}) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setIsOpen(false)}
					className="bg-black/40 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
				>
					<motion.div
						initial={{ scale: 0.95, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.95, opacity: 0 }}
						onClick={(e) => e.stopPropagation()}
						className="bg-white text-black p-0 rounded-lg w-full max-w-4xl shadow-xl cursor-default relative overflow-hidden h-[500px] md:h-[400px]"
					>
						<div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] h-full">
							{/* Sección izquierda: imagen */}
							<div className="h-full w-full">
								<img
									src={image}
									alt="Hint ilustración"
									className="w-full h-full object-cover"
								/>
							</div>

							{/* Sección derecha: contenido */}
							<div className="p-6 flex flex-col justify-between h-full">
								<div>
									<h3 className="text-2xl font-bold mb-2 open-sans-regular text-center">
										{content}
									</h3>
								</div>

								<div className="flex justify-end">
									<button
										onClick={() => setIsOpen(false)}
										className="button-blue-changan  text-white cursor-pointer bg-gray-200 hover:bg-gray-300 text-black font-medium px-4 py-2 rounded"
									>
										Cerrar
									</button>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default HintModalC;
