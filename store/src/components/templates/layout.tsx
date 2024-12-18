import React from "react";
import { Header } from "../organisms/header.tsx";

export const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};
