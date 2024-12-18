import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../assets/interfaces.ts";
import GlobalContext from "../../context/GlobalState.tsx";
import { getUserService } from "../../services/user.ts";
import styles from "../../styles/pages/account.module.css";
import { AddressInput } from "../molecules/addressInput.tsx";
import { UserPhoto } from "../molecules/userPhoto.tsx";
import { Layout } from "../templates/layout.tsx";

export const Account = () => {
	const [userData, setUserData] = useState<User>();
	const { state } = useContext(GlobalContext);
	const navigate = useNavigate();

	useEffect(() => {
		getUserService("email").then((user) => {
			setUserData(user);
		});
	}, []);

	if (!state.user) navigate("/");

	return (
		<Layout>
			<div className={styles.account}>
				<div>
					<UserPhoto userData={userData} />
					<h1 className={styles.account_name}>{userData?.name}</h1>
					<h2 className={styles.account_email}>{userData?.email}</h2>
				</div>
				<AddressInput address={userData?.address} />
			</div>
		</Layout>
	);
};
