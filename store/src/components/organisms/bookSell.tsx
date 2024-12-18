import { useContext, useState } from "react";
import Modal from "react-modal";
import GlobalContext from "../../context/GlobalState";
import { ButtonCard } from "../atoms/buttonCard";
import { SellForm } from "../molecules/sellForm";
import styles from "./bookSell.module.css";

export const BookSell = () => {
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
			<ButtonCard text="Vender libro" action={openModal} />
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
