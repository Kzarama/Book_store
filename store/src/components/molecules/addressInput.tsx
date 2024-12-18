import { useContext, useState } from "react";
import { toast } from "react-toastify";
import GlobalContext from "../../context/GlobalState";
import { updateAddressService } from "../../services/user";
import styles from "../../styles/molecules/addressInput.module.css";

export const AddressInput = ({ address }: { address: string | undefined }) => {
	const [newAddress, setNewAddress] = useState<string | undefined>(undefined);
	const { state } = useContext(GlobalContext);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setNewAddress(e.target.value);
	};

	const handleUpdateAddress = () => {
		if (newAddress && state.user?.token) {
			updateAddressService(state.user.token, "email", newAddress).then((response) => {
				if (response.status === 200) {
					toast.success("Dirección actualizada");
				} else {
					toast.error("Error");
				}
			});
		}
	};

	return (
		<div className={styles.addressInput}>
			<label className={styles.addressInput_label} htmlFor="address">
				Actualiza dirección
			</label>
			<input className={styles.addressInput_inputUpdate} type="text" name="address" id="address" value={newAddress ?? address} onChange={handleChange} />
			<button className={styles.addressInput_button} onClick={() => handleUpdateAddress()} disabled={!newAddress}>
				Actualizar Dirección
			</button>
		</div>
	);
};
