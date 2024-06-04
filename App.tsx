import { MainNavigator } from "./components/navigation";
import { AuthContextProvider } from "./components/context/Auth";

export default function App() {
	return (
		<AuthContextProvider>
			<MainNavigator />
		</AuthContextProvider>
	);
}
