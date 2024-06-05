import ky from "ky";
import * as SecureStore from "expo-secure-store";
import { API_URL } from "@env";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";

export const useApi = () => {
	const { setAuth } = useContext(AuthContext);

	const api = ky.create({
		prefixUrl: API_URL,
		timeout: 20000,
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	});

	const secureApi = api.extend({
		hooks: {
			beforeRequest: [
				async (req: any) => {
					const token = await SecureStore.getItemAsync("token");
					if (token) req.headers.set("Authorization", `Bearer ${token}`);
				},
			],
			afterResponse: [
				async (request, options, response) => {
					if (response.status === 401 || response.status === 403) {
						setAuth(false);
					}
				},
			],
		},
	});

	return { api, secureApi };
};
