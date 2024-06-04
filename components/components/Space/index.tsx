import React from "react";
import { View } from "react-native";

type props = {
	v?: number;
	h?: number;
};

export const Space = ({ v, h }: props) => {
	return <View style={{ marginVertical: v, marginHorizontal: h }} />;
};
