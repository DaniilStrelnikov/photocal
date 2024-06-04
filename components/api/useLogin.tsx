import * as SecureStore from "expo-secure-store";
import { useMutation } from "./useMutation";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";

type loginProps = {
	email: string;
	password: string;
};

export const useLogin = () => {
	const { request, loading, error } = useMutation("user/login");
	const { setAuth } = useContext(AuthContext);

	const login = async (body: loginProps) => {
		const data: any = await request(body);
		if (!data?.data) return;

		await SecureStore.setItemAsync("token", data.data);
		setAuth(true);
	};

	return {
		login,
		loading,
	};
};
