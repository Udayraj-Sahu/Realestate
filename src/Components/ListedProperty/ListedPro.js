import React from "react";
import "../ListedProperty/ListedPro.scss";

function ListedPro(props) {
	return (
		<div className="image-text-container">
		<div className="image-container">
		  <img src={props.image} alt="Image" />
		</div>
		<div className="text-container">
		  {props.city_name}
		</div>
	  </div>
		
	);
}

export default ListedPro;
