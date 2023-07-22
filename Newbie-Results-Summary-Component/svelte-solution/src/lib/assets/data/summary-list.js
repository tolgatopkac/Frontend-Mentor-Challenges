import { IconMemory, IconReaction, IconVerbal, IconVisual } from '$lib/assets/images';

export let summaryList = [
	{
		icon: IconReaction,
		bgcolor: 'bg-red-50',
		textcolor: 'text-red-500',
		title: 'Reaction',
		score: '80',
		total: '100'
	},
	{
		icon: IconMemory,
		bgcolor: 'bg-orange-50',
		textcolor: 'text-amber-400',
		title: 'Memory',
		score: '92',
		total: '100'
	},
	{
		icon: IconVerbal,
		title: 'Verbal',
		bgcolor: 'bg-teal-50',
		textcolor: 'text-emerald-500',
		score: '61',
		total: '100'
	},
	{
		icon: IconVisual,
		title: 'Visual',
		bgcolor: 'bg-violet-50',
		textcolor: 'text-indigo-700',
		score: '73',
		total: '100'
	}
];
