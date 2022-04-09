import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";

const App = () => {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/login">
						<h1>insert the required ifnos</h1>
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
