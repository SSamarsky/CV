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
        'profession' : 'Junior Front-End developer',
        'location-b': 'Russia',
        'location': ', Nizhny Novgorod region, Sarov',
        'phone': 'Phone',
        'email': 'Email',
        'text-1': 'I am 28 years old.',
        'text-2': 'I work as a process engineer at a factory.',
        'text-3': 'I am studying JavaScript/Front-End development.',
        'text-4': 'I love to learn and improve my programming skills.',
        'text-5': 'I am looking for a job in a friendly team with interesting tasks.',
        'code-text': 'RGB To Hex Conversion',
        'university': 'University',
        'university-education': ': Nizhny Novgorod State Technical University n.a. R.E. Alekseev',
        'higher-education': 'Higher education',
        'degree': ": master's degree",
        'book': 'Book',
        'book-read': ': Head First JavaScript Programming. Eric Freeman, Elisabeth Robson',
        'website': 'Website',
        'audio-player': 'Audio-player',
        'level': 'English level',
        'level-english': ': A1+ (Low Pre-Intermediate)',
        'english-text': 'I am learning English from a book "English Grammar in Use" Murphy Raymond.',
        'english-text-2': "I don't have much speaking practice",
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
        'profession' : 'Джуниор Front-End разработчик',
        'location-b': 'Россия',
        'location': ', Нижегородская область, Саров',
        'phone': 'Телефон',
        'email': 'Эл. почта',
        'text-1': 'Мне 28 лет.',
        'text-2': 'Я работаю инженером на заводе.',
        'text-3': 'Я изучаю JavaScript/Front-End разработку.',
        'text-4': 'Я люблю учиться и совершенствовать свои навыки программирования.',
        'text-5': 'Ищу работу в дружном коллективе с интересными задачами.',
        'code-text': 'Преобразование RGB в шестнадцатеричный формат',
        'university': 'Университет',
        'university-education': ': Нижегородский Государственный Технологический Университет им. Р.Е. Алексеева',
        'higher-education': 'Степень',
        'degree': ": Магистр",
        'book': 'Литература',
        'book-read': ': Изучаем программирование на JavaScript. Элизабет Фримен, Эрик Фриман',
        'website': 'Сайт',
        'audio-player': 'Аудиоплеер',
        'level': 'Уровень английского',
        'level-english': ': A1+ (Низкий средний уровень)',
        'english-text': 'Я изучаю английский по книге "English Grammar in Use" Murphy Raymond.',
        'english-text-2': "У меня мало разговорной практики",
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