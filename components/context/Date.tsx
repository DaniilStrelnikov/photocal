import React from "react";
import { useState } from "react";
import moment from "moment";

type initialType = {
	date: number | string;
	setDate: (v: number | string) => void;
};

type props = {
	children: React.ReactNode;
};

const initial: initialType = {
	date: moment.now(),
	setDate: (v) => undefined,
};

export const DateContext = React.createContext(initial);

export const DateContextProvider = ({ children }: props) => {
	const [date, setDate] = useState(moment().unix());

	return (
		<DateContext.Provider value={{ date, setDate }}>
			{children}
		</DateContext.Provider>
	);
};
