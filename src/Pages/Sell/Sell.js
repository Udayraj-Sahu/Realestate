import React from "react";
import Productcard from "../../Components/ProductCard/Productcard";
import sell_data from "../../assests/selldata";
function Sell() {
	return (
		<div className="content">
			{sell_data.map((item) => {
				return <Productcard name={item.name} image={item.image} />;
			})}
		</div>
	);
}

export default Sell;
