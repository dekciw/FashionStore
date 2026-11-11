<h1 align="center">FashionStore</h1>

<p align="center">
  <b>Лендинг магазина одежды на React: бренды, новинки, распродажа, подборки и мобильное приложение.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React 19">
  <img src="https://img.shields.io/badge/Create_React_App-5-09D3AC?logo=createreactapp&logoColor=white" alt="Create React App">
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3">
  <a href="https://dekciw.github.io/FashionStore/"><img src="https://img.shields.io/badge/GitHub_Pages-online-222222?logo=github&logoColor=white" alt="GitHub Pages"></a>
</p>

<p align="center">
  <a href="https://dekciw.github.io/FashionStore/">
    <img src="https://img.shields.io/badge/Открыть_в_браузере-111111?style=for-the-badge" alt="Открыть в браузере">
  </a>
</p>

<br>

<p align="center">
  <img src="assets/screen-hero.png" width="900" alt="Первый экран: Let's explore unique clothes и кнопка Shop Now">
</p>

<br>

<table align="center">
  <tr>
    <th>&#8199;&#8199;&#8199;&#8199;&#8199;&#8199;Разделы&#8199;&#8199;&#8199;&#8199;&#8199;&#8199;</th>
    <th>&#8199;&#8199;&#8199;&#8199;&#8199;&#8199;Акции&#8199;&#8199;&#8199;&#8199;&#8199;&#8199;</th>
    <th>&#8199;&#8199;&#8199;&#8199;&#8199;&#8199;Устройство&#8199;&#8199;&#8199;&#8199;&#8199;&#8199;</th>
  </tr>
  <tr>
    <td valign="top">
      - Промо с кнопкой Shop Now<br>
      - Логотипы брендов<br>
      - Новинки по категориям<br>
      - Подборки Young’s Favourite<br>
      - Подписка на промокоды<br>
      - Подвал со ссылками
    </td>
    <td valign="top">
      - Распродажа Payday Sale<br>
      - Скидка 30% от $100<br>
      - Подборка «всё до $40»<br>
      - Ваучер за приложение<br>
      - Кнопки App Store и Google Play<br>
      - Макет экрана приложения
    </td>
    <td valign="top">
      - 10 React-компонентов<br>
      - Общая карточка Card<br>
      - Свой CSS у компонента<br>
      - Шрифт Poppins<br>
      - Create React App<br>
      - Сайт на GitHub Pages
    </td>
  </tr>
</table>

<h3 align="center">Как это выглядит</h3>

<table align="center">
  <tr>
    <td width="50%" align="center" valign="top">
      <img src="assets/screen-arrivals.png" width="420" alt="Новинки: худи, куртки и футболки"><br>
      <sub>Новинки по категориям</sub>
    </td>
    <td width="50%" align="center" valign="top">
      <img src="assets/screen-sale.png" width="420" alt="Распродажа Payday Sale"><br>
      <sub>Распродажа</sub>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center" valign="top">
      <img src="assets/screen-favourite.png" width="420" alt="Подборки Young's Favourite"><br>
      <sub>Подборки</sub>
    </td>
    <td width="50%" align="center" valign="top">
      <img src="assets/screen-app.png" width="420" alt="Блок мобильного приложения с ваучером"><br>
      <sub>Мобильное приложение</sub>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center" valign="top">
      <img src="assets/screen-community.png" width="420" alt="Подписка на промокоды и подвал"><br>
      <sub>Подписка и подвал</sub>
    </td>
  </tr>
</table>

<br>

<details>
<summary><b>Подробнее о проекте: стек, устройство, запуск</b> (нажми, чтобы развернуть)</summary>

<br>

### Стек

<p>
- <b>Интерфейс:</b> React 19<br>
- <b>Сборка:</b> Create React App (react-scripts 5)<br>
- <b>Стили:</b> обычный CSS, у каждого компонента свой файл<br>
- <b>Шрифт:</b> Poppins из Google Fonts
</p>

### Устройство проекта

```
src/
├── App.js                  # собирает страницу из разделов
├── components/
│   ├── header/             # логотип, меню и кнопка Sign Up
│   ├── promo/              # первый экран
│   ├── brands/             # полоса с логотипами брендов
│   ├── arrivals/           # новинки по категориям
│   ├── card/               # карточка, используется в новинках и подборках
│   ├── sale/               # распродажа
│   ├── favorite/           # подборки
│   ├── app/                # мобильное приложение и ваучер
│   ├── community/          # подписка на промокоды
│   └── footer/             # подвал
├── image/                  # фото, иконки и логотипы брендов
└── styles/                 # сброс и общие стили
```

### Запуск

```bash
npm install
npm start          # dev-сервер на http://localhost:3000
npm run build      # сборка в папку build
```

</details>
