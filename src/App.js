import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Rent from "./Pages/Rent/Rent";
import Sell from "./Pages/Sell/Sell";
import Buy from "./Pages/Buy/Buy";
import Footer from "./Components/Footer/Footer";
import "./index.css";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/rent" element={<Rent />} />
				<Route path="/sell" element={<Sell />} />
				<Route path="/buy" element={<Buy />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
