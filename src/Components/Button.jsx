const Button = ({ label, iconUrl }) => {
	return (
		<button
			className="bg-coral-red flex justify-center items-center 
			gap-2 px-7 py-4 border border-coral-red rounded-full 
			font-montserrat text-lg text-white leading-none"
		>
			{label}
			{iconUrl && (
				<img
					src={iconUrl}
					alt="icon fleche droit"
					className="w-5 h-5"
				/>
			)}
		</button>
	);
};

export default Button;
