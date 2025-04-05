# News Portal React App - KNews 24/7

## Описание
Single Page Application (SPA) за публикуване на новини, изградена с React.js.  
Приложението има публична и частна част, автентикация, routing, CRUD функционалности и защита на действията според потребителя.

## Технологии
- React.js + Vite
- React Router DOM
- Context API (автентикация)
- useState, useEffect, useContext
- Client-side routing с 5+ страници
- Git + GitHub

## Структура

```
src/
├── components/       # Малки преизползваеми компоненти
├── contexts/         # AuthContext
├── pages/            # Всички страници: Login, Register, Catalog, Create, Details, Edit
├── services/         # (ще се добави за реален бекенд)
├── App.jsx           # Главен компонент и routing
├── main.jsx          # ReactDOM и контексти
```

## Функционалности
- Регистрация / Вход / Изход
- Навигация според автентикация
- CRUD върху новини:
  - Каталог
  - Детайли
  - Създаване (само за логнати)
  - Редакция и изтриване (само автор)
- Route Guards (ще бъдат добавени)
- Валидация на формите

## Стартиране на проекта

```bash
npm install
npm run dev
```

## Автор
Катерина Георгиева Кутинчева — ReactJS Project (Април 2025)