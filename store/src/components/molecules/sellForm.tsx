import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Product } from "../../assets/interfaces.ts";
import GlobalContext from "../../context/GlobalState.tsx";
import { createProductsService } from "../../services/product.ts";
import { ButtonCard } from "../atoms/buttonCard.tsx";
import { FormInput } from "../atoms/formInput.tsx";
import styles from "./sellForm.module.css";

export const SellForm = ({ closeModal }: { closeModal: () => void }) => {
	const [formData, setFormData] = useState<Product>({ isbn: "", title: "", price: 0, author: "", editor: "", image: "", quantity: 0 });
	const { state } = useContext(GlobalContext);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (state.user?.token) {
			createProductsService(
				state.user.token,
				formData?.isbn,
				formData?.title,
				formData?.price,
				formData?.author,
				formData?.editor,
				formData?.image,
				formData?.quantity
			).then(() => {
				toast.success("Producto creado");
				closeModal();
			});
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.formContent}>
				<FormInput name="isbn" label="Isbn: " type="text" change={handleChange} />
				<FormInput name="title" label="Titulo: " type="text" change={handleChange} />
				<FormInput name="price" label="Precio: " type="text" change={handleChange} />
				<FormInput name="author" label="Autor: " type="text" change={handleChange} />
				<FormInput name="editor" label="Editor: " type="text" change={handleChange} />
				<FormInput name="image" label="Imagen: " type="text" change={handleChange} />
				<FormInput name="quantity" label="Cantidad: " type="text" change={handleChange} />
			</div>

			<ButtonCard text="Vender producto" type="submit" />
		</form>
	);
};
