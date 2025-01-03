import { useContext, useState } from "react";
import Modal from "react-modal";
import GlobalContext from "../../context/GlobalState";
import styles from "../../styles/organisms/productSell.module.css";
import { ButtonCard } from "../atoms/buttonCard";
import { SellForm } from "../molecules/sellForm";

export const ProductSell = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { state } = useContext(GlobalContext);

	function openModal() {
		setIsModalOpen(true);
	}

	function closeModal() {
		setIsModalOpen(false);
	}

	if (!state.user) {
		return;
	}

	return (
		<>
			<ButtonCard text="Vender producto" action={openModal} />
			<Modal
				className={styles.modal}
				overlayClassName={styles.modal_overlay}
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				contentLabel="Minimal Modal Example"
			>
				<SellForm closeModal={closeModal} />
			</Modal>
		</>
	);
};
