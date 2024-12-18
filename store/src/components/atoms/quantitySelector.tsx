import styles from "../../styles/atoms/quantitySelector.module.css";

export const QuantitySelector = ({
	productQuantity,
	setProductQuantity,
}: {
	productQuantity: number;
	setProductQuantity: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputQuantity = Number(e.target.value);
		if (inputQuantity >= 0) {
			setProductQuantity(inputQuantity);
		}
	};

	return <input className={styles.quantitySelector} type="number" defaultValue={0} value={productQuantity} onChange={(e) => handleChange(e)} />;
};
