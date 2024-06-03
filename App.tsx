import {
	Button,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function App() {
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
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.h1}>Photocal</Text>
			</View>

			{!image && (
				<TouchableOpacity
					activeOpacity={0.8}
					style={styles.imagePlaceholder}
					onPress={handlePickImage}
				>
					<Text style={styles.h2}>Выбрать изображение</Text>
				</TouchableOpacity>
			)}

			{image && (
				<TouchableOpacity activeOpacity={0.8} onPress={handlePickImage}>
					<Image source={{ uri: image }} style={styles.image} />
				</TouchableOpacity>
			)}

			<Button title="Сколько здесь каллорий?" onPress={handleSend} />

			{ccal && <Text>Количество каллорий - {ccal}</Text>}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
	},
	header: {
		alignItems: "center",
	},
	h1: {
		fontSize: 24,
		fontWeight: "600",
	},
	h2: {
		fontSize: 20,
		fontWeight: "600",
	},
	image: {
		width: 300,
		height: 300,
		marginVertical: 40,
		borderRadius: 16,
	},
	imagePlaceholder: {
		marginVertical: 40,
		width: 300,
		height: 300,
		borderWidth: 3,
		borderColor: "orange",
		borderRadius: 16,
		borderStyle: "dashed",
		alignItems: "center",
		justifyContent: "center",
	},
});
