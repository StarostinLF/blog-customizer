import { useEffect, type RefObject } from 'react';

export const useOutsideClickClose = ({
	isMenuOpen,
	rootRef,
	onClose,
	onChange,
}: {
	isMenuOpen: boolean;
	// eslint-disable-next-line no-unused-vars
	onChange: (newValue: boolean) => void;
	onClose?: () => void;
	rootRef: RefObject<HTMLElement | null>;
}) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event;
			if (target instanceof Node && !rootRef.current?.contains(target)) {
				if (isMenuOpen) onClose?.();

				onChange(false);
			}
		};

		window.addEventListener('mousedown', handleClick);

		return () => {
			window.removeEventListener('mousedown', handleClick);
		};
	}, [onClose, onChange, isMenuOpen, rootRef]);
};
