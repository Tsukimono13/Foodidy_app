import React, { useState, useRef, useMemo } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Onboarding } from '../../components/onbording/Onboarding';



export const Home = () => {
	const [showHomePage, setShowHomePage] = useState(false);

	if (!showHomePage) {
		return <Onboarding setShowHomePage={setShowHomePage} />;
	}


	return (
		<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Main Page</Text>
		</SafeAreaView>
	);
};


