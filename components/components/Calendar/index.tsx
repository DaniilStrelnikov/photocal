import React from "react";
import { Wrapper } from "../Wrapper";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../Text";
import style from "./style";
import { Space } from "../Space";
import { PressableIcon } from "../PressableIcon";

export const Calendar = () => {
	return (
		<Wrapper>
			<View style={style.monthWrapper}>
				<PressableIcon
					name="arrow-left"
					size={36}
					color="black"
					onPress={() => console.log("hello world!")}
				/>
				<Text size={18} weight="bold">
					Январь
				</Text>
				<PressableIcon
					name="arrow-right"
					size={36}
					color="black"
					onPress={() => console.log("hello world!")}
				/>
			</View>

			<Space v={15} />

			<View style={style.daysWrapper}>
				{[...new Array(30)].map((el, id) => (
					<TouchableOpacity style={[style.date]} key={"date " + id}>
						<Text size={16} weight="bold">
							{id + 1}
						</Text>
					</TouchableOpacity>
				))}
			</View>
		</Wrapper>
	);
};
