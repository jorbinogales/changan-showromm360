type ButtonProps = {
	Icon?: any;
	className?: string;
	classNameIcon?: string;
	tooltipId?: string;
	tooltipText?: string;
	onClick?: () => void; // ✅ Agregado
};

const ButtonC: React.FC<ButtonProps> = ({
	Icon,
	className,
	classNameIcon,
	tooltipId,
	tooltipText,
	onClick, // ✅ Recibe el onClick
}) => {
	return (
		<>
			<button
				className={className}
				data-tooltip-placement="top"
				data-tooltip-target={tooltipId}
				onClick={onClick}
				type="button"
			>
				<img src={Icon} className={classNameIcon} />
			</button>
			<div
				id={tooltipId}
				role="tooltip"
				className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
			>
				{tooltipText}
				<div className="tooltip-arrow" data-popper-arrow></div>
			</div>
		</>
	);
};

export default ButtonC;
