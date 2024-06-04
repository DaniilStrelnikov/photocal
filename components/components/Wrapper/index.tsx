import React from "react";
import { StyleSheet, View } from "react-native";

type props = {
	children: React.ReactNode;
};

export const Wrapper = ({ children }: props) => {
	return <View style={style.wrapper}>{children}</View>;
};

const style = StyleSheet.create({
	wrapper: {
		width: "100%",
		backgroundColor: "white",

		borderRadius: 20,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.4,
		shadowRadius: 4,

		elevation: 5,

		alignItems: "center",
		paddingVertical: 40,
		paddingHorizontal: 50,
	},
});
