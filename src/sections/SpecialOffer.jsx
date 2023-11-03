import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../Components/Button";

const SpecialOffer = () => {
	return (
		<section
			className="flex justify-between items-center
			 max-lg:flex-col-reverse gap-10 max-container"
			id="about-us"
		>
			<div className="flex-1 ">
				<img
					src={offer}
					alt="super quality shoe"
					width={773}
					height={687}
					className="object-contain  w-full"
				/>
			</div>
			<div className="flex flex-1 flex-col">
				<h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
					<span className="text-coral-red ">Special</span> Offer
				</h2>
				<p className="mt-4 lg:max-w-lg info-text">
					Embark on a shopping journey that redefines your experience
					with unbeatable deals. From premier selections to incredible
					savings, we offer unparalleled value that sets us apart.
				</p>
				<p className="mt-6 lg:max-w-lg info-text">
					Navigate a realm of possibilities designed to fulfill your
					unique desires, surpassing the loftiest expectations. Your
					journey with us is nothing short of exceptional.
				</p>
				<div className="mt-11 flex flex-wrap gap-4">
					<Button label="Vieuw details" iconUrl={arrowRight} />
					<button
						className="flex justify-center items-center 
					gap-2 px-7 py-4 border border-slate-gray rounded-full 
					font-montserrat text-lg text-slate-grayb bg-white leading-none"
					>
						Learn more
					</button>
				</div>
			</div>
		</section>
	);
};

export default SpecialOffer;
