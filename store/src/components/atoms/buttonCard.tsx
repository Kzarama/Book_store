import styles from "./buttonCard.module.css";

export const ButtonCard = ({ text }: { text: string }) => {
	return <button className={styles.button}>{text}</button>;
};
