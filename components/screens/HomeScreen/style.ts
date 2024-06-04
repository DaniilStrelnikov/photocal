import { StyleSheet } from "react-native";

export default StyleSheet.create({
	padding: {
		paddingHorizontal: 20,
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
	},

	// TODO remove from home screen
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
