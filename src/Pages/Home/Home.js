import React from "react";
import Hero from "../../Components/Hero/Hero";
import "../../Pages/Home/Home.scss";
import ListedPro from "../../Components/ListedProperty/ListedPro";
import Recommand from "../../Components/Buy/Recomme/Recommand";
import city_info from "../../assests/citydata";
import UpcomingPro from "../../Components/Buy/UpcomingPro/UpcomingPro";
import {useNavigate} from 'react-router-dom';
function Home() {
	const navigate = useNavigate();
	const navigateTObuy = () => {
		navigate("/buy");
	};

	const navigateTosell = () => {
		navigate("/sell");
	};

	const data = {
		image: "https://picsum.photos/200/300",
		city_name: "INDORE",
	};

	return (
		<div className="Home">
			<Hero />
			<section className="collection container">
				<div className="info">
					<h2 className="heading">
						Explore Real Estate in Your City
					</h2>
				</div>

				<div className="content container city_img">
					{
						city_info.map((item)=>{
							return <ListedPro city_name={item.city_name} image= {item.city_img} />
						})
					}
				</div>
			</section>

			<section className="container">
				<div className="info">
					<h2 className="heading">BUY</h2>
				</div>

				<div className="container">
					<Recommand />
					<UpcomingPro />
					<div class="containerr">
						<div>
							<button onClick={navigateTObuy} class="log">EXPLORE MORE!</button>
						</div>
					</div>
				</div>
			</section>

			<section className="container">
				<div className="info">
					<h2 className="heading">RENT</h2>
				</div>

				<div className="container">
					<Recommand />
					<UpcomingPro />
					<div class="containerr">
						<div>
							<button onClick={navigateTosell} class="log">EXPLORE MORE!</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
