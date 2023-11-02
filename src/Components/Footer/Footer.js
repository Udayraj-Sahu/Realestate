import React from "react";
import "../Footer/Footer.scss";
function Footer() {
	return (
		<div className="Footer">
			<div className="foot">
				<div className="logo">
					<img src="" alt="" />
					<h2>Do You Need Help With Anything</h2>
					<p>
						Receive updates, hot deals, tutorials, discounts sent
						straignt in your inbox every month
					</p>
					<div className="input flex">
						<input type="text" placeholder="Email Address" />
						<button className="btnn">Subscribe</button>
					</div>
				</div>
			</div>
			<div className="foot">
				<h3>LAYOUTS</h3>
				<ul>
					<li>Home Page</li>
					<li>About Page</li>
					<li>Service Page</li>
					<li>Property Page</li>
					<li>Contact Page</li>
					<li>Single Blog</li>
				</ul>
			</div>
      <div className="foot">
        <h3>ALL SECTIONS</h3>
      <ul>
        <li>Header</li>
        <li>Features</li>
        <li>Testomonials</li>
        <li>Videos</li>
        <li>Footers</li>
        <li>Attractive</li>
      </ul>
      </div> 
      <div className="foot">
        <h3>COMPANY</h3>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li>Login </li>
          <li>Changelog </li>
          <li>Affiliate</li>
        </ul>
      </div>
		</div>
	);
}

export default Footer;
