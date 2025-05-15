type ButtonProps = {
	Icon?: any;
	text?: string;
	className?: string;
	classNameIcon?: string;
	tooltipId?: string;
	tooltipText?: string;
};

const ButtonC: React.FC<ButtonProps> = ({
	Icon,
	text,
	className,
	classNameIcon,
	tooltipId,
	tooltipText,
}) => {
	return (
		<>
			<button className={className} data-tooltip-target={tooltipId}>
				<img src={Icon} className={classNameIcon} />
			</button>
			<div
				id={tooltipId}
				role="tooltip"
				className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
			>
				{tooltipText}
				<div className="tooltip-arrow" data-popper-arrow></div>
			</div>
		</>
	);
};

export default ButtonC;
