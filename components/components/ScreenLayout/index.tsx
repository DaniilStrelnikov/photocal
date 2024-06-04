import React from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import style from "./style";

type props = {
	children: React.ReactNode;
};

export const ScreenLayout = ({ children }: props) => {
	return (
		<ImageBackground
			source={require("../../../assets/background.jpg")}
			style={style.flex}
		>
			<SafeAreaView style={style.flex}>{children}</SafeAreaView>
		</ImageBackground>
	);
};
