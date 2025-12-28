import { useEffect } from 'react';

export function useClose({
	isMenuOpen,
	onClose,
	rootRef,
}: {
	isMenuOpen: boolean;
	onClose: () => void;
	rootRef: React.RefObject<HTMLFormElement | null>;
}) {
	useEffect(() => {
		if (!isMenuOpen) return;

		function handleClickOutside(event: MouseEvent) {
			const { target } = event;
			const isOutsideClick =
				target instanceof Node &&
				rootRef.current &&
				!rootRef.current.contains(target);

			if (isOutsideClick) onClose();
		}

		function handleEscape(e: KeyboardEvent) {
			if (e.key === 'Escape') onClose();
		}

		document.addEventListener('keydown', handleEscape);
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isMenuOpen, onClose, rootRef]);
}
