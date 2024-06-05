import React, { useCallback, useEffect, useState } from "react";
import { ScreenLayout } from "../../components/ScreenLayout";
import { Wrapper } from "../../components/Wrapper";
import { Text } from "../../components/Text";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Space } from "../../components/Space";
import { useFood } from "../../api/useFood";
import { Button } from "../../components/Button";

export const FinishScreen = () => {
	const { goBack } = useNavigation();
	const { getCcal, loading } = useFood();
	const [data, setData] = useState({
		name: "",
		ccal: "",
	});
	const [image, setImage] = useState("");

	useFocusEffect(
		useCallback(() => {
			(async () => {
				const image = (await ImagePicker.launchCameraAsync())?.assets?.[0].uri;
				if (!image) return;

				setImage(image);
				getCcal(image).then((data) => setData(data));
			})();
		}, [])
	);

	return (
		<ScreenLayout>
			<View style={{ padding: 20 }}>
				<Wrapper>
					<Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
					<Space v={20} />

					{loading ? (
						<ActivityIndicator />
					) : (
						<>
							<Text size={28} weight="bold" style={{ textAlign: "center" }}>
								{data.data?.name}
							</Text>
							<Space v={8} />
							<Text size={20} weight="thin">
								{data.data?.ccal}Ккал
							</Text>
							<Space v={20} />
							<Button title="Продолжить" onPress={goBack} />
						</>
					)}
				</Wrapper>
			</View>
		</ScreenLayout>
	);
};
