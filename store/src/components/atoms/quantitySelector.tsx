export const QuantitySelector = ({
	bookQuantity,
	setBookQuantity,
}: {
	bookQuantity: number;
	setBookQuantity: React.Dispatch<React.SetStateAction<number>>;
}) => {
	return <input type="number" defaultValue={0} value={bookQuantity} onChange={(e) => setBookQuantity(Number(e.target.value))} />;
};
