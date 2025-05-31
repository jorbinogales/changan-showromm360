import React, { useState } from 'react';
import Auto1 from '../../assets/vehicles/cs55plus/components/auto1.png';
import Auto2 from '../../assets/vehicles/cs55plus/components/auto2.png';
import Auto3 from '../../assets/vehicles/cs55plus/components/auto3.png';

const InformationC = () => {
	const [activeTab, setActiveTab] = useState('motor');

	return (
		<div className="information bg-white grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4">
			{/* Parte izquierda: tabs */}
			<div className="p-4">
				<div className="mb-4 border-b border-gray-200">
					<h2 className="open-sans-bold">Ficha Técnica</h2>
					<ul
						className="flex flex-wrap -mb-px text-sm font-medium text-center"
						role="tablist"
					>
						<li className="me-2" role="presentation">
							<button
								className={`open-sans-bold inline-block p-4 border-b-2 rounded-t-lg ${
									activeTab === 'motor'
										? 'border-blue-600 text-primary-changan'
										: 'border-transparent text-gray-300'
								}`}
								id="profile-tab"
								type="button"
								role="tab"
								aria-controls="profile"
								aria-selected={activeTab === 'motor'}
								onClick={() => setActiveTab('motor')}
							>
								MOTOR
							</button>
						</li>
						<li className="me-2" role="presentation">
							<button
								className={`open-sans-bold inline-block p-4 border-b-2 rounded-t-lg ${
									activeTab === 'transmision'
										? 'border-blue-600 text-primary-changan'
										: 'border-transparent text-gray-300'
								}`}
								id="dashboard-tab"
								type="button"
								role="tab"
								aria-controls="dashboard"
								aria-selected={activeTab === 'transmision'}
								onClick={() => setActiveTab('transmision')}
							>
								TRANSMISIÓN
							</button>
						</li>
						<li className="me-2" role="presentation">
							<button
								className={`open-sans-bold inline-block p-4 border-b-2 rounded-t-lg ${
									activeTab === 'frenos'
										? 'border-blue-600 text-primary-changan'
										: 'border-transparent text-gray-300'
								}`}
								id="settings-tab"
								type="button"
								role="tab"
								aria-controls="settings"
								aria-selected={activeTab === 'frenos'}
								onClick={() => setActiveTab('frenos')}
							>
								FRENOS Y SUSPENSIÓN
							</button>
						</li>
					</ul>
				</div>
				<div id="default-tab-content">
					<div
						className={`p-4 rounded-lg bg-gray-50 ${
							activeTab === 'motor' ? 'block' : 'hidden'
						}`}
						id="profile"
						role="tabpanel"
						aria-labelledby="profile-tab"
					>
						<p className="text-sm text-gray-500 open-sans-regular ">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
							repudiandae eaque quae velit quod, commodi deleniti iste labore
							libero facere voluptate, sit rerum doloremque aut aliquam dicta
							ipsa enim atque!
						</p>
					</div>
					<div
						className={`p-4 rounded-lg bg-gray-50 ${
							activeTab === 'transmision' ? 'block' : 'hidden'
						}`}
						id="dashboard"
						role="tabpanel"
						aria-labelledby="dashboard-tab"
					>
						<p className="text-sm text-gray-500 open-sans-regular">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
							repudiandae eaque quae velit quod, commodi deleniti iste labore
							libero facere voluptate, sit rerum doloremque aut aliquam dicta
							ipsa enim atque!
						</p>
					</div>
					<div
						className={`p-4 rounded-lg bg-gray-50 ${
							activeTab === 'frenos' ? 'block' : 'hidden'
						}`}
						id="settings"
						role="tabpanel"
						aria-labelledby="settings-tab"
					>
						<p className="text-sm text-gray-500 open-sans-regular">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
							repudiandae eaque quae velit quod, commodi deleniti iste labore
							libero facere voluptate, sit rerum doloremque aut aliquam dicta
							ipsa enim atque!
						</p>
					</div>
				</div>
			</div>

			{/* Parte derecha: imágenes con grid 2 columnas arriba y 1 abajo span 2 */}
			<div className="p-4">
				<div className="grid grid-cols-2 gap-4">
					<div className="p-4">
						<img src={Auto3} alt="Auto3" className="w-full" />
					</div>

					<div className="p-4">
						<img src={Auto2} alt="Auto2" className="w-full" />
					</div>

					<div className="p-4 col-span-2">
						<img src={Auto1} alt="Auto1" className="w-full" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default InformationC;
