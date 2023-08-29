import React, { useMemo, useRef, FC } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Text } from 'react-native';

type PropsType = {
	setIsOpen: (value: boolean)=>void
}

export const BottomSheetInfo:FC<PropsType> = ({setIsOpen}) => {

	const snapPoints = useMemo(() => ['50%', '90%'], []);
	const bottomSheetRef = useRef<BottomSheet>(null);
	return (
		<BottomSheet
			ref={bottomSheetRef}
			index={-1}
			snapPoints={snapPoints}
			enablePanDownToClose={true}
			onClose={() => {
				setIsOpen(false);
			}}

		>
			<BottomSheetView style={{flex: 1, alignItems: 'center'}}>
				<Text>Awesome 🎉</Text>
			</BottomSheetView>
		</BottomSheet>
	);
};

