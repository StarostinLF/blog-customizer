import { TIcon } from '@/lib/types';

export default function WideIcon({
	size = 25,
	color = 'black',
	...props
}: TIcon) {
	return (
		<svg
			fill={'none'}
			height={size}
			viewBox={'0 0 25 25'}
			width={size}
			xmlns={'http://www.w3.org/2000/svg'}
			{...props}
		>
			<path
				d={'M16.6665 12.5H22.9165'}
				stroke={color}
				strokeLinecap={'round'}
				strokeLinejoin={'round'}
				strokeWidth={1.5}
			/>
			<path
				d={'M8.3335 12.5H2.0835'}
				stroke={color}
				strokeLinecap={'round'}
				strokeLinejoin={'round'}
				strokeWidth={1.5}
			/>
			<path
				d={'M12.5 2.08337V4.16671'}
				stroke={color}
				strokeLinecap={'round'}
				strokeLinejoin={'round'}
				strokeWidth={1.5}
			/>
			<path
				d={'M12.5 8.33337V10.4167'}
				stroke={color}
				strokeLinecap={'round'}
				strokeLinejoin={'round'}
				strokeWidth={1.5}
			/>
			<path
				d={'M12.5 14.5834V16.6667'}
				stroke={color}
				strokeLinecap={'round'}
				strokeLinejoin={'round'}
				strokeWidth={1.5}
			/>
			<path
				d={'M12.5 20.8334V22.9167'}
				stroke={color}
				strokeLinecap={'round'}
				strokeLinejoin={'round'}
				strokeWidth={1.5}
			/>
			<path
				d={'M19.7915 15.625L22.9165 12.5L19.7915 9.375'}
				stroke={color}
				strokeLinecap={'round'}
				strokeLinejoin={'round'}
				strokeWidth={1.5}
			/>
			<path
				d={'M5.2085 9.375L2.0835 12.5L5.2085 15.625'}
				stroke={color}
				strokeLinecap={'round'}
				strokeLinejoin={'round'}
				strokeWidth={1.5}
			/>
		</svg>
	);
}
