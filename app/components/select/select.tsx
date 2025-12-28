'use client';

import styles from './select.module.scss';

import { useState, useRef } from 'react';
import clsx from 'clsx';

import { OptionType } from '@/lib/types';
import { isFontFamilyClass } from './helpers/is-font-family-class';
import { useEnterSubmit } from './hooks/use-enter-submit';
import { useOutsideClickClose } from './hooks/use-outside-click-close';

import Text from '../text/text';
import Option from './option';

import ArrowDownIcon from '@/app/icons/arrow-down-icon';

export default function Select(props: {
	selected: OptionType | null;
	options: OptionType[];
	placeholder?: string;
	// eslint-disable-next-line no-unused-vars
	onChange?: (selected: OptionType) => void;
	onClose?: () => void;
	title?: string;
}) {
	const { options, placeholder, selected, onChange, onClose, title } = props;

	const [isMenuOpen, setIsOpen] = useState<boolean>(false);

	const rootRef = useRef<HTMLDivElement>(null);
	const placeholderRef = useRef<HTMLDivElement>(null);

	useOutsideClickClose({
		isMenuOpen,
		rootRef,
		onClose,
		onChange: setIsOpen,
	});

	useEnterSubmit({
		placeholderRef,
		onChange: setIsOpen,
	});

	function handleOptionClick(option: OptionType) {
		setIsOpen(false);
		onChange?.(option);
	}
	function handlePlaceHolderClick() {
		setIsOpen((isMenuOpen) => !isMenuOpen);
	}

	return (
		<div className={styles.container}>
			{title && (
				<Text size={12} weight={800} uppercase>
					{title}
				</Text>
			)}
			<div
				ref={rootRef}
				className={styles.selectWrapper}
				data-is-active={isMenuOpen}
				data-testid={'selectWrapper'}
			>
				<ArrowDownIcon
					aria-label={'иконка стрелочки'}
					className={clsx(styles.arrow, { [styles.arrow_open]: isMenuOpen })}
					color={'black'}
					size={24}
				/>
				<div
					ref={placeholderRef}
					className={clsx(
						styles.placeholder,
						styles[selected?.optionClassName || ''],
					)}
					data-selected={!!selected?.value}
					role={'button'}
					tabIndex={0}
					onClick={handlePlaceHolderClick}
				>
					<Text
						family={
							isFontFamilyClass(selected?.className)
								? selected?.className
								: undefined
						}
					>
						{selected?.title || placeholder}
					</Text>
				</div>
				{isMenuOpen && (
					<ul className={styles.select} data-testid={'selectDropdown'}>
						{options
							.filter((option) => selected?.value !== option.value)
							.map((option) => (
								<Option
									key={option.value}
									option={option}
									onClick={() => handleOptionClick(option)}
								/>
							))}
					</ul>
				)}
			</div>
		</div>
	);
}
