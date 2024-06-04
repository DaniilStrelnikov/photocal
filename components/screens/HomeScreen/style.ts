import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
