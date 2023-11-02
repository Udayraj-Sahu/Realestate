import React from "react";
import Productcard from "../../Components/ProductCard/Productcard";
import rent_data from "../../assests/rentdata";
function Rent() {
	return (
		<div>
			<div className="content">
			{rent_data.map((item) => {
				return <Productcard name={item.name} image={item.image} />;
			})}
			</div>
		</div>
	);
}

export default Rent;
