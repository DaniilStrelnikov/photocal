import { StyleSheet } from "react-native";

export default StyleSheet.create({
	padding: { padding: 20 },
	header: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	flexC: { flex: 1, textAlign: "center" },
	w100: { width: 100 },
	w100End: { width: 100, alignItems: "flex-end" },
	row: { flexDirection: "row" },
	image: { width: 80, height: 80, borderRadius: 10 },
	center: { justifyContent: "center" },
});
