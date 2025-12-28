import { useEffect } from 'react';

import { OptionType } from '@/lib/types';

export const useEnterOptionSubmit = ({
	onClick,
	value,
	optionRef,
}: {
	// eslint-disable-next-line no-unused-vars
	onClick: (value: OptionType['value']) => void;
	value: OptionType['value'];
	optionRef: React.RefObject<HTMLLIElement | null>;
}) => {
	useEffect(() => {
		const option = optionRef.current;
		if (!option) return;

		const handleEnterKeyDown = (event: KeyboardEvent) => {
			if (document.activeElement === option && event.key === 'Enter')
				onClick(value);
		};

		option.addEventListener('keydown', handleEnterKeyDown);

		return () => {
			option.removeEventListener('keydown', handleEnterKeyDown);
		};
	}, [value, onClick, optionRef]);
};
