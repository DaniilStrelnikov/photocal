import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/LoginScreen/LoginScreen";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import { FinishScreen } from "../screens/FinishScreen/FinishScreen";

export type MainStackNavProps = {
	login: undefined;
	home: undefined;
	finish: undefined;
};

const Stack = createNativeStackNavigator<MainStackNavProps>();

export const MainNavigator = () => {
	const { auth } = useContext(AuthContext);

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{!auth ? <Stack.Screen name="login" component={LoginScreen} /> : null}
				{privateStack(auth)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const privateStack = (auth: boolean) =>
	auth ? (
		<>
			<Stack.Screen name="home" component={HomeScreen} />
			<Stack.Screen name="finish" component={FinishScreen} />
		</>
	) : null;
