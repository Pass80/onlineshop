import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase/Firebase";
import "./Login.css";

const Login = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginHandler = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((e) => alert(e.message));
	};

	const registerHandler = (e) => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((e) => alert(e.message));
	};
	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-1024x426.png"
					alt="logo"
				/>
			</Link>

			<div className="login__container">
				<h1>Sign in</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						className="login__signInButton"
						type="submit"
						onClick={loginHandler}
					>
						Sign In
					</button>
				</form>
				<p>
					be fjkhd rjhkerb rijorjr irjgro rpijr roruhgoirhgruhgrhrg
					rgprojr
				</p>
				<button
					className="login__registerButton"
					onClick={registerHandler}
				>
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
};

export default Login;
