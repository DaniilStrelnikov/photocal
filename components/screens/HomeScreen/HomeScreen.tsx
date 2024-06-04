import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ScreenLayout } from "../../components/ScreenLayout";
import * as ImagePicker from "expo-image-picker";
import style from "./style";
import { Button } from "../../components/Button";

export const HomeScreen = () => {
	const [image, setImage] = useState<string | null>(null);
	const [ccal, setCcal] = useState<string | undefined>("");

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
			<View style={style.header}>
				<Text style={style.h1}>Photocal</Text>

				{!image && (
					<TouchableOpacity
						activeOpacity={0.8}
						style={style.imagePlaceholder}
						onPress={handlePickImage}
					>
						<Text style={style.h2}>Выбрать изображение</Text>
					</TouchableOpacity>
				)}

				{image && (
					<TouchableOpacity activeOpacity={0.8} onPress={handlePickImage}>
						<Image source={{ uri: image }} style={style.image} />
					</TouchableOpacity>
				)}

				<Button title="Сколько здесь каллорий?" onPress={handleSend} />

				{ccal && <Text>Количество каллорий - {ccal}</Text>}
			</View>
		</ScreenLayout>
	);
};
