import styled from 'styled-components/native';
import { TitlePropsType } from './Title';

const TitleStyled = styled.Text<Omit<TitlePropsType, 'text'>>`
  font-family: 'SF Pro Rounded';
  font-size: 26px;
  font-weight: 800;
  line-height: 31px;
  letter-spacing: 0.03em;
  text-align: left;
  color: #2D000A;
	margin-top: ${props => props.marginTop || '0'};
	margin-bottom: ${props => props.marginBot || '0'};
`
export const S = {TitleStyled}