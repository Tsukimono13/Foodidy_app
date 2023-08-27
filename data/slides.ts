export type SlidesType = {
	id: number
	imageBack: string
	title: string
	description: string
	image: string
}

export const slides: SlidesType[] = [
	{
		id: 1,
		imageBack: require('../assets/images/onboarding/back1.png'),
		title: 'WELCOME TO FOODIDY!',
		description: 'Our app will open to you interesting facts about your food.',
		image: require('../assets/images/onboarding/example1.png')
	},
	{
		id: 2,
		imageBack: require('../assets/images/onboarding/back2.png'),
		title: 'DISCOVER NEW',
		description: 'Find out what your favorite foods and popular dishes are made of.',
		image: require('../assets/images/onboarding/example2.png')
	},
	{
		id: 3,
		imageBack: require('../assets/images/onboarding/back3.png'),
		title: 'MIX INGREDIENTS',
		description: 'See what dishes you can cook from products in your fridge.',
		image: require('../assets/images/onboarding/example3.png')
	}
];
