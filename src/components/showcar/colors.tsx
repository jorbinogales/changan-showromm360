import './colors.css';

export default function ColorsC() {
	return (
		<div className={`color-menu`}>
			<div className="color-content flex">
				<div className="w-1/2 menu p-4">
					<h3
						className="open-sans-bold"
						style={{
							marginTop: '100px',
						}}
					>
						Color
					</h3>
					<ul>
						<li></li>
					</ul>
				</div>
				<svg
					className="w-1/2 curve absolute left-0 top-0 h-full w-[350px]"
					viewBox="0 0 400 1000"
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M 0 0 
							C 200 0, 200 1000, 0 1000 
							L 0 0 Z"
						fill="white"
					/>
				</svg>
			</div>
		</div>
	);
}
