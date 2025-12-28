import { useEffect, useRef } from 'react';

import { OptionType } from '@/lib/types';

export const useEnterSubmit = ({
	onChange,
	option,
}: {
	// eslint-disable-next-line no-unused-vars
	onChange?: (option: OptionType) => void;
	option: OptionType;
}) => {
	const optionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const optionHtml = optionRef.current;

		if (!optionHtml) return;

		function handleEnterKeyDown(event: KeyboardEvent) {
			if (document.activeElement === optionHtml && event.key === 'Enter')
				onChange?.(option);
		}

		optionHtml.addEventListener('keydown', handleEnterKeyDown);

		return () => {
			optionHtml.removeEventListener('keydown', handleEnterKeyDown);
		};
	}, [onChange, option]);
};
