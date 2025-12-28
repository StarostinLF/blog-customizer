import { TIcon } from '@/lib/types';

export default function ArrowIcon({
	size = 48,
	color = 'white',
	...props
}: TIcon) {
	return (
		<svg
			fill={'none'}
			height={size}
			viewBox={'0 0 48 48'}
			width={size}
			xmlns={'http://www.w3.org/2000/svg'}
			{...props}
		>
			<path
				d={'M24 38L10 24L24 10'}
				stroke={color}
				strokeLinecap={'round'}
				strokeLinejoin={'round'}
				strokeWidth={1.5}
			/>
			<path
				d={'M38 24H10'}
				stroke={color}
				strokeLinecap={'round'}
				strokeLinejoin={'round'}
				strokeWidth={1.5}
			/>
		</svg>
	);
}
