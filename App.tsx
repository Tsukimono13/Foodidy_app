import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import {useCallback} from "react";
import * as SplashScreen from 'expo-splash-screen';
import {Onboarding} from "./screens/Onboarding";

//SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'SF Pro Rounded': require('./assets/fonts/FontsFree-Net-SF-Pro-Rounded-Heavy.ttf'),
    'SF Pro Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
    'SF Pro Semibold': require('./assets/fonts/SF-Pro-Display-Semibold.otf'),
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
      <Onboarding/>
    </>
  );
}

