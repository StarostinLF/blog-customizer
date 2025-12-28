'use client';

import styles from './article-params-form.module.scss';

import { FormEvent, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { useClose } from './hooks/useClose';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from '@/lib/types';
import { useOutsideClickClose } from '../select/hooks/use-outside-click-close';

import ArrowButton from '../arrow-button/arrow-button';
import Text from '../text/text';
import Select from '../select/select';
import { RadioGroup } from '../radio-group/radio-group';
import Separator from '../separator/separator';
import { Button } from '../button/button';

export default function ArticleParamsForm({
	articleState,
	setArticleState,
}: {
	articleState: ArticleStateType;
	// eslint-disable-next-line no-unused-vars
	setArticleState: (param: ArticleStateType) => void;
}) {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [formState, setFormState] = useState({
		fontFamily: articleState.fontFamilyOption,
		fontSize: articleState.fontSizeOption,
		fontColor: articleState.fontColor,
		backgroundColor: articleState.backgroundColor,
		contentWidth: articleState.contentWidth,
	});

	const rootRef = useRef<HTMLElement | null>(null);
	const formRef = useRef<HTMLFormElement>(null);

	useOutsideClickClose({
		isMenuOpen,
		rootRef,
		onClose: () => setIsMenuOpen(false),
		onChange: setIsMenuOpen,
	});

	useClose({
		isMenuOpen: isMenuOpen,
		onClose: () => setIsMenuOpen(false),
		rootRef: formRef,
	});

	useEffect(() => {
		if (isMenuOpen) document.body.style.overflow = 'hidden';
		else document.body.style.overflow = '';

		return () => {
			document.body.style.overflow = '';
		};
	}, [isMenuOpen]);

	function formResetHandler() {
		setFormState((prevState) => ({
			...prevState,
			fontFamily: defaultArticleState.fontFamilyOption,
			fontSize: defaultArticleState.fontSizeOption,
			fontColor: defaultArticleState.fontColor,
			backgroundColor: defaultArticleState.backgroundColor,
			contentWidth: defaultArticleState.contentWidth,
		}));

		setArticleState(defaultArticleState);
	}

	function formSubmitHandler(evt: FormEvent) {
		evt.preventDefault();

		setArticleState({
			...formState,
			fontFamilyOption: formState.fontFamily,
			fontSizeOption: formState.fontSize,
			fontColor: formState.fontColor,
			backgroundColor: formState.backgroundColor,
			contentWidth: formState.contentWidth,
		});

		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<>
			<ArrowButton isMenuOpen={isMenuOpen} onClick={setIsMenuOpen} />
			<div
				className={clsx(styles.overlay, isMenuOpen && styles.overlay_open)}
				onClick={() => setIsMenuOpen(false)}
			/>
			<aside
				ref={rootRef}
				className={clsx(styles.container, isMenuOpen && styles.container_open)}
			>
				<form
					ref={formRef}
					className={styles.form}
					onReset={formResetHandler}
					onSubmit={formSubmitHandler}
				>
					<Text as={'h2'} size={31} uppercase={true} weight={800}>
						Задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						selected={formState.fontFamily}
						title={'Шрифт'}
						onChange={(selectedOption) =>
							setFormState((prevState) => ({
								...prevState,
								fontFamily: selectedOption,
							}))
						}
					/>
					<RadioGroup
						name={'Размер шрифта'}
						options={fontSizeOptions}
						selected={formState.fontSize}
						title={'Размер шрифта'}
						onChange={(selectedOption) =>
							setFormState((prevState) => ({
								...prevState,
								fontSize: selectedOption,
							}))
						}
					/>
					<Select
						options={fontColors}
						selected={formState.fontColor}
						title={'Цвет шрифта'}
						onChange={(selectedOption) =>
							setFormState((prevState) => ({
								...prevState,
								fontColor: selectedOption,
							}))
						}
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={formState.backgroundColor}
						title={'Цвет фона'}
						onChange={(selectedOption) =>
							setFormState((prevState) => ({
								...prevState,
								backgroundColor: selectedOption,
							}))
						}
					/>
					<Select
						options={contentWidthArr}
						selected={formState.contentWidth}
						title={'Ширина контента'}
						onChange={(selectedOption) =>
							setFormState((prevState) => ({
								...prevState,
								contentWidth: selectedOption,
							}))
						}
					/>
					<div className={styles.bottomContainer}>
						<Button title={'Сбросить'} type={'reset'} />
						<Button title={'Применить'} type={'submit'} />
					</div>
				</form>
			</aside>
		</>
	);
}
