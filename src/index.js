import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Auth0Provider
		domain="dev-z2xn8jrtka7vxmhd.us.auth0.com"
		clientId="qFFeRFfJmUsdeHNVOwwkKPrVJfj5hScJ"
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Auth0Provider>
);
