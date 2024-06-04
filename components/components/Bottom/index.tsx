import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";

type props = {
	children: React.ReactNode;
};

export const Bottom = ({ children }: props) => {
	const bottomSheetRef = useRef<BottomSheet>(null);

	return (
		<BottomSheet snapPoints={["25%", "88%"]} ref={bottomSheetRef}>
			<BottomSheetView>{children}</BottomSheetView>
		</BottomSheet>
	);
};
