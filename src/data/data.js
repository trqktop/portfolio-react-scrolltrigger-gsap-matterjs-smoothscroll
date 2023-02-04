
import howToLearnLink from '../images/works/how-to-learn-plus.png'
import mestoLink from '../images/works/mesto-project.png'
import russiaTravelLink from '../images/works/russian-travel.png'
import portfolioLink from '../images/works/portfolio.png'
import reactCalc from '../images/works/react-calculator.png'
export const data = [
    {
        projectName: 'React-calculator',
        title: 'Calculator',
        projectTheme: 'Тема проекта «Калькулятор на Реакт»',
        description: 'Простенький калькулятор выполненный на React с использованием хука useContext, без eval',
        tech: [
            'react',
            'useContext',
            'scss',
            "HTML5",
            "CSS3",
            "Flexbox",
            'regexp'
        ],
        gitHubPage: 'https://trqktop.github.io/react-calculator/',
        repository: 'https://github.com/trqktop/react-calculator',
        newKnowledge: [
            "useContext",
            'eval',
            "useContext",
        ],
        images: reactCalc
    },



    {
        projectName: 'portfolio',
        title: 'portfolio',
        projectTheme: 'Тема проекта «Мое портфолио»',
        description: 'Работа выполнена с целью собрать все мои проекты в едином пространстве, данные хранятся в форме объекта, модальные окна и карточки отрисовываются с помощью js. Первая работа написанная на React. Изначально проект выполнялся на чистом js, репозиторий проекта есть на Git. Был проведён рефакторинг и теперь проект написан на React.',
        tech: [
            'react',
            'smoothscroll',
            "scrollTrigger",
            "gsap",
            'scss',
            "Модульные окна",
            'React.portal',
            "HTML5",
            "CSS3",
            "Адаптивная верстка",
            "Flexbox",
            "GRID",
        ],
        gitHubPage: 'https://trqktop.github.io/portfolioGhPages/',
        repository: 'https://github.com/trqktop/reactPortfolio',
        newKnowledge: [
            "gsap",
            'react',
            'smoothscroll',
            'scss',
            "scrollTrigger",
            'svg/path',
            'React.portal',
            'React.useEffect',
            'React.useState',
            'React.useRef',
            'React.createRef',
            'forwardRef'
        ],
        images: portfolioLink
    },
    {
        projectName: 'mesto',
        projectTheme: 'Тема проекта «Социальная сеть Mesto»',
        title: 'mesto',
        description: 'Интерактивная веб-страница, позволяющая пользователю редактировать профиль и аватар, добавлять новые карточки с фотографиями и описанием места, удалять свои карточки, ставить и удалять лайки на своих карточках и карточках других пользователей.',
        tech: [
            "webpack",
            'form/validation',
            "javascript",
            "Модульные окна с формой",
            "HTML5",
            "CSS3",
            "Адаптивная верстка(мобильные устройства, планшеты, десктопы)",
            "БЭМ (flat)",
            "Flexbox",
            "GRID",
            "Кастомная валидация формы на стороне клиента",
        ],
        gitHubPage: 'https://trqktop.github.io/mesto-project/',
        repository: 'https://github.com/trqktop/mesto-project',
        newKnowledge: [
            "БЭМ (flat)",
            "Модульные окна с формой",
            "webpack",
            'babel',
            'postCSS',
            'form/validation',
            "Кастомная валидация формы на стороне клиента",
            'Promise',
            'fetch/json'
        ],
        images: mestoLink
    },
    {
        projectName: 'russiaTravel',
        title: 'Путешествие по России',
        projectTheme: 'Тема проекта «Путешествие по России»',
        description: 'Адаптивный одностраничный сайт, созданный по макету Figma. Сайт оптимизирован для просмотра на экранах от 320 пикселей. При вёрстке использован подход Desktop First.',
        tech: [
            "HTML5",
            "CSS3",
            "GRID",
            "Адаптивная верстка(мобильные устройства, планшеты, десктопы)",
            "Методология БЭМ(файловая структура)",
            "Flexbox",
        ],
        gitHubPage: 'https://trqktop.github.io/russian-travel/',
        repository: 'https://github.com/trqktop/russian-travel',
        newKnowledge: [
            "Адаптивная верстка(мобильные устройства, планшеты, десктопы)",
            "GRID",
        ],

        images: russiaTravelLink
    },
    {
        projectName: 'howToLearn',
        title: 'How to learn',
        projectTheme: 'Тема проекта «How to learn»',
        description: 'Одностраничный веб-сайт об эффективных подходах к обучению. Создан по методологии BEM с файловой структурой Nested BEM.',
        tech: [
            "HTML5",
            " CSS3",
            " Flexbox",
            "БЭМ (Nested)",
            'keyframes '
        ],
        gitHubPage: 'https://trqktop.github.io/how-to-learn-plus/',
        repository: 'https://github.com/trqktop/how-to-learn-plus',
        newKnowledge: [
            "HTML5",
            "CSS3",
            "Flexbox",
            "БЭМ (Nested)",
            'keyframes '
        ],
        images: howToLearnLink,
    },
]