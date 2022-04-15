import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Home1 from "./components/home 1/Home1";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import { useStateValue } from "./components/state-provider/StateProvider";
import { auth } from "./components/firebase/Firebase";

const App = () => {
	const [{ user }, dispatch] = useStateValue();
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	console.log("user is now", user);
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/login">
						<Login />
					</Route>

					<Route path="/apple">
						<Header />
						<Home />
					</Route>
					<Route path="/samsung">
						<Header />
						<Home1 />
					</Route>
					<Route path="/lg">
						<Header />
						<Home />
					</Route>
					<Route path="/huwaei">
						<Header />
						<Home />
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
