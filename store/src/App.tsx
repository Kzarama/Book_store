import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes.tsx";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<RoutesComponent />
		</BrowserRouter>
	);
};

export default App;
