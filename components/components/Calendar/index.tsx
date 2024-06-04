import React, { useEffect, useMemo, useRef, useState } from "react";
import { Wrapper } from "../Wrapper";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../Text";
import style from "./style";
import { Space } from "../Space";
import { PressableIcon } from "../PressableIcon";
import moment from "moment";

const months = [
	"январь",
	"февраль",
	"март",
	"апрель",
	"май",
	"июнь",
	"июль",
	"август",
	"сентябрь",
	"октябрь",
	"ноябрь",
	"декабрь",
];

type Date = {
	year: number;
	month: number;
	day?: number;
};

type DayProps = {
	date: Date;
	calendar: Date;
	id: number;
	pickDate: (id: number) => void;
};

export const Calendar = () => {
	const momentRef = useRef(moment());

	const [calendar, setCalendar] = useState<Date>({
		year: moment().year(),
		month: moment().month(),
	});
	const [pickedDay, setPickedDay] = useState<Date>({
		year: moment().year(),
		month: moment().month(),
		day: moment().day() + 1,
	});

	const days = useMemo(
		() => [
			...new Array(
				moment()
					.set({ ...calendar })
					.daysInMonth()
			),
		],
		[calendar]
	);

	const handleAddMonth = () => {
		const date = momentRef.current.add(1, "M");
		setCalendar({
			year: date.year(),
			month: date.month(),
		});
	};

	const handleSubtractMonth = () => {
		const date = momentRef.current.subtract(1, "M");
		setCalendar({
			year: date.year(),
			month: date.month(),
		});
	};

	const handlePickDay = (id: number) => {
		setPickedDay({ ...calendar, day: id });
	};

	return (
		<Wrapper>
			<View style={style.monthWrapper}>
				<PressableIcon
					name="arrow-left"
					size={36}
					color="black"
					onPress={handleSubtractMonth}
				/>
				<Text size={18} weight="bold">
					{`${months[calendar.month].toUpperCase()} - ${calendar.year}`}
				</Text>
				<PressableIcon
					name="arrow-right"
					size={36}
					color="black"
					onPress={handleAddMonth}
				/>
			</View>

			<Space v={15} />

			<View style={style.daysWrapper}>
				{days.map((_, id) => (
					<Day
						calendar={calendar}
						date={pickedDay}
						id={id}
						pickDate={handlePickDay}
						key={"day-" + id}
					/>
				))}
			</View>
		</Wrapper>
	);
};

const Day = ({ date, calendar, id, pickDate }: DayProps) => {
	const compareDate = () =>
		date.month === calendar.month &&
		date.year === calendar.year &&
		date.day == id;

	const SelectedWrapperStyle = compareDate() && style.activeDate;
	const SelectedTextStyle = compareDate() && (style.activeDate as any);

	return (
		<TouchableOpacity
			style={[style.date, SelectedWrapperStyle]}
			key={"date " + id}
			onPress={() => pickDate(id)}
		>
			<Text size={16} weight="bold" style={SelectedTextStyle}>
				{id + 1}
			</Text>
		</TouchableOpacity>
	);
};
