import React from "react";
import { View, FlatList, Image } from "react-native";
import { Space } from "../Space";
import { Text } from "../Text";
import style from "./style";
import { Bottom } from "../Bottom";
import { PressableIcon } from "../PressableIcon";

type props = {
	onCameraPress: () => void;
};

export const History = ({ onCameraPress }: props) => {
	return (
		<Bottom>
			<View style={style.padding}>
				<View style={style.header}>
					<Text style={style.w100}>Всего: 2300</Text>
					<Text size={24} style={{ flex: 1, textAlign: "center" }}>
						История
					</Text>
					<PressableIcon
						name="camera"
						size={36}
						color="black"
						onPress={onCameraPress}
					/>
				</View>

				<Space v={10} />

				<FlatList
					ItemSeparatorComponent={() => <Space v={10} />}
					ListFooterComponent={() => <Space v={60} />}
					showsVerticalScrollIndicator={false}
					data={[...new Array(20)]}
					renderItem={() => <HistoryItem />}
				/>
			</View>
		</Bottom>
	);
};

const HistoryItem = () => {
	return (
		<View style={style.row}>
			<Image
				source={{
					uri: "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg",
				}}
				style={style.image}
			/>
			<Space h={6} />
			<View style={style.center}>
				<Text size={18} weight="bold">
					Картошка с котлетой
				</Text>
				<Space v={5} />
				<Text size={12} weight="thin">
					300Ккал
				</Text>
			</View>
		</View>
	);
};
