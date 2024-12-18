import styles from "./formInput.module.css";

export const FormInput = ({
	name,
	label,
	type,
	change,
}: {
	name: string;
	label: string;
	type: string;
	change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<div className={styles.formInput}>
			<label className={styles.formInput_label} htmlFor={name}>
				{label}
			</label>
			<input className={styles.formInput_input} type={type} id={name} name={name} onChange={change} />
		</div>
	);
};
