import { useMutation } from "./useMutation";

export const useFood = () => {
	const { request, loading, data, error } = useMutation("food");

	const getCcal = async (image: string) => {
		const formData = new FormData();
		formData.append("image", {
			uri: image,
			name: "photo.jpg",
			type: "image/jpeg",
		});
		return await request(null, formData);
	};

	return {
		getCcal,
		data,
		loading,
		error,
	};
};
