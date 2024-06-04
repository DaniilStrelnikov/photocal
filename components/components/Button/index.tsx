import React from "react";
import { ButtonProps, StyleSheet, Text, TouchableOpacity } from "react-native";

type props = ButtonProps;

export const Button = (props: props) => {
	return (
		<TouchableOpacity
			onPress={props.onPress}
			activeOpacity={0.8}
			style={style.btn}
		>
			<Text style={style.title}>{props.title}</Text>
		</TouchableOpacity>
	);
};

const style = StyleSheet.create({
	btn: {
		width: 150,
		height: 40,
		backgroundColor: "#9EFFA8",
		borderRadius: 4,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 16,
		fontWeight: "600",
	},
});
