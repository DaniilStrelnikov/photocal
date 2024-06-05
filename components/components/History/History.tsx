import React from "react";
import { View, FlatList, Image, ActivityIndicator } from "react-native";
import { Space } from "../Space";
import { Text } from "../Text";
import style from "./style";
import { Bottom } from "../Bottom";
import { PressableIcon } from "../PressableIcon";

type item = {
	image: string;
	name: string;
	ccal: string;
};

type props = {
	onCameraPress: () => void;
	items: item[];
	loading: boolean;
};

export const History = ({ onCameraPress, items, loading }: props) => {
	return (
		<Bottom>
			<View style={style.padding}>
				<View style={style.header}>
					<Text style={style.w100}>
						Всего:{" "}
						{(items?.map((el) => el.ccal)?.reduce((a, b) => a + b, 0) as any) ||
							0}
					</Text>
					<Text size={24} style={style.flexC}>
						История
					</Text>
					<View style={style.w100End}>
						<PressableIcon
							name="camera"
							size={36}
							color="black"
							onPress={onCameraPress}
						/>
					</View>
				</View>

				<Space v={10} />

				{loading ? (
					<>
						<Space v={10} />
						<ActivityIndicator />
					</>
				) : (
					<FlatList
						ItemSeparatorComponent={() => <Space v={10} />}
						ListFooterComponent={() => <Space v={60} />}
						showsVerticalScrollIndicator={false}
						data={items}
						renderItem={({ item }) => <HistoryItem item={item} />}
					/>
				)}
			</View>
		</Bottom>
	);
};

const HistoryItem = ({ item }: { item: item }) => {
	return (
		<View style={style.row}>
			<Image
				source={{
					uri: `data:image/jpeg;base64,${item.image}`,
				}}
				style={style.image}
			/>
			<Space h={6} />
			<View style={style.center}>
				<Text size={18} weight="bold">
					{item.name}
				</Text>
				<Space v={5} />
				<Text size={12} weight="thin">
					{item.ccal}Ккал
				</Text>
			</View>
		</View>
	);
};
