'use client';

import styles from './arrow-button.module.scss';

import clsx from 'clsx';

import ArrowIcon from '@/app/icons/arrow-icon';

export default function ArrowButton({
	onClick,
	isMenuOpen,
}: {
	// eslint-disable-next-line no-unused-vars
	onClick?: (state: boolean) => void;
	isMenuOpen?: boolean;
}) {
	function onClickHandler() {
		onClick?.(!isMenuOpen);
	}

	return (
		<div
			aria-label={'Открыть/Закрыть форму параметров статьи'}
			className={`${styles.container} ${
				isMenuOpen ? styles.container_open : ''
			}`}
			role={'button'}
			tabIndex={0}
			onClick={(e: React.MouseEvent) => {
				e.stopPropagation();

				onClickHandler();
			}}
		>
			<ArrowIcon
				aria-label={'иконка стрелочки'}
				className={clsx(styles.arrow, isMenuOpen && styles.arrow_open)}
				color={'white'}
				size={48}
			/>
		</div>
	);
}
