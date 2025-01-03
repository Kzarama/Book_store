import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Product } from "../../assets/interfaces.ts";
import GlobalContext from "../../context/GlobalState.tsx";
import { createProductsService } from "../../services/product.ts";
import styles from "../../styles/molecules/sellForm.module.css";
import { ButtonCard } from "../atoms/buttonCard.tsx";
import { FormInput } from "../atoms/formInput.tsx";

export const SellForm = ({ closeModal }: { closeModal: () => void }) => {
	const [formData, setFormData] = useState<Product>({ idProduct: "", title: "", price: 0, details: "", image: "", quantity: 0 });
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

		const isAnyEmpty = Object.values(formData).some((value) => value === "");

		if (isAnyEmpty) {
			return toast.error("Debes llenar todos los campos");
		}

		if (state.user?.token) {
			createProductsService(
				state.user.token,
				formData?.idProduct,
				formData?.title,
				formData?.price,
				formData?.details,
				formData?.image,
				formData?.quantity
			).then((response) => {
				if (response.status === 201) {
					toast.success("Producto creado");
					closeModal();
				}
			});
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.formContent}>
				<FormInput name="idProduct" label="Id product: " type="text" change={handleChange} />
				<FormInput name="title" label="Titulo: " type="text" change={handleChange} />
				<FormInput name="price" label="Precio: " type="number" change={handleChange} />
				<FormInput name="details" label="Detalles: " type="text" change={handleChange} />
				<FormInput name="image" label="Imagen: " type="text" change={handleChange} />
				<FormInput name="quantity" label="Cantidad: " type="number" change={handleChange} />
			</div>

			<ButtonCard text="Vender producto" type="submit" />
			<ButtonCard text="Cancelar" action={closeModal} />
		</form>
	);
};
