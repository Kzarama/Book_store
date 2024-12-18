export const QuantitySelector = ({
	productQuantity,
	setProductQuantity,
}: {
	productQuantity: number;
	setProductQuantity: React.Dispatch<React.SetStateAction<number>>;
}) => {
	return <input type="number" defaultValue={0} value={productQuantity} onChange={(e) => setProductQuantity(Number(e.target.value))} />;
};
