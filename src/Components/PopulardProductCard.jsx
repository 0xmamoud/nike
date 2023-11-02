import { star } from "../assets/icons";

const PopulardProductCard = ({ imgURL, name, price }) => {
	return (
		<div className="flex flex-1 flex-col w-full max-sm:w-full">
			<img src={imgURL} alt={name} width={280} height={280} />
			<div className="flex justify-start gap-2.5 mt-8">
				<img src={star} alt="star" width={24} height={24} />
				<p className="font-montserrat text-xl leading-normal text-slate-gray">
					(4.7)
				</p>
			</div>
			<h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
				{name}
			</h3>
			<p
				className="mt-2 text-2xl leading-normal font-semibold text-coral-red 
			font-montserrat"
			>
				{price}
			</p>
		</div>
	);
};

export default PopulardProductCard;
