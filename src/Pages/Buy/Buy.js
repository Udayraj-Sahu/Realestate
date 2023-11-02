import React from "react";
import Productcard from "../../Components/ProductCard/Productcard";
import "../Buy/Buy.scss";
import buy_data from "../../assests/buydata";
function Buy() {
	return (
		<div className="content">
			{buy_data.map((item) => {
				return <Productcard name={item.name} image={item.image} />;
			})}
		</div>
	);
}

export default Buy;
