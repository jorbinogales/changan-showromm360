import Cauchos from './../../assets/vehicles/cs55plus/components/cauchos.jpg';
import Luces from './../../assets/vehicles/cs55plus/components/luces.jpg';
import Capo from './../../assets/vehicles/cs55plus/components/capo.jpg';
import Ventanas from './../../assets/vehicles/cs55plus/components/ventanas.jpg';
import Tipo from './../../assets/vehicles/cs55plus/components/tipo.jpg';

const ids = ['caucho', 'retrovisor', 'parabrisas', 'luz'];

const hintsById: any = {
	caucho: {
		content:
			'Cuenta con un sistema de frenos antibloqueo, suspensión de alta calidad y control electrónico de estabilidad. Brindándote una mayor seguridad al conducir.',
		image: Cauchos,
	},
	retrovisor: {
		content:
			'Cuenta con una transmisión automática de 7 velocidades y que te permite elegir entre tres modos de conducción: Eco, Normal y Sport.',
		image: Tipo,
	},
	parabrisas: {
		content:
			'Posee un sistema de info entretenimiento de 12,3” con conectividad Bluetooth y Apple CarPlay. También un sistema de sonido Pioneer y control de clima automático.s',
		image: Ventanas,
	},
	luz: {
		content:
			'Su impresionante sistema de iluminación LED y diseño deportivo garantizan que siempre destaques, sin importar el camino que elijas.',
		image: Luces,
	},
};

