import { useState } from "react";
import { useApi } from "./useApi";

export const useMutation = (link: string) => {
	const { secureApi } = useApi();
	const [data, setData] = useState<any>(undefined);
	const [error, setError] = useState<any>(undefined);
	const [loading, setLoading] = useState(false);

	const request = async (body?: any) => {
		setLoading(true);
		setError(undefined);

		const _body = body ? { json: body } : undefined;

		const data = await secureApi.post(link, _body).json().catch(setError);
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
