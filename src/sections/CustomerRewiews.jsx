import { reviews } from "../constants";

import ReviewCard from "../Components/ReviewCard";

const CustomerRewiews = () => {
	return (
		<section className="max-container">
			<h2 className=" font-palanquin text-4xl text-center font-bold ">
				What Our<span className="text-coral-red "> Customers</span> Say?
			</h2>
			<p className="mt-4  info-text text-center max-w-lg m-auto">
				Hear genuine stories from our satisfied customers about their
				exceptional experiences with us.
			</p>
			<div
				className="mt-24 flex-1 flex justify-evenly items-center 
				max-lg:flex-col gap-14"
			>
				{reviews.map((review, index) => {
					return <ReviewCard key={index} {...review} />;
				})}
			</div>
		</section>
	);
};

export default CustomerRewiews;
