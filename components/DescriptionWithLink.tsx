import React, { FC } from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import { Link } from './Link';
import styled from 'styled-components/native';

type PropsType = {
	textStart?: string
	textMiddle?: string
	textEnd?: string
	links: string[]
	style?: ViewStyle
}

export const DescriptionWithLink: FC<PropsType> = ({textStart, links, textEnd, style, textMiddle}) => {
	return (
		<View style={style}>
			<TextInfo>{textStart}
				{links.map((link, index) => (
					<>
						<Link link={link} key={index}/>
						{index < links.length - 1 && textMiddle}
					</>
				))}
				{textEnd}
			</TextInfo>
		</View>
	);
};


const TextInfo = styled.Text`
  font-family: SF Pro Display;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: center;
	color: #2D000A;
`