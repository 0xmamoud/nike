import ShoeCard from "../Components/ShoeCard";
import { products } from "../constants";

const PopularProducts = () => {
	return (
		<div>
			<h2>
				Our <span>Popular </span>Products
			</h2>
			<p>
				Experience top-notch quality and style with our sought-after
				selections. Discover a world of comfort, design, and value
			</p>
			<div>
				{products.map((product, index) => {
					return (
						<div key={index}>
							<ShoeCard imgUrl={product.imgURL} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PopularProducts;
