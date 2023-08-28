import React, { FC, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type PropsType = {
	link: string
}

export const Link:FC<PropsType> = ({link}) => {
	const [isPressed, setIsPressed] = useState(false);
	return (
		<TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
			<LinkStyled style={{ color: isPressed ? '#87001E' : '#EE7001' }}>{link}</LinkStyled>
		</TouchableOpacity>
	);
};

const LinkStyled = styled.Text`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: center;
`