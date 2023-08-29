import React, { FC } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { slides } from '../../data/slides';
import { OnboardingContent } from '../OnboardingContent';
import { ButtonLabel } from '../ButtonLabel';

type PropsType = {
	setShowHomePage: any
}
export const Onboarding:FC<PropsType> = ({setShowHomePage}) => {
	return (
		<AppIntroSlider
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
		/>
	);
};
