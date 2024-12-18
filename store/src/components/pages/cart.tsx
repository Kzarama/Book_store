import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../context/GlobalState";
import { CartList } from "../organisms/cartList";
import { Layout } from "../templates/layout";

export const Cart = () => {
	const { state } = useContext(GlobalContext);
	const navigate = useNavigate();

	if (!state.user) navigate("/");

	return (
		<Layout>
			<CartList />
		</Layout>
	);
};
