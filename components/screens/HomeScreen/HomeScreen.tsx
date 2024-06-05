import React, { useCallback, useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { ScreenLayout } from "../../components/ScreenLayout";

import style from "./style";
import { Wrapper } from "../../components/Wrapper";
import { Calendar } from "../../components/Calendar";
import { Text } from "../../components/Text";
import { Space } from "../../components/Space";
import { useCameraPermissions } from "expo-camera";
import { History } from "../../components/History/History";
import { useCalendar } from "../../api/useCalendar";
import { DateContext } from "../../context/Date";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainStackNavProps } from "../../navigation";
import { useFocusEffect } from "@react-navigation/native";

type NavProp = NavigationProp<MainStackNavProps, "home">;

export const HomeScreen = () => {
	const { date } = useContext(DateContext);
	const { getCalendar, foods: dates, loading: dateL } = useCalendar();
	const { getCalendar: getDate, foods, loading } = useCalendar();
	const [permission, requestPermission] = useCameraPermissions();

	const { navigate } = useNavigation<NavProp>();

	const [image, setImage] = useState<string | null>(null);
	const [ccal, setCcal] = useState<string | undefined>("");

	useFocusEffect(
		useCallback(() => {
			if (!date) return;
			getDate(date as any);
		}, [date])
	);

	useEffect(() => {
		getCalendar();
		requestPermission();
	}, []);

	useEffect(() => {
		if (!date) return;
		getDate(date as any);
	}, [date]);

	const handleTakePhoto = async () => {
		if (!permission) return;
		navigate("finish");
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
				<Calendar dates={dates} loading={dateL} />
				<Space v={10} />
			</View>
			<History
				onCameraPress={handleTakePhoto}
				items={foods}
				loading={loading}
			/>
		</ScreenLayout>
	);
};
