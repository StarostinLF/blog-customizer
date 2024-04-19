import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
interface OnClick {
	onClick?: (state: boolean) => void;
	isOpen?: boolean;
}

export const ArrowButton = ({ onClick, isOpen }: OnClick) => {
	const onClickHandler = () => {
		onClick?.(!isOpen);
	};

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={`${styles.container} ${isOpen ? styles.container_open : ''}`}
			onClick={(e: React.MouseEvent) => {
				e.stopPropagation();
				onClickHandler();
			}}>
			<img src={arrow} alt='иконка стрелочки' className={styles.arrow} />
		</div>
	);
};
