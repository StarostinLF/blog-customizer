import { TIcon } from '@/lib/types';

export default function ArrowDownIcon({
	size = 24,
	color = 'black',
	...props
}: TIcon) {
	return (
		<svg
			fill={'none'}
			height={size}
			viewBox={'0 0 24 24'}
			width={size}
			xmlns={'http://www.w3.org/2000/svg'}
			{...props}
		>
			<path
				d={'M6 9L12 15L18 9'}
				stroke={color}
				strokeLinecap={'round'}
				strokeLinejoin={'round'}
				strokeWidth={2}
			/>
		</svg>
	);
}
