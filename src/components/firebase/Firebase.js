import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyC9WgVQlT3JTQXg_StDkSK4-pM1LWVgetQ",
	authDomain: "online-shop-eb79a.firebaseapp.com",
	projectId: "online-shop-eb79a",
	storageBucket: "online-shop-eb79a.appspot.com",
	messagingSenderId: "233339538571",
	appId: "1:233339538571:web:2ee6907a6e5b782c45988e",
	measurementId: "G-LE86R5QF57",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
