import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes.tsx";
import { GlobalProvider } from "./context/GlobalState.tsx";

const App: React.FC = () => {
	return (
		<GlobalProvider>
			<BrowserRouter>
				<RoutesComponent />
			</BrowserRouter>
		</GlobalProvider>
	);
};

export default App;
