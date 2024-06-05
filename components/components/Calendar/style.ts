import { StyleSheet } from "react-native";

export default StyleSheet.create({
	monthWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: (35 + 10) * 7,
	},
	daysWrapper: {
		flexDirection: "row",
		flexWrap: "wrap",
		width: (35 + 10) * 7,
	},
	loader: {
		position: "absolute",
		width: 120,
		height: 120,
		top: "45%",
		marginHorizontal: 20,
		borderRadius: 20,
		backgroundColor: "#3c3c3ccb",
		justifyContent: "center",
		alignItems: "center",
	},
	date: {
		width: 35,
		height: 35,
		marginHorizontal: 5,
		marginVertical: 5,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1.5,
		borderRadius: 35,
		borderStyle: "dashed",
	},
	pickedDate: {
		borderColor: "#1400FF",
		color: "#1400FF",
	},
	activeDate: {
		borderColor: "#FF8A00",
		color: "#FF8A00",
	},
});
