import React, { FC } from 'react';
import {S} from './Title_Styles'

export type TitlePropsType = {
	text: string
	marginBot?: string
	marginTop?: string
}

export const Title: FC<TitlePropsType> = ({text, marginBot, marginTop}) => {
	return (
		<S.TitleStyled marginBot={marginBot || '0'} marginTop={marginTop || '0'}>
			{text}
		</S.TitleStyled>
	);
};

