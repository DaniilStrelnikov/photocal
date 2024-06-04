import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

type props = { onPress: () => void; name: string; size: number; color: string };

export const PressableIcon = ({ onPress, name, size, color }: props) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<EvilIcons name={name as any} size={size} color={color} />
		</TouchableOpacity>
	);
};
