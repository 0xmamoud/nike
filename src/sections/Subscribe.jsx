import Button from "../Components/Button";

const Subscribe = () => {
	return (
		<section
			className="flex flex-1 justify-around items-center
				max-container max-lg:flex-col gap-10"
			id="contact-us"
		>
			<h3
				className=" font-palanquin text-4xl text-center font-bold 
			leading-[68px] lg:max-w-md"
			>
				Sign Up for<span className="text-coral-red "> Updates</span> &
				Newsletter
			</h3>
			<div className="xl:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
				<input
					type="text"
					placeholder="subscribe@nike.com"
					className="input"
				/>
				<div className="flex max-sm:justify-end items-center max-sm:w-full">
					<Button label="Sign Up" fullWidth />
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
