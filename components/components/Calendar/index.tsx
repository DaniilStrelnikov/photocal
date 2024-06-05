import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Wrapper } from "../Wrapper";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { Text } from "../Text";
import style from "./style";
import { Space } from "../Space";
import { PressableIcon } from "../PressableIcon";
import moment from "moment";
import { DateContext } from "../../context/Date";

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
	date: string | number;
	calendar: Date;
	id: number;
	pickDate: (id: number) => void;
	hDays: Date[];
};

type props = {
	dates: number[];
	loading: boolean;
};

export const Calendar = ({ dates, loading }: props) => {
	const { date, setDate } = useContext(DateContext);
	const [hDays, setHDays] = useState<Date[]>([]);
	const momentRef = useRef(moment());

	const [calendar, setCalendar] = useState<Date>({
		year: moment().year(),
		month: moment().month(),
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

	useEffect(() => {
		if (!dates) return;

		let days: Date[] = dates?.map((el) => {
			const m = moment.unix(el);

			return {
				day: m.date(),
				month: m.month(),
				year: m.year(),
			};
		});

		days = days?.filter(
			(date, index, self) =>
				index ===
				self.findIndex(
					(t) =>
						t.day === date.day && t.month === date.month && t.year === date.year
				)
		);

		setHDays(days);
	}, [dates]);

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
		const m = moment().year(calendar.year).month(calendar.month).date(id);
		setDate(m.unix());
	};

	return (
		<>
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
							date={date}
							id={id}
							pickDate={handlePickDay}
							hDays={hDays}
							key={"day-" + id}
						/>
					))}
				</View>

				{loading && (
					<View style={style.loader}>
						<ActivityIndicator color={"white"} size={"large"} />
					</View>
				)}
			</Wrapper>
		</>
	);
};

const Day = ({ date, calendar, id, pickDate, hDays }: DayProps) => {
	const mDate: Date = {
		day: moment.unix(date).date(),
		month: moment.unix(date).month(),
		year: moment.unix(date).year(),
	};

	const compareDate = (date: any) =>
		date.month === calendar.month &&
		date.year === calendar.year &&
		date.day == id + 1;

	const isHDay = !!hDays?.find((el: any) => compareDate(el));
	const isSelectedDay = compareDate(mDate);
	const SelectedWrapperStyle = isSelectedDay
		? style.activeDate
		: isHDay && style.pickedDate;
	const SelectedTextStyle = isSelectedDay
		? style.activeDate
		: isHDay && style.pickedDate;

	return (
		<TouchableOpacity
			style={[style.date, SelectedWrapperStyle]}
			key={"date " + id}
			onPress={() => pickDate(id + 1)}
		>
			<Text size={16} weight="bold" style={SelectedTextStyle}>
				{id + 1}
			</Text>
		</TouchableOpacity>
	);
};
