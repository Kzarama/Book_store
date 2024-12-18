import React from "react";
import { Route, Routes } from "react-router-dom";
import { Account } from "./components/pages/account.tsx";
import { Home } from "./components/pages/home.tsx";
import { Login } from "./components/pages/login.tsx";
import { Register } from "./components/pages/register.tsx";

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/account" element={<Account />} />
		</Routes>
	);
};

export default App;
