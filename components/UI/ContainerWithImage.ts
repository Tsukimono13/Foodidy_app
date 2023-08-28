import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

type PropsType = {
	paddingT?: string
	bg?: string

}

export const ContainerWithImage = styled(ImageBackground)<PropsType>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${props => props.paddingT || '0'};
	background-color: ${props => props.bg || 'white'};
`;