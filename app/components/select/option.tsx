'use client';

import styles from './select.module.scss';

import { useRef } from 'react';
import type { MouseEventHandler } from 'react';
import clsx from 'clsx';

import { OptionType } from '@/lib/types';
import { isFontFamilyClass } from './helpers/is-font-family-class';
import { useEnterOptionSubmit } from './hooks/use-enter-option-submit';

import Text from '../text/text';

import WideIcon from '@/app/icons/wide-icon';
import NarrowIcon from '@/app/icons/narrow-icon';

export default function Option(props: {
	option: OptionType;
	// eslint-disable-next-line no-unused-vars
	onClick: (value: OptionType['value']) => void;
}) {
	const {
		option: { value, title, optionClassName, className },
		onClick,
	} = props;
	const optionRef = useRef<HTMLLIElement>(null);

	function handleClick(
		clickedValue: OptionType['value'],
	): MouseEventHandler<HTMLLIElement> {
		return () => {
			onClick(clickedValue);
		};
	}

	useEnterOptionSubmit({
		optionRef,
		value,
		onClick,
	});

	return (
		<li
			ref={optionRef}
			className={clsx(styles.option, styles[optionClassName || ''])}
			data-testid={`select-option-${value}`}
			tabIndex={0}
			value={value}
			onClick={handleClick(value)}
		>
			{optionClassName === 'option-wide' && (
				<span className={styles.optionIcon} aria-hidden>
					<WideIcon color={'black'} size={25} />
				</span>
			)}
			{optionClassName === 'option-narrow' && (
				<span className={styles.optionIcon} aria-hidden>
					<NarrowIcon color={'black'} size={25} />
				</span>
			)}
			<Text family={isFontFamilyClass(className) ? className : undefined}>
				{title}
			</Text>
		</li>
	);
}
