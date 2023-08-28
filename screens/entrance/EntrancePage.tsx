import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Title } from '../../components/UI/title/Title';
import styled from 'styled-components/native';
import { GoogleSvg }from '../../components/UI/GoogleSvg';
import { AtSvg } from '../../components/UI/AtSvg';
import { ButtonsSignUp } from '../../components/ButtonsSignUp';
import { DescriptionWithLink } from '../../components/DescriptionWithLink';
import { Container } from '../../components/UI/Container';

export type SignUpButtonType = {
	label: string
	icon: React.ReactNode
}

const signUpButtons: SignUpButtonType[] = [
	{label: 'Sign up with Google', icon: <GoogleSvg/>},
	{label: 'Sign up with Email', icon: <AtSvg/>},
]

const privacyLinks = [' Terms of Service', ' Privacy Policy ']
const signUpLink = [' Sign in.']

export const EntrancePage = () => {
	return (
			<Container justifyContent={'flex-start'} marginTop={'128px'} >
				<Title text={'JOIN FOODIDY'} marginBot={'24px'}/>
				{signUpButtons.map((button, index) => (
					<ButtonsSignUp key={index} button={button}/>
				))}
				<DescriptionWithLink textStart={'Already have an account?'} links={signUpLink} style={{marginTop: 44}}/>
				<BgImage source={require('../../assets/images/Ellipse.png')}
												 resizeMode='contain'
				>
					<DescriptionWithLink textStart={'By signing up, you agree to our'}
															 links={privacyLinks}
															 textMiddle={' and acknowledge that our'}
															 textEnd={'applies to you.'}/>
				</BgImage>
			</Container>
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





