import React from "react";
import "../Navbar/Navbar.scss";
import { AiOutlineSearch, AiOutlinePropertySafety } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { NavLink } from "react-router-dom";
function Navbar() {
	return (
		<>
			<div className="Navbar">
				<div className="container nav-container">
					<div className="nav-left">
						<div className="nav-menu-logo">
							<NavLink to="/">
								<span className="nav-menu ">WEBSITE_NAME</span>
							</NavLink>
						</div>
					</div>
					<div className="nav-center">
						<NavLink to="/">
							<h1 className="Logo">LOGO</h1>
						</NavLink>
					</div>
					<div className="nav-right flex">
						<div className="nav-search nav-logos">
							<AiOutlineSearch />
							<NavLink to="/buy">
								<span className="search-logo nav-logos">
									FOR BUY
								</span>
							</NavLink>
						</div>
						<div className="nav-location">
							<CiLocationOn />
						</div>
						<NavLink to="/rent">
							<span className="location-log nav-logos">
								FOR RENT
							</span>
						</NavLink>
						<div className="nav-property">
							<AiOutlinePropertySafety />
							<NavLink to="/sell">
								{" "}
								<span className="property-logo nav-logos">
									FOR SELL
								</span>
							</NavLink>
						</div>
						<div className="nav-proflie">
							<div class="containerr">
								<div>
									<button class="log">Login</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
