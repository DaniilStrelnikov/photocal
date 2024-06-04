import React, { useEffect } from "react";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";

type initialType = {
	auth: boolean;
	setAuth: (v: boolean) => void;
};

type props = {
	children: React.ReactNode;
};

const initial: initialType = {
	auth: false,
	setAuth: (v) => undefined,
};

export const AuthContext = React.createContext(initial);

export const AuthContextProvider = ({ children }: props) => {
	const [auth, setAuth] = useState(false);

	useEffect(() => {
		(async () => {
			const token = await SecureStore.getItemAsync("token");
			setAuth(!!token);
		})();
	}, []);

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};
