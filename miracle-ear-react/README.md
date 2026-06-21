# Miracle-Ear Landing Page — React

## Быстрый старт

### 1. Установить зависимости
```bash
npm install
```

### 2. Добавить медиафайлы в папку `public/`

Разместите следующие файлы в папке `public/` (в корне проекта):

| Файл | Описание |
|------|----------|
| `happy-people.png` | Изображение в секции Hero |
| `hearing-aid.png` | Изображение слухового аппарата в демо |
| `speech_high_noise.mp3` | Аудио — уровень 1 (Off) |
| `speech_medium_noise.mp3` | Аудио — уровень 2 (Low) |
| `speech_low_noise.mp3` | Аудио — уровень 3 (Medium) |
| `speech_clean.mp3` | Аудио — уровень 4 (Full Clarity) |

### 3. Запустить dev-сервер
```bash
npm run dev
```

### 4. Сборка для production
```bash
npm run build
```
Готовые файлы появятся в папке `dist/`.

---

## Структура проекта

```
miracle-ear-react/
├── index.html
├── package.json
├── vite.config.js
├── public/          ← медиафайлы сюда
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── globals.css
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── InteractiveDemo.jsx
        ├── HowItWorks.jsx
        ├── CTASection.jsx
        └── Footer.jsx
```
