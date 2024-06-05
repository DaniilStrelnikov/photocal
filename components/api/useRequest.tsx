import { useState } from "react";
import { useApi } from "./useApi";

export const useRequest = (link: string, secure: boolean = true) => {
	const { secureApi, api } = useApi();
	const [data, setData] = useState<any>(undefined);
	const [error, setError] = useState<any>(undefined);
	const [loading, setLoading] = useState(false);

	const request = async (params?: string) => {
		setLoading(true);
		const data = await (secure ? secureApi : api)
			.get(link + (params ? params : ""))
			.json()
			.then((data) => (data as any)?.data)
			.catch((err) => {
				setError(err);
			});

		setData(data);
		setLoading(false);

		return data;
	};

	return {
		data,
		loading,
		error,
		request,
	};
};
