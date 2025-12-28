'use client';

import styles from './radio-group.module.scss';

import { useRef } from 'react';

import { OptionType } from '@/lib/types';
import { useEnterSubmit } from './hooks/use-enter-submit';

import Text from '../text/text';

export default function Option(props: {
	value: OptionType['value'];
	title: OptionType['title'];
	selected: OptionType;
	groupName: string;
	// eslint-disable-next-line no-unused-vars
	onChange?: (option: OptionType) => void;
	option: OptionType;
}) {
	const { value, title, selected, groupName, onChange, option } = props;

	const optionRef = useRef<HTMLDivElement>(null);

	function handleChange() {
		onChange?.(option);
	}

	useEnterSubmit({ onChange, option });

	const inputId = `${groupName}_radio_item_with_value__${value}`;
	const isChecked = value === selected.title;

	return (
		<div
			key={value}
			ref={optionRef}
			className={styles.item}
			data-checked={isChecked}
			data-testid={inputId}
			tabIndex={0}
		>
			<input
				className={styles.input}
				id={inputId}
				name={groupName}
				tabIndex={-1}
				type="radio"
				value={value}
				onChange={handleChange}
			/>
			<label className={styles.label} htmlFor={inputId}>
				<Text size={18} uppercase>
					{title}
				</Text>
			</label>
		</div>
	);
}
