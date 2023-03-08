export type Colors = 'black' | 'white' | 'gray-100' | 'gray-200' | 'gray-300' | 'gray-400' | 'gray-500' | 'red' | 'orange'
	| 'yellow' | 'green-100' | 'green-200' | 'green-300' | 'blue-100' | 'blue-200' | 'blue-300' | 'purple-100' | 'purple-200';

export const COLORS: Record<Colors, string> = {
	'black': '#252525',
	'white': '#FFFFFF',

	'gray-100': '#F2F2F2',
	'gray-200': '#E0E0E0',
	'gray-300': '#BDBDBD',
	'gray-400': '#828282',
	'gray-500': '#4F4F4F',

	'red': '#EB5757',
	'orange': '#F2994A',
	'yellow': '#F2C94C',

	'green-100': '#6FCF97',
	'green-200': '#27AE60',
	'green-300': '#219653',

	'blue-100': '#56CCF2',
	'blue-200': '#2D9CDB',
	'blue-300': '#2F80ED',

	'purple-100': '#BB6BD9',
	'purple-200': '#9B51E0',
};

export const COLORS_VARIANTS = Object.keys(COLORS) as Colors[];
