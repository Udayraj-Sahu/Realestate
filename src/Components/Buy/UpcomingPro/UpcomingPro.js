import React from "react";
import Productcard from "../../ProductCard/Productcard";
import "../UpcomingPro/Upcoming.scss";
import upcomingdata from "../../../assests/upcomingdata";
function UpcomingPro() {
	return (
		<div className="heading">
			Upcoming Project
			<div className="content">
				{upcomingdata.map((item) => {
					return <Productcard name={item.name} image={item.image} />;
				})}
			</div>
		</div>
	);
}

export default UpcomingPro;
