import { useContext, useRef } from "react";
import { toast } from "react-toastify";
import { User } from "../../assets/interfaces";
import GlobalContext from "../../context/GlobalState";
import { updatePhoto } from "../../services/user";
import styles from "./userPhoto.module.css";

export const UserPhoto = ({ userData }: { userData: User | undefined }) => {
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const { state } = useContext(GlobalContext);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) {
			toast.error("Error");
			return;
		}

		if (state.user?.token) updatePhoto(state.user.token, file).then(() => toast.success("Imagen actualizada"));
	};

	const handleFileUpload = async () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	return (
		<div className={styles.userPhotoContainer}>
			<img className={styles.userPhoto} src={userData?.image} alt={userData?.name} />
			<input className={styles.input} type="file" name="image" id="image" ref={fileInputRef} onChange={handleFileChange} />
			<button className={styles.button} onClick={handleFileUpload}>
				Cambiar foto
			</button>
		</div>
	);
};
