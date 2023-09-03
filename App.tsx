import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import { Home } from './screens/home/Home';
import { SignUp } from './screens/signup/SignUp';
import ServiceTerms from './components/bottomSheet/serviceTerms/ServiceTerms';

//SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded] = useFonts({
		'SF Pro Rounded': require('./assets/fonts/FontsFree-Net-SF-Pro-Rounded-Heavy.ttf'),
		'SF Pro Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
		'SF Pro Semibold': require('./assets/fonts/SF-Pro-Display-Semibold.otf')
	});

	/*const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}*/

	return (
		<>
			<SignUp />
		</>
	);
}

