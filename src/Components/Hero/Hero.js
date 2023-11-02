import React from "react";
import "../Hero/Hero.scss";
function Hero() {
	return (
		<div className="Hero">
			<div className="hero-content flex">
				<h1 className="heading">Search Your Next Home</h1>
				<p className="subheading">
					Find new & featured property located in your local city.
				</p>

				<div class="containerr">
					<div>
						<button class="log">EXPLORE MORE!</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
