import React, { useCallback, useMemo, useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Title } from '../../components/UI/title/Title';
import styled from 'styled-components/native';
import { GoogleSvg }from '../../components/UI/GoogleSvg';
import { AtSvg } from '../../components/UI/AtSvg';
import { ButtonsSignUp } from '../../components/ButtonsSignUp';
import { DescriptionWithLink } from '../../components/DescriptionWithLink';
import { Container } from '../../components/UI/Container';
import BottomSheet, { BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export type SignUpButtonType = {
	label: string
	icon: React.ReactNode
}

type TermsType = {
	title: string
	body:string
}

const serviceTerms: TermsType[] = [
	{title: 'Foodidy Terms of Service\n', body: 'Last Updated: 28.08.2023\n\n' +
			'These Terms of Use ("Terms") govern your use of the Foodidy mobile application (the "App") operated by Foodidy ("Company," "we," "us," or "our"). By accessing or using the App, you agree to these Terms. If you do not agree with any part of these Terms, you should not use the App.'},
	{title: '1. Acceptance of Terms', body: 'By accessing or using the App, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the App.'},
	{title: '2. Use of the App', body: '(a) You must be at least 12 years old to use the App.\n' +
			'(b) You agree to use the App only for its intended purpose and in compliance with all applicable laws and regulations.\n' +
			'(c) You are responsible for maintaining the confidentiality of your account information and are liable for all activities that occur under your account.'},
	{title: '3. User Accounts', body: '(a) In order to access certain features of the App, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.\n' +
			'(b) You are responsible for safeguarding your account credentials and for any activity that occurs under your account.'},
	{title: '4. User-Generated Content', body: '(a) By submitting, posting, or sharing any content on the App (such as reviews, comments, or photos), you grant Foodidy a non-exclusive, worldwide, royalty-free, perpetual, and irrevocable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content.\n' +
			'(b) You agree not to post or transmit any content that is unlawful, defamatory, abusive, obscene, or otherwise objectionable.'},
	{title: '5. Intellectual Property', body: '(a) The App and its content, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the property of Foodidy or its licensors and are protected by copyright, trademark, and other intellectual property laws.\n' +
			'(b) You may not modify, distribute, reproduce, publish, license, create derivative works from, transfer, or sell any part of the App or its content.'},
	{title: '6. Privacy', body: 'Your privacy is important to us. Please review our Privacy Policy  to understand how we collect, use, and disclose information.'},
	{title: '7. Disclaimers', body: 'The App is provided on an "as-is" and "as available" basis. We make no warranties or representations regarding the accuracy, reliability, or availability of the App.'},
	{title: '8. Limitation of Liability', body: 'To the extent permitted by applicable law, Foodidy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the App.'},
	{title: '9. Governing Law', body: 'These Terms shall be governed by and construed in accordance with the laws of Nibiru. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Nibiru.'},
	{title: '10. Changes to Terms', body: 'We reserve the right to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically. By continuing to use the App after any changes to these Terms, you agree to be bound by such changes.'},
]

const policy: TermsType[] = [
	{title: 'Foodidy Privacy Policy\n', body: 'Last Updated: 28.08.2023\n\n' +
			'This Privacy Policy ("Policy") explains how Foodidy ("Company," "we," "us," or "our") collects, uses, and discloses information about users ("you" or "your") of the Foodidy mobile application (the "App"). By using the App, you agree to the practices described in this Policy.'},
	{title: '1. Information We Collect', body: '(a) Information You Provide: When you create an account, place an order, submit reviews, or interact with the App\'s features, we may collect personal information such as your name, email address, phone number, location data, and payment details.(b) Automatically Collected Information: We may automatically collect certain information about your device, usage patterns, and browsing activity, including IP address, device type, operating system, and app interactions.\n' +
			'(c) Cookies and Similar Technologies: We may use cookies and similar technologies to collect information about your preferences, actions, and usage patterns.'},
	{title: '2. How We Use Your Information', body: '(a) We use your information to provide and improve the App\'s services, process transactions, respond to your inquiries, and send you notifications.\n' +
			'(b) We may use your information to personalize your experience, such as suggesting relevant restaurants or dishes.\n' +
			'(c) We may use your information to communicate with you, including sending promotional offers and updates.\n' +
			'(d) Your data may be used for analytical purposes to understand user behavior and improve the App\'s performance.'},
	{title: '3. How We Disclose Your Information', body: 'Hmgngnng'},
	{title: '1.fngng', body: '(a) We may share your information with third-party service providers that assist us in providing and improving the App\'s services, such as payment processors and delivery partners.\n' +
			'(b) We may share your information with restaurants or vendors to fulfill your orders.\n' +
			'(c) We may share aggregated, anonymized data for analytics and market research purposes.\n' +
			'(d) We may disclose your information if required by law or to protect our rights, privacy, safety, or property.'},
	{title: '4. Data Security', body: 'We implement reasonable security measures to protect your information from unauthorized access, loss, misuse, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure.'},
	{title: '5. Your Choices', body: 'You can review and update your account information by accessing your profile settings in the App. You can also unsubscribe from marketing communications by following the instructions provided in the communication.'},
	{title: '6. Children\'s Privacy', body: 'The App is not intended for use by children under the age of 12. We do not knowingly collect personal information from children.'},
	{title: '7. Third-Party Links and Servicesg', body: 'The App may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices of such third parties.g'},
	{title: '8. Changes to this Privacy Policy', body: 'We reserve the right to modify this Policy at any time. Any changes will be effective when the revised Policy is posted. Your continued use of the App after such changes constitutes your acceptance of the revised Policy.'},
	{title: '8. Changes to this Privacy Policy', body: 'Hmgngnng'},
	{title: '9. Contact Us', body: 'If you have any questions or concerns about this Privacy Policy, please contact us at foodidy@gmail.ru.'},
]



const signUpButtons: SignUpButtonType[] = [
	{label: 'Sign up with Google', icon: <GoogleSvg/>,},
	{label: 'Sign up with Email', icon: <AtSvg/>},
]

const privacyLinks = [' Terms of Service', ' Privacy Policy ']
const signUpLink = [' Sign in.']

export const SignUp = () => {
	const bottomSheetRef = useRef<BottomSheet>(null);
	const [isOpen, setIsOpen] = useState(false);
	const snapPoints = useMemo(() => ['50%', '90%'], []);
	const [bottomSheetContent, setBottomSheetContent] = useState<TermsType[]>([]);

	const handleSheetChanges = useCallback((index: number) => {
		bottomSheetRef.current?.snapToIndex(index);
	}, []);


	const openTermsSheet = () => {
		setBottomSheetContent(serviceTerms);
		setIsOpen(true);
		handleSheetChanges(1);
	};

	// Функция для открытия BottomSheet с Privacy Policy
	const openPrivacySheet = () => {
		setBottomSheetContent(policy);
		setIsOpen(true);
		handleSheetChanges(1);
	};

	return (
		<GestureHandlerRootView style={[styles.container, { backgroundColor: isOpen ? 'grey' : 'white' }]}>

			<Container justifyContent={'flex-start'}>
				<Title text={'JOIN FOODIDY'} marginBot={'24px'} marginTop={'128px'}/>
				{signUpButtons.map((button, index) => (
					<ButtonsSignUp key={index} button={button}/>
				))}
				<DescriptionWithLink textStart={'Already have an account?'} links={signUpLink} style={{marginTop: 44}}/>
				<BgImage source={require('../../assets/images/Ellipse.png')}
												 resizeMode='contain'
				>
					{/*<DescriptionWithLink textStart={'By signing up, you agree to our'}
															 links={privacyLinks}
															 textMiddle={' and acknowledge that our'}
															 textEnd={'applies to you.'}
															 handleSheetChanges={handleSheetChanges}
					/>*/}

					<TextInfo>By signing up, you agree to our<TouchableOpacity onPress={openTermsSheet}><LinkStyled> Terms of Service</LinkStyled>
					</TouchableOpacity> and acknowledge that our<TouchableOpacity onPress={openPrivacySheet}><LinkStyled> Privacy Policy </LinkStyled>
					</TouchableOpacity>applies to you.
					</TextInfo>

				</BgImage>

				<BottomSheet
					ref={bottomSheetRef}
					index={isOpen ? 1 : -1}
					snapPoints={snapPoints}
					enablePanDownToClose={true}
					onClose={() => {
						setIsOpen(false);
					}}
				>
					<BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
						{bottomSheetContent.map((item, index) => (
							<View key={index} style={{padding: 17}}>
								<TitlePolicy>{item.title}</TitlePolicy>
								<BodyText>{item.body}</BodyText>
							</View>
						))}
					</BottomSheetScrollView >
				</BottomSheet>

			</Container>
		</GestureHandlerRootView>

	)
};

const BgImage = styled.ImageBackground`
  width: 100%;
  height: 250px;
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center
`


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {

	}
});

const TextInfo = styled.Text`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: center;
	color: #2D000A;
`

const LinkStyled = styled.Text`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: center;
`

const TitlePolicy = styled.Text`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #2D000A;
	margin-bottom: 4px;
`

const BodyText = styled.Text`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #2D000A;
`