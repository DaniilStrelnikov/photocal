import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ScreenLayout } from "../../components/ScreenLayout";
import * as ImagePicker from "expo-image-picker";
import style from "./style";
import { Wrapper } from "../../components/Wrapper";
import { Calendar } from "../../components/Calendar";
import { Text } from "../../components/Text";
import { Space } from "../../components/Space";
import { useCameraPermissions } from "expo-camera";
import { History } from "../../components/History/History";

export const HomeScreen = () => {
	const [image, setImage] = useState<string | null>(null);
	const [ccal, setCcal] = useState<string | undefined>("");
	const [permission, requestPermission] = useCameraPermissions();

	useEffect(() => {
		requestPermission();
	}, []);

	const handleTakePhoto = async () => {
		if (!permission) return;
		const image = await ImagePicker.launchCameraAsync();
		console.log(image);
	};

	const handlePickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setCcal(undefined);
			setImage(result.assets[0].uri);
			return;
		}

		setImage(null);
	};

	const handleSend = () => {
		const formData = new FormData();
		if (image) {
			formData.append("image", {
				uri: image,
				name: "photo.jpg",
				type: "image/jpeg",
			});
		}

		fetch("http://192.168.0.107:5000/api/user/food", {
			method: "POST",
			body: formData,
		})
			.then((data) => data.json())
			.then((data) => {
				setCcal(data?.data);
			})
			.catch((err) => console.error(err));
	};

	return (
		<ScreenLayout>
			<View style={style.padding}>
				<Wrapper>
					<Text size={36} weight="bold">
						PhotoCcal
					</Text>
				</Wrapper>
				<Space v={10} />
				<Calendar />
				<Space v={10} />
			</View>
			<History onCameraPress={handleTakePhoto} />
		</ScreenLayout>
	);
};
