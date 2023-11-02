import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../Components/ShoeCard";
import { useState } from "react";

const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

	return (
		<section
			id="home"
			className="w-full flex xl:flex-row flex-col
			justify-center gap-10 max-container min-h-screen"
		>
			<div
				className="relative xl:w-2/5 flex flex-col justify-center 
				items-start w-full max-xl:padding-x pt-28"
			>
				<p className="text-xl font-montserrat text-coral-red">
					Our Summer collections
				</p>
				<h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
					<span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
						The New Arrival
					</span>
					<br />
					<span className="text-coral-red inline-block mt-3">
						Nike
					</span>{" "}
					Shoes
				</h1>
				<p
					className="font-montserrat text-slate-gray text-xl
				 	leading-8 mt-6 mb-14"
				>
					Discover stylish Nike arrivals, quality comfort, and
					innovation for your active life.
				</p>
				<Button label="Show now" iconUrl={arrowRight} />
				<div
					className="flex justify-start items-center gap-16 w-full 
					mt-20 flex-wrap"
				>
					{statistics.map((stat) => {
						return (
							<div key={stat.label}>
								<p className="text-4xl font-palanquin font-bold">
									{stat.value}
								</p>
								<p className="leading-7 font-montserrat text-slate-gray">
									{stat.label}
								</p>
							</div>
						);
					})}
				</div>
			</div>
			<div
				className="relative flex-1 flex justify-center items-center
				xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center z-0"
			>
				<img
					src={bigShoeImg}
					alt="shoes collections"
					width={610}
					height={500}
					className="object-contain relative z-10"
				/>
				<div
					className="flex sm:gap-6 gap-4 absolute -bottom-[5%]
				sm:left-[10%] max-sm:px-6"
				>
					{shoes.map((shoe, index) => {
						return (
							<div key={index}>
								<ShoeCard
									imgUrl={shoe}
									changeBigShoeImg={(shoe) => {
										setBigShoeImg(shoe);
									}}
									bigShoeImg={bigShoeImg}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Hero;
