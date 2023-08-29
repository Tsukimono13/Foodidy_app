import React, { FC, useState } from 'react';
import { SignUpButtonType } from '../screens/signup/SignUp';
import styled from 'styled-components/native';

type PropsType = {
	button: SignUpButtonType
}

export const ButtonsSignUp:FC<PropsType> = ({button}) => {
	const {label, icon} = button
	const [isPressed, setIsPressed] = useState(false);
	return (
		<ButtonSign activeOpacity={1}
								style={{ backgroundColor: isPressed ? '#EE7001' : 'transparent' }}
								onPress={() => setIsPressed(!isPressed)}>
			<ButtonContainer>
				{icon}
				<NameButton style={{ color: isPressed ? '#FFFAF8' : '#2D000A' }}>
					{label}
				</NameButton>
			</ButtonContainer>
		</ButtonSign>
	);
};


const ButtonSign = styled.TouchableOpacity`
  padding: 16px 24px;
	border-radius: 24px;
	border: 1px solid #EE7001;
	width: 90%;
	margin-top: 20px;
`
const NameButton = styled.Text`
  font-family: SF Pro Display;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.01em;
`
const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 51px;
`