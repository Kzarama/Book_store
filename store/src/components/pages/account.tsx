import { useEffect, useState } from "react";
import { User } from "../../assets/interfaces.ts";
import { getUserService } from "../../services/user.ts";
import { AddressInput } from "../molecules/addressInput.tsx";
import { UserPhoto } from "../molecules/userPhoto.tsx";
import { Layout } from "../templates/layout.tsx";
import styles from "./account.module.css";

export const Account = () => {
	const [userData, setUserData] = useState<User>();

	useEffect(() => {
		getUserService("email").then((user) => {
			setUserData(user);
		});
	}, []);

	return (
		<Layout>
			<div className={styles.account}>
				<div>
					<UserPhoto userData={userData} />
					<h1 className={styles.name}>{userData?.name}</h1>
					<h2>{userData?.email}</h2>
				</div>
				<AddressInput address={userData?.address} />
			</div>
		</Layout>
	);
};
