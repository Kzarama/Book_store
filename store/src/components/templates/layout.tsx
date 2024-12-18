import React from "react";
import { Header } from "../organisms/header.tsx";
import styles from "./layout.module.css";

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.layout}>
			<Header />
			{children}
		</div>
	);
};
