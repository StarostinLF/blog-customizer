import { useEffect } from 'react';

export const useEnterSubmit = ({
	placeholderRef,
	onChange,
}: {
	onChange: React.Dispatch<React.SetStateAction<boolean>>;
	placeholderRef: React.RefObject<HTMLDivElement | null>;
}) => {
	useEffect(() => {
		const placeholderEl = placeholderRef.current;
		if (!placeholderEl) return;

		const handleEnterKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Enter') onChange((isOpen: boolean) => !isOpen);
		};
		placeholderEl.addEventListener('keydown', handleEnterKeyDown);

		return () => {
			placeholderEl.removeEventListener('keydown', handleEnterKeyDown);
		};
	}, [onChange, placeholderRef]);
};
