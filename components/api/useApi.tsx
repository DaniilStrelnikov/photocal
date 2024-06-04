import ky from "ky";
import * as SecureStore from "expo-secure-store";
import { API_URL } from "@env";

export const useApi = () => {
	const api = ky.create({
		prefixUrl: API_URL,
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	});

	const secureApi = api.extend({
		hooks: {
			beforeRequest: [
				async (req: any) => {
					const token = await SecureStore.getItemAsync("token");
					if (token) req.headers.append("Institution", token);
				},
			],
		},
	});

	return { api, secureApi };
};
