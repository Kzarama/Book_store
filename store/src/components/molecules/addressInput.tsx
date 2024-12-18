import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { IStatus } from "../../assets/interfaces";
import GlobalContext from "../../context/GlobalState";
import { updateAddressService } from "../../services/user";
import styles from "../../styles/molecules/addressInput.module.css";

export const AddressInput = ({ address }: { address: string | undefined }) => {
	const [newAddress, setNewAddress] = useState<string | undefined>(undefined);
	const [statusUpdateAddress, setStatusUpdateAddress] = useState<IStatus>();
	const { state } = useContext(GlobalContext);

	const statusText = () => {
		switch (statusUpdateAddress?.status) {
			case "OK":
				return "Actualizado";
			case "ERROR":
				return "Error";
			default:
				return undefined;
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setNewAddress(e.target.value);
	};

	const handleUpdateAddress = () => {
		if (newAddress && state.user?.token) {
			updateAddressService(state.user.token, "email", newAddress).then((response) => {
				if (response.status === 200) {
					setStatusUpdateAddress({ status: "OK" });
					toast.success("Dirección actualizada");
				} else {
					setStatusUpdateAddress({ status: "ERROR" });
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
			<span className={styles.addressInput_textStatus}>{statusText()}</span>
			<button className={styles.addressInput_button} onClick={() => handleUpdateAddress()} disabled={!newAddress}>
				Actualizar Dirección
			</button>
		</div>
	);
};
