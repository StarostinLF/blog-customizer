'use client';

import styles from './radio-group.module.scss';

import { OptionType } from '@/lib/types';

import Text from '../text/text';
import Option from './option';

export const RadioGroup = (props: {
	name: string;
	options: OptionType[];
	selected: OptionType;
	// eslint-disable-next-line no-unused-vars
	onChange?: (value: OptionType) => void;
	title: string;
}) => {
	const { name, options, selected, onChange, title } = props;

	function handleChange(option: OptionType) {
		onChange?.(option);
	}

	return (
		<div className={styles.container}>
			{title && (
				<Text size={12} weight={800} uppercase>
					{title}
				</Text>
			)}
			<div className={styles.group}>
				{options.map((option) => (
					<Option
						key={option.value}
						groupName={name}
						option={option}
						selected={selected}
						title={option.title}
						value={option.value}
						onChange={() => handleChange(option)}
					/>
				))}
			</div>
		</div>
	);
};
