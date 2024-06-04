import React from "react";
import { TextInput, View, TextInputProps, StyleSheet } from "react-native";

type props = {} & TextInputProps;

export const Input = (props: props) => {
	return (
		<View style={style.wrapper}>
			<TextInput {...props} style={style.input} />
		</View>
	);
};

const style = StyleSheet.create({
	wrapper: {
		height: 45,
		backgroundColor: "#F2F2F2",
		width: "100%",
		borderRadius: 4,
		paddingHorizontal: 12,
		justifyContent: "center",
	},
	input: {
		fontSize: 16,
	},
});
