import { MainNavigator } from "./components/navigation";
import { AuthContextProvider } from "./components/context/Auth";
import {
	useFonts,
	Exo2_100Thin,
	Exo2_400Regular,
	Exo2_600SemiBold,
} from "@expo-google-fonts/exo-2";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DateContextProvider } from "./components/context/Date";

SplashScreen.preventAutoHideAsync();

export default function App() {
	let [fontsLoaded] = useFonts({
		Exo2_100Thin,
		Exo2_400Regular,
		Exo2_600SemiBold,
	});

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	return (
		<GestureHandlerRootView>
			<BottomSheetModalProvider>
				<DateContextProvider>
					<AuthContextProvider>
						<MainNavigator />
					</AuthContextProvider>
				</DateContextProvider>
			</BottomSheetModalProvider>
		</GestureHandlerRootView>
	);
}
