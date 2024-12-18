import { useContext, useEffect, useState } from "react";
import { Cart } from "../../assets/interfaces.ts";
import GlobalContext from "../../context/GlobalState.tsx";
import { buyCartService, getCartService } from "../../services/cart.ts";
import { ButtonCard } from "../atoms/buttonCard";
import { CartCard } from "../molecules/cartCard.tsx";
import styles from "./cartList.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CartList() {
	const { state } = useContext(GlobalContext);
	const [products, setProducts] = useState<Cart[] | undefined>(undefined);
	const navigate = useNavigate();

	const buyCart = () => {
		if (state.user?.token && state.user?.email) {
			buyCartService(state.user.token, state.user.email).then((response) => {
				if (response.status === 200) {
					setTimeout(() => {
						toast.success("Compra exitosa");
					}, 10);
					navigate("/");
				}
			});
		}
	};

	useEffect(() => {
		if (state.user?.email && state.user?.token)
			getCartService(state.user.email).then((products) => {
				setProducts(products);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles.cardList}>
			<h1>Carrito</h1>
			<table className={styles.cardList_table}>
				<thead>
					<tr>
						<th>Imagen:</th>
						<th>Producto:</th>
						<th>Precio:</th>
						<th>Cantidad:</th>
					</tr>
				</thead>
				<tbody>
					{products?.map((product) => (
						<CartCard key={product.product} product={product} />
					))}
				</tbody>
			</table>
			<ButtonCard text="Comprar" action={buyCart} />
		</div>
	);
}

export default CartList;
