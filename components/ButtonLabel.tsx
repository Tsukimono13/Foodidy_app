import React, { FC } from 'react';
import styled from 'styled-components/native';

type PropsType = {
	label: string
}

export const ButtonLabel: FC<PropsType> = ({ label }) => {
	return (
		<NextButton>
			<ButtonText>
				{label}
			</ButtonText>
		</NextButton>
	);
};

const NextButton = styled.View`
  background: #EE7001;
  padding: 16px 40px;
  border-radius: 24px;
`;
const ButtonText = styled.Text`
  font-family: SF Pro Display;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #FDF0EA;
`;