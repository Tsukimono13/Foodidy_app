import styled from 'styled-components/native';

type PropsType = {
	justifyContent?: string
	alignItem?: string
	marginTop?: string
}

export const Container = styled.SafeAreaView<PropsType>`
  flex: 1;
  background-color: #FFFAF8;
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItem || 'center'};
  margin-top: ${props => props.marginTop || '0'};
`;