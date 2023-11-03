import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, feedback, customerName, rating }) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<img
				src={imgURL}
				alt="customer image"
				width={120}
				height={120}
				className="rounded-full object-cover"
			/>
			<p className="mt-6 text-center max-w-sm info-text">{feedback}</p>
			<div className="flex justify-center items-center gap-2.5 mt-3">
				<img
					src={star}
					alt="star image"
					width={20}
					height={20}
					className="object-contain mt-0"
				/>
				<p className="info-text ">({rating})</p>
			</div>
			<h3 className="mt-1 font-palanquin text-3xl text-center font-bold ">
				{customerName}
			</h3>
		</div>
	);
};

export default ReviewCard;
