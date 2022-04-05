import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";

const App = () => {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/checkout">
						<h1>this the checkoutlist</h1>
					</Route>
					<Route path="/login">
						<h1>insert the required ifnos</h1>
					</Route>
					<Route path="/">
						<Header />
						<h1>Welcome to Home page</h1>
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
