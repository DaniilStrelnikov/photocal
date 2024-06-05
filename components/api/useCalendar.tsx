import { useRequest } from "./useRequest";

export const useCalendar = () => {
	const { request, loading, data, error } = useRequest("calendar");

	return {
		getCalendar: (date?: number) => request(date ? "?date=" + date : ""),
		foods: data,
		loading,
		error,
	};
};
