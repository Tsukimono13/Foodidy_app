import React, { FC } from 'react';
import { Entypo } from '@expo/vector-icons';
import { SlidesType } from '../data/slides';
import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

type PropsType = {
	slide: SlidesType
	setShowHomePage: (data: boolean) => void
}

export const OnboardingContent: FC<PropsType> = ({ slide, setShowHomePage }) => {
	const { id, imageBack, image, title, description } = slide;
	return (
		<MainContainer source={imageBack} resizeMode='cover'>
			{id === 1 || id === 2
				?
				<Entypo name='cross' size={24} color='#2D000A'
								style={{ position: 'absolute', top: 56, right: 20 }}
								onPress={() => {
									setShowHomePage(true);
								}}
				/>
				: null
			}
			<Title>{title}</Title>
			<Description>{description}</Description>
			<ExampleImage source={image} />
		</MainContainer>
	);
};


const Title = styled.Text`
  font-family: 'SF Pro Rounded';
  font-size: 26px;
  font-weight: 800;
  line-height: 31px;
  letter-spacing: 0.03em;
  text-align: left;
  color: #2D000A;
`;
const Description = styled.Text`
  font-family: SF Pro Display;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #2D000A;
  max-width: 343px;
  margin-top: 16px;
  margin-bottom: 36px;
`;

const ExampleImage = styled.Image`
  width: 343px;
  height: 91px;
`;

const MainContainer = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 330px;
`;
