'use client';

import styles from './article.module.scss';

import Image from 'next/image';
import clsx from 'clsx';

import Text from '../text/text';

export default function Article() {
	return (
		<article className={clsx(styles.article)}>
			<Text as="h1" size={45} weight={800} dynamicLite uppercase>
				Портрет Западной Швейцарии
			</Text>
			<div className={styles.titleDescription}>
				<Text align={'center'} size={22} weight={800} dynamicLite uppercase>
					Примитивист Фиштр расписывает новый бюджетный авиалайнер
				</Text>
			</div>
			<Image
				alt={'Картинка самолета'}
				className={styles.image}
				height={1000}
				src={'/images/plane.png'}
				width={1600}
			/>
			<Text fontStyle={'italic'} size={18} dynamic>
				Фото: Hans-Peter Gauster , &quot;Bombardier CSeries CS300 HB-JCA&quot; ©
				2017 CC BY-SA 2.0
			</Text>
			<Text size={18} dynamic>
				В конце 2016 года швейцарская авиакомпания Swiss получила свой первый
				канадский «Бомбардье CS300» для полётов малой и средней дальности. Чтобы
				придать новой 145-местной машине неповторимую индивидуальность, ливрею
				заказали живописцу. При условии, что эскиз он выполнит в одиночку и
				лично поправит роспись, когда её будут наносить на фюзеляж.
			</Text>
			<Text size={18} dynamic>
				Выбор пал на примитивиста Матиаса Форбаша, работающего под псевдонимом
				Фиштр. Ему поставили задачу изобразить всё лучшее во франкоговорящей
				части Швейцарии — горы, озёра, вина, сыры, доброжелательность и свободу.
				Заказ был выполнен в рекордный срок, всего за 5 месяцев. Самолёт
				получился похожим на самого художника: такой же добродушный и с улыбкой
				до ушей.
			</Text>
			<Text size={18} dynamic>
				С мая 2017 года &quot;Бомбардье&quot; носит имя &quot;Швейцарская
				Романдия&quot; и регистрационный номер HB-JCA ; совершает в среднем 4
				коммерческих полёта в сутки. Его можно видеть в &quot;Домодедово&quot;,
				а также в аэропортах Парижа, Валенсии, Кракова, Берлина, Вены, Загреба,
				на на Майорке, Крите и Сицилии. Самолёт останется в той же ливрее, пока
				его купит другая авиакомпания.
			</Text>
		</article>
	);
}
