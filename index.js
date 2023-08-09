const i18obj = {
    'en': {
        'contacts': 'Contacts',
        'summary': 'Summary',
        'skills': 'Skills',
        'code': 'Code',
        'education': 'Education',
        'courses': 'Courses',
        'projects': 'Projects',
        'english': 'English',
        'hobby': 'Hobby',
        'name': 'Sergey Samarskiy',
        'profession' : 'Front-End developer',
        'location-b': 'Russia',
        'location': ', Nizhny Novgorod region, Sarov',
        'phone': 'Phone',
        'email': 'Email',
        'text-1': 'I am 30 years old.',
        'text-2': 'I work as a process engineer at VNIIEF.',
        'text-3': 'Doing web-development (80% front-end / 20% back-end).',
        'text-4': 'I love to learn and improve my skills.',
        'text-5': 'I am looking for a job in a friendly team with interesting tasks.',
        'code-text': 'Binary search',
        'university': 'University',
        'university-education': ': Nizhny Novgorod State Technical University n.a. R.E. Alekseev',
        'higher-education': 'Higher education',
        'degree': ": master's degree",
        'books': 'Book',
        'books-1': ': Grokking Algorithms: An illustrated guide for programmers and other curious people. Aditya Y. Bhargava',
        'books-2': ': {You Don’t Know JS}: Get Started. Kyle Simpson',
        'books-3': ': {You Don’t Know JS}: Scope & Closures. Kyle Simpson',
        'books-4': ': Eloquent JavaScript. Marijn Haverbeke',
        'website-shelter': 'Website - Shelter for pets',
        'website-photographer': 'Website - Photographer’s portfolio',
        'audio-player': 'Audio-player',
        'see-more': 'See more',
        'level': 'English level',
        'level-english': ': A1+ (Low Pre-Intermediate)',
        'english-text': 'I have little speaking practice, mostly I read and translate texts.',
        'hobby-1': 'Music / Playing guitar',
        'hobby-2': 'Fitness / Healthy lifestyle',
        'hobby-3': 'Reading / Classical and World literature'
    },
    'ru': {
        'contacts': 'Контакты',
        'summary': 'О себе',
        'skills': 'Навыки',
        'code': 'Код',
        'education': 'Образование',
        'courses': 'Курсы',
        'projects': 'Проекты',
        'english': 'Английский',
        'hobby': 'Хобби',
        'name': 'Сергей Самарский',
        'profession' : 'Front-End разработчик',
        'location-b': 'Россия',
        'location': ', Нижегородская область, Саров',
        'phone': 'Телефон',
        'email': 'Эл. почта',
        'text-1': 'Мне 30 лет.',
        'text-2': 'Я работаю инженером во ВНИИЭФ.',
        'text-3': 'Занимаюсь веб-разработкой (80% front-end / 20% back-end).',
        'text-4': 'Люблю учиться и совершенствовать свои навыки.',
        'text-5': 'Ищу работу в дружном коллективе с интересными задачами.',
        'code-text': 'Бинарный поиск',
        'university': 'Университет',
        'university-education': ': Нижегородский Государственный Технологический Университет им. Р.Е. Алексеева',
        'higher-education': 'Степень',
        'degree': ": Магистр",
        'books': 'Литература',
        'books-1': ': Грокаем алгоритмы: Иллюстрированное пособие для программистов и любопытствующих. Адитья Бхаргава',
        'books-2': ': {Вы пока еще не знаете JS}. Познакомьтесь, JavaScript. Кайл Симпсон',
        'books-3': ': {Вы пока еще не знаете JS}. Область видимости и замыкания. Кайл Симпсон',
        'books-4': ': Выразительный JavaScript. Марейн Хавербеке',
        'website-shelter': 'Вебсайт - Приют для животных',
        'website-photographer': 'Вебсайт - Портфолио фотографа',
        'see-more': 'Смотри еще',
        'audio-player': 'Аудиоплеер',
        'level': 'Уровень английского',
        'level-english': ': A1+ (Низкий средний уровень)',
        'english-text': 'У меня мало разговорной практики, в основном я читаю и перевожу тексты.',
        'hobby-1': 'Музыка / Игра на гитаре',
        'hobby-2': 'Фитнес / Здоровый образ жизни',
        'hobby-3': 'Чтение / Классическая и мировая литература'
    }
}

const languageEn = document.querySelector('.en');
const languageRu = document.querySelector('.ru');
const dataAttributes = document.querySelectorAll('[data-i18]');

function getTranclate(lang) {
    dataAttributes.forEach((element) => {
        if (element.placeholder) {
            element.placeholder = i18obj[lang][element.dataset.i18];
        }
        element.textContent = i18obj[lang][element.dataset.i18];
    });
}

languageEn.addEventListener('click', () => getTranclate('en'));
languageRu.addEventListener('click', () => getTranclate('ru'));

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav')
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav__link');
const switchLink = document.querySelectorAll('.switch__link');

function toggleMenu() {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
    main.classList.toggle('open');
    header.classList.toggle('open');
}

function closeMenu(event) {
    if (event.target.classList.contains('nav__link')) {
        burger.classList.remove('open');
        nav.classList.remove('open');
        main.classList.remove('open');
        header.classList.remove('open'); 
    }
}

function switchActive(event) {
    switchLink.forEach((btn) => {
        btn.classList.remove('active');
    });
    event.target.classList.toggle('active');
}

burger.addEventListener('click',toggleMenu);
navLinks.forEach((el) => el.addEventListener('click', closeMenu));
switchLink.forEach((el) => el.addEventListener('click', switchActive));
