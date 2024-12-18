import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">home</Link>
				</li>
				<li>
					<Link to="/login">login</Link>
				</li>
			</ul>
		</nav>
	);
};
