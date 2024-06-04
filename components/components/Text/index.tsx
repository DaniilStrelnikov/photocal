import React from "react";
import { Text as Base, TextStyle } from "react-native";

type props = {
	size?: number;
	weight?: "thin" | "regular" | "bold";
	children: string | number;
	style?: TextStyle;
};

const family = {
	thin: "Exo2_100Thin",
	regular: "Exo2_400Regular",
	bold: "Exo2_600SemiBold",
};

export const Text = ({
	size = 14,
	weight = "regular",
	children,
	style,
}: props) => {
	return (
		<Base style={[style, { fontFamily: family[weight], fontSize: size }]}>
			{children}
		</Base>
	);
};
