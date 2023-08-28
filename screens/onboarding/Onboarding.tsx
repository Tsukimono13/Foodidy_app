import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { slides } from '../../data/slides';

import { OnboardingContent } from '../../components/OnboardingContent';
import { ButtonLabel } from '../../components/ButtonLabel';


export const Onboarding = () => {
	const [showHomePage, setShowHomePage] = useState(false);

	if (!showHomePage) {
		return <AppIntroSlider
			data={slides}
			renderItem={({ item }) => {
				return <OnboardingContent slide={item} setShowHomePage={setShowHomePage}/>
			}}

			activeDotStyle={{ backgroundColor: '#EE7001' }}
			dotStyle={{ backgroundColor: 'rgba(238,112,1,0.4)' }}
			bottomButton={true}
			renderNextButton={() => <ButtonLabel label={'Next'}/>}
			renderDoneButton={() => <ButtonLabel label={'Get Started'}/>}
			onDone={() => {
				setShowHomePage(true);
			}}
		/>;
	}

	return (
		<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Main Page</Text>
		</SafeAreaView>
	);
};


