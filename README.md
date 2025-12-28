# Blog Customizer

Blog Customizer — веб-приложение для кастомизации стилей текста.

## О проекте

Проект был создан в рамках учебной программы Яндекс.Практикума по направлению ["Фронтенд-разработчик"](https://praktikum.yandex.ru/frontend-developer/) на `React`, `SCSS` и `Webpack` ([ссылка на ветку](https://github.com/StarostinLF/blog-customizer/tree/main)), затем переписан на `Next.js` для актуализации и улучшения функциональности.

Макет: https://www.figma.com/design/BOu4PyRg0j7B70CHFy6jY3/5-%D1%81%D0%BF%D1%80%D0%B8%D0%BD%D1%82.-JavaScript?node-id=50160-559&t=6hQTZU30Ef9CT943-0

## Стек технологий

- `Next.js`: fullstack `React`-фреймворк для создания веб-приложений
- `TypeScript`: расширение `JavaScript`, добавляющее типизацию кода для безопасности разработки
- `Sass (SCSS)`: препроцессор `CSS`, добавляющий возможности удобного написания стилей при разработке
- `ESlint`: линтер и форматировщик `JSX`/`TSX` кода
- `Stylelint`: линтер для стилей

## Структура проекта

- [`app/`](app): папка для хранения страниц и файлов с метаданными
  - [`app/components/`](app/components): папка для хранения компонентов и модульных стилей
  - [`app/icons/`](app/icons): папка для хранения компонентов иконок
  - [`app/styles/`](app/styles): папка для хранения стилей
    - [`app/styles/fonts`](app/styles/fonts): папка для хранения стилей шрифтов
    - [`app/styles/globals.scss`](app/styles/globals.scss): глобальные стили приложения
  - [`app/layout.tsx`](app/layout.tsx): корневой лейаут
  - [`app/page.tsx`](app/page.tsx): корневая страница
- [`lib/`](lib): папка для хранения библиотек и утилит
- [`public/`](public): папка для статических файлов, которые будут использоваться в веб-приложении и доступны через `URL`
- [`.gitignore`](.gitignore): файл для указания файлов и папок, которые должны быть проигнорированы `Git`
- [`.stylelintignore`](.stylelintignore): файл для указания файлов и папок, которые должны быть проигнорированы `Stylelint`
- [`eslint.config.mjs`](eslint.config.mjs): определяет правила и настройки для `ESlint`
- [`next.config.ts`](next.config.ts): файл конфигурации для `Next.js`
- [`package.json`](package.json): информация о проекте, список зависимостей и скрипты для выполнения задач
- [`postcss.config.mjs`](postcss.config.mjs): Конфигурационный файл для `PostCSS`
- [`prettier.config.mjs`](prettier.config.mjs): конфигурационный файл для `Prettier`
- [`stylelint.config.mjs`](stylelint.config.mjs): конфигурационный файл для `Stylelint`
- [`tsconfig.json`](tsconfig.json): конфигурационный файл для `TypeScript`

## Скрипты

### Установка проекта

```bash
npm i
```

### Запуск локального сервера для разработки

```bash
npm run dev
```

### Запуск линтеров кода и стилей

```bash
npm run lint
```

### Сборка проекта для продакшена

```bash
npm run build
```

### Запуск сервера для продакшена

```bash
npm start
```
