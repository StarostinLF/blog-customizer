import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from '../text';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, useRef, useState } from 'react';
import { Select } from '../select';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Separator } from '../separator';
import { RadioGroup } from '../radio-group';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';

interface ArticleParamsFormProps {
	articleState: ArticleStateType;
	setArticleState: (param: ArticleStateType) => void;
}

export const ArticleParamsForm = ({
	articleState,
	setArticleState,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [syleConfig, setSyleConfig] = useState({
		fontFamily: articleState.fontFamilyOption,
		fontSize: articleState.fontSizeOption,
		fontColor: articleState.fontColor,
		backgroundColor: articleState.backgroundColor,
		contentWidth: articleState.contentWidth,
	});
	const rootRef = useRef<HTMLElement | null>(null);

	useOutsideClickClose({
		isOpen,
		rootRef,
		onClose: () => setIsOpen(false),
		onChange: setIsOpen,
	});

	const formResetHandler = () => {
		setSyleConfig((prevState) => ({
			...prevState,
			fontFamily: defaultArticleState.fontFamilyOption,
			fontSize: defaultArticleState.fontSizeOption,
			fontColor: defaultArticleState.fontColor,
			backgroundColor: defaultArticleState.backgroundColor,
			contentWidth: defaultArticleState.contentWidth,
		}));
		setArticleState(defaultArticleState);
	};

	const formSubmitHandler = (evt: FormEvent) => {
		evt.preventDefault();

		setArticleState({
			...syleConfig,
			fontFamilyOption: syleConfig.fontFamily,
			fontSizeOption: syleConfig.fontSize,
			fontColor: syleConfig.fontColor,
			backgroundColor: syleConfig.backgroundColor,
			contentWidth: syleConfig.contentWidth,
		});
	};

	return (
		<>
			<ArrowButton onClick={setIsOpen} isOpen={isOpen} />
			<aside
				className={`${styles.container} ${isOpen ? styles.container_open : ''}`}
				ref={rootRef}>
				<form
					className={styles.form}
					onSubmit={formSubmitHandler}
					onReset={formResetHandler}>
					<Text as={'h2'} size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>
					<Select
						title='Шрифт'
						selected={syleConfig.fontFamily}
						options={fontFamilyOptions}
						onChange={(selectedOption) =>
							setSyleConfig((prevState) => ({
								...prevState,
								fontFamily: selectedOption,
							}))
						}
					/>
					<RadioGroup
						options={fontSizeOptions}
						selected={syleConfig.fontSize}
						title='Размер шрифта'
						name='Размер шрифта'
						onChange={(selectedOption) =>
							setSyleConfig((prevState) => ({
								...prevState,
								fontSize: selectedOption,
							}))
						}
					/>
					<Select
						options={fontColors}
						selected={syleConfig.fontColor}
						title='Цвет шрифта'
						onChange={(selectedOption) =>
							setSyleConfig((prevState) => ({
								...prevState,
								fontColor: selectedOption,
							}))
						}
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={syleConfig.backgroundColor}
						title='Цвет фона'
						onChange={(selectedOption) =>
							setSyleConfig((prevState) => ({
								...prevState,
								backgroundColor: selectedOption,
							}))
						}
					/>
					<Select
						options={contentWidthArr}
						selected={syleConfig.contentWidth}
						title='Ширина контента'
						onChange={(selectedOption) =>
							setSyleConfig((prevState) => ({
								...prevState,
								contentWidth: selectedOption,
							}))
						}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
