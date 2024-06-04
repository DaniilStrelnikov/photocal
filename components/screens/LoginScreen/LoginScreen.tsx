import {
	ActivityIndicator,
	ImageBackground,
	SafeAreaView,
	Text,
	View,
} from "react-native";
import style from "./style";
import { Input } from "../../components/Input";
import { Space } from "../../components/Space";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useLogin } from "../../api/useLogin";
import { ScreenLayout } from "../../components/ScreenLayout";

export const LoginScreen = () => {
	const { login, loading } = useLogin();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => login({ email, password });

	return (
		<ScreenLayout>
			<View style={style.wrapper}>
				<View style={style.form}>
					{loading && <ActivityIndicator />}
					<Text style={style.title}>PhotoCal</Text>
					<Space v={20} />
					<Input placeholder="E-mail" value={email} onChangeText={setEmail} />
					<Space v={10} />
					<Input
						placeholder="Пароль"
						secureTextEntry
						value={password}
						onChangeText={setPassword}
					/>
					<Space v={20} />
					<Button title="Продолжить" onPress={handleLogin} />
				</View>
			</View>
		</ScreenLayout>
	);
};
