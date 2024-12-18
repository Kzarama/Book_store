import styles from "../../styles/atoms/buttonCard.module.css";

export const ButtonCard = ({ text, action, type = "button" }: { text: string; action?: () => void; type?: "button" | "submit" }) => {
	return (
		<button className={styles.button} onClick={action} type={type}>
			{text}
		</button>
	);
};
