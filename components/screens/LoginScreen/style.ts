import { StyleSheet } from "react-native";

export default StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 45,
	},
	form: {
		height: 370,
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

	title: {
		fontSize: 36,
	},
});