const position: any = {
	'0000': [
		{ top: '40%', left: '28%', display: 'block' },
		{ top: '20%', left: '50%', display: 'block' },
		{ top: '10%', left: '55%', display: 'block' },
		{ top: '30%', left: '67%', display: 'block' },
	],
	'0004': [
		{ top: '40%', left: '25.5%', display: 'block' },
		{ top: '20%', left: '50.5%', display: 'block' },
		{ top: '10%', left: '55.5%', display: 'block' },
		{ top: '30%', left: '68.5%', display: 'block' },
	],
	'0008': [
		{ top: '40%', left: '26%', display: 'block' },
		{ top: '20%', left: '51%', display: 'block' },
		{ top: '10%', left: '56%', display: 'block' },
		{ top: '30%', left: '69%', display: 'block' },
	],
	'0012': [
		{ top: '40%', left: '26.5%', display: 'block' },
		{ top: '20%', left: '51.5%', display: 'block' },
		{ top: '10%', left: '56.5%', display: 'block' },
		{ top: '30%', left: '70.5%', display: 'block' },
	],
	'0016': [
		{ top: '40%', left: '27%', display: 'block' },
		{ top: '20%', left: '52%', display: 'block' },
		{ top: '10%', left: '57%', display: 'block' },
		{ top: '30%', left: '71%', display: 'block' },
	],
	'0020': [
		{ top: '40%', left: '27.5%', display: 'block' },
		{ top: '20%', left: '52.5%', display: 'block' },
		{ top: '10%', left: '57.5%', display: 'block' },
		{ top: '30%', left: '71.5%', display: 'block' },
	],
	'0024': [
		{ top: '40%', left: '28%', display: 'block' },
		{ top: '20%', left: '53%', display: 'block' },
		{ top: '10%', left: '58%', display: 'block' },
		{ top: '30%', left: '72%', display: 'block' },
	],
	'0028': [
		{ top: '40%', left: '28.5%', display: 'block' },
		{ top: '20%', left: '53.5%', display: 'block' },
		{ top: '10%', left: '58.5%', display: 'block' },
		{ top: '30%', left: '72.5%', display: 'block' },
	],
	'0032': [
		{ top: '40%', left: '28.5%', display: 'block' },
		{ top: '20%', left: '53.5%', display: 'block' },
		{ top: '10%', left: '58.5%', display: 'none' },
		{ top: '30%', left: '73.5%', display: 'block' },
	],
	'0036': [
		{ top: '40%', left: '29%', display: 'block' },
		{ top: '20%', left: '56%', display: 'block' },
		{ top: '10%', left: '59.5%', display: 'none' },
		{ top: '30%', left: '73.5%', display: 'block' },
	],

	'0040': [
		{ top: '40%', left: '29.5%', display: 'block' },
		{ top: '20%', left: '60%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '74.5%', display: 'block' },
	],
	'0044': [
		{ top: '40%', left: '31%', display: 'block' },
		{ top: '20%', left: '63.5%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '75.5%', display: 'block' },
	],
	'0048': [
		{ top: '40%', left: '37.5%', display: 'block' },
		{ top: '20%', left: '65.5%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '81.5%', display: 'none' },
	],
	'0052': [
		{ top: '40%', left: '40.5%', display: 'block' },
		{ top: '20%', left: '66%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '81.5%', display: 'none' },
	],
	'0056': [
		{ top: '40%', left: '42.5%', display: 'block' },
		{ top: '20%', left: '66.5%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '81.5%', display: 'none' },
	],
	'0060': [
		{ top: '40%', left: '50.5%', display: 'block' },
		{ top: '20%', left: '67%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '81.5%', display: 'none' },
	],
	'0064': [
		{ top: '40%', left: '52.5%', display: 'block' },
		{ top: '20%', left: '66%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '81.5%', display: 'none' },
	],
	'0068': [
		{ top: '40%', left: '50.5%', display: 'none' },
		{ top: '20%', left: '65%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '81.5%', display: 'none' },
	],
	'0072': [
		{ top: '40%', left: '49.5%', display: 'none' },
		{ top: '20%', left: '64%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '81.5%', display: 'none' },
	],
	'0076': [
		{ top: '40%', left: '49.5%', display: 'none' },
		{ top: '20%', left: '37%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '81.5%', display: 'none' },
	],
	'0080': [
		{ top: '40%', left: '49.5%', display: 'none' },
		{ top: '20%', left: '36%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '81.5%', display: 'none' },
	],
	'0084': [
		{ top: '40%', left: '49.5%', display: 'block' },
		{ top: '20%', left: '35%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '81.5%', display: 'none' },
	],
	'0088': [
		{ top: '40%', left: '55.5%', display: 'block' },
		{ top: '20%', left: '35%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '81.5%', display: 'none' },
	],
	'0092': [
		{ top: '40%', left: '59.5%', display: 'block' },
		{ top: '20%', left: '35%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '81.5%', display: 'none' },
	],
	'0096': [
		{ top: '40%', left: '65.5%', display: 'block' },
		{ top: '20%', left: '37%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '81.5%', display: 'none' },
	],
	'0100': [
		{ top: '40%', left: '66.5%', display: 'block' },
		{ top: '20%', left: '38%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '22.5%', display: 'block' },
	],
	'0104': [
		{ top: '40%', left: '68.5%', display: 'block' },
		{ top: '20%', left: '40%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '23.5%', display: 'block' },
	],
	'0108': [
		{ top: '40%', left: '69.5%', display: 'block' },
		{ top: '20%', left: '44%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '24.5%', display: 'block' },
	],
	'0112': [
		{ top: '40%', left: '70.5%', display: 'block' },
		{ top: '20%', left: '48%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '28.5%', display: 'block' },
	],
	'0116': [
		{ top: '40%', left: '73.5%', display: 'block' },
		{ top: '20%', left: '52%', display: 'block' },
		{ top: '10%', left: '60.5%', display: 'none' },
		{ top: '30%', left: '32.5%', display: 'block' },
	],
	'0120': [
		{ top: '40%', left: '70.5%', display: 'block' },
		{ top: '20%', left: '56%', display: 'block' },
		{ top: '10%', left: '45.5%', display: 'block' },
		{ top: '30%', left: '36.5%', display: 'block' },
	],
	'0124': [
		{ top: '40%', left: '66.5%', display: 'block' },
		{ top: '20%', left: '58%', display: 'block' },
		{ top: '10%', left: '46.5%', display: 'block' },
		{ top: '30%', left: '42%', display: 'block' },
	],
	'0128': [
		{ top: '40%', left: '66.5%', display: 'block' },
		{ top: '20%', left: '58%', display: 'block' },
		{ top: '10%', left: '47.5%', display: 'block' },
		{ top: '30%', left: '48.5%', display: 'block' },
	],
	'0132': [
		{ top: '40%', left: '66.5%', display: 'none' },
		{ top: '20%', left: '62%', display: 'block' },
		{ top: '10%', left: '48.5%', display: 'block' },
		{ top: '30%', left: '52.5%', display: 'block' },
	],
	'0136': [
		{ top: '40%', left: '66.5%', display: 'none' },
		{ top: '20%', left: '62%', display: 'block' },
		{ top: '10%', left: '48.5%', display: 'block' },
		{ top: '30%', left: '56.5%', display: 'block' },
	],
	'0140': [
		{ top: '40%', left: '66.5%', display: 'none' },
		{ top: '20%', left: '62%', display: 'block' },
		{ top: '10%', left: '52.5%', display: 'block' },
		{ top: '30%', left: '60.5%', display: 'block' },
	],
	'0144': [
		{ top: '40%', left: '66.5%', display: 'none' },
		{ top: '20%', left: '40%', display: 'block' },
		{ top: '10%', left: '54.5%', display: 'block' },
		{ top: '30%', left: '66.5%', display: 'block' },
	],
	'0148': [
		{ top: '40%', left: '66.5%', display: 'none' },
		{ top: '20%', left: '40%', display: 'block' },
		{ top: '10%', left: '54.5%', display: 'block' },
		{ top: '30%', left: '50.5%', display: 'block' },
	],
	'0152': [
		{ top: '40%', left: '66.5%', display: 'none' },
		{ top: '20%', left: '40%', display: 'block' },
		{ top: '10%', left: '56.5%', display: 'block' },
		{ top: '30%', left: '54.5%', display: 'block' },
	],
	'0156': [
		{ top: '40%', left: '30.5%', display: 'block' },
		{ top: '20%', left: '44%', display: 'block' },
		{ top: '10%', left: '56.5%', display: 'block' },
		{ top: '30%', left: '58.5%', display: 'block' },
	],
	'0160': [
		{ top: '40%', left: '32.5%', display: 'block' },
		{ top: '20%', left: '46%', display: 'block' },
		{ top: '10%', left: '58.5%', display: 'block' },
		{ top: '30%', left: '60.5%', display: 'block' },
	],
	'0164': [
		{ top: '40%', left: '32.5%', display: 'block' },
		{ top: '20%', left: '43%', display: 'block' },
		{ top: '10%', left: '56.5%', display: 'block' },
		{ top: '30%', left: '62.5%', display: 'block' },
	],
	'0168': [
		{ top: '40%', left: '30.5%', display: 'block' },
		{ top: '20%', left: '45%', display: 'block' },
		{ top: '10%', left: '55.5%', display: 'block' },
		{ top: '30%', left: '64.5%', display: 'block' },
	],
	'0172': [
		{ top: '40%', left: '29.5%', display: 'block' },
		{ top: '20%', left: '46%', display: 'block' },
		{ top: '10%', left: '55.5%', display: 'block' },
		{ top: '30%', left: '66.5%', display: 'block' },
	],
	'0176': [
		{ top: '40%', left: '29.5%', display: 'block' },
		{ top: '20%', left: '46%', display: 'block' },
		{ top: '10%', left: '55.5%', display: 'block' },
		{ top: '30%', left: '66.5%', display: 'block' },
	],
};

const highlightPositions: any = [];

for (const [key, posArray] of Object.entries<any>(position)) {
	highlightPositions[key] = posArray.map((pos: any, index: number) => {
		const id = ids[index] ?? `unknown-${index}`;
		const hint = hintsById[id] ?? { content: '', image: '' };
		return {
			...pos,
			id,
			hint,
		};
	});
}

console.log(highlightPositions);

export default highlightPositions;
