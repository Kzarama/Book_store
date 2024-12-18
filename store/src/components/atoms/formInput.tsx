import styles from "../../styles/atoms/formInput.module.css";

export const FormInput = ({
	name,
	label,
	type,
	change,
	classNameContainer,
	classNameInput,
}: {
	name: string;
	label: string;
	type: string;
	change: (e: React.ChangeEvent<HTMLInputElement>) => void;
	classNameContainer?: string;
	classNameInput?: string;
}) => {
	return (
		<div className={classNameContainer ?? styles.formInput}>
			<label className={styles.formInput_label} htmlFor={name}>
				{label}
			</label>
			<input className={classNameInput ?? styles.formInput_input} type={type} id={name} name={name} onChange={change} />
		</div>
	);
};
