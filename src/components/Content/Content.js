import './content.css'
import { Greeting } from '../Greeting/Greeting';
import { About } from '../About/About';
import { Works } from '../Works/Works';
import { useRef } from 'react';

import gsap from 'gsap';

export function Content(props) {
    const { blackTheme, ScrollTrigger, pageContainer } = { ...props }

    return (
        <main className='content'>
            <Greeting gsap={gsap} pageContainer={pageContainer} />
            <About gsap={gsap} ScrollTrigger={ScrollTrigger} pageContainer={pageContainer} />
            <Works gsap={gsap} blackTheme={blackTheme} />
        </main>
    );
}







// /////
// const worksData = {
//     howToLearn: {
//         title: 'How to learn',
//         projectTheme: 'Тема проекта «How to learn»',
//         description: 'Одностраничный веб-сайт об эффективных подходах к обучению.Создан по методологии BEM с файловой структурой Nested BEM.',
//         tech: [
//             "HTML5",
//             " CSS3",
//             " Flexbox",
//             "БЭМ (Nested)",
//             'keyframes '
//         ],
//         gitHubPage: 'https://trqktop.github.io/how-to-learn-plus/',
//         repository: 'https://github.com/trqktop/how-to-learn-plus',
//         newKnowledge: [
//             "HTML5",
//             "CSS3",
//             "Flexbox",
//             "БЭМ (Nested)",
//             'keyframes '
//         ],
//         largeImage: howToLearn,
//         url: './images/works-screen/trqktop.github.io_how-to-learn-plus.png'
//     },
//     russiaTravel: {
//         title: 'Путешествие по россии',
//         projectTheme: 'Тема проекта «Путешествие по России»',
//         description: 'Адаптивный одностраничный сайт, созданный по макету Figma. Сайт оптимизирован для просмотра на экранах от 320 пикселей. При вёрстке использован подход Desktop First.',
//         tech: [
//             "HTML5",
//             "CSS3",
//             "GRID",
//             "Адаптивная верстка(мобильные устройства, планшеты, десктопы)",
//             "Методология БЭМ(файловая структура)",
//             "Flexbox",
//         ],
//         gitHubPage: 'https://trqktop.github.io/russian-travel/',
//         repository: 'https://github.com/trqktop/russian-travel',
//         newKnowledge: [
//             "Адаптивная верстка(мобильные устройства, планшеты, десктопы)",
//             "GRID",
//         ],
//         largeImage: russiaTravel,
//         url: './images/works-screen/trqktop.github.io_russian-travel.png'
//     },
//     mesto: {
//         title: 'Mesto',
//         projectTheme: 'Тема проекта «Социальная сеть Mesto»',
//         description: 'Интерактивная веб-страница, позволяющая пользователю редактировать профиль и аватар, добавлять новые карточки с фотографиями и описанием места, удалять свои карточки, ставить и удалять лайки на своих карточках и карточках других пользователей.',
//         tech: [
//             "webpack",
//             'form/validation',
//             "javascript",
//             "Модульные окна с формой",
//             "HTML5",
//             "CSS3",
//             "Адаптивная верстка(мобильные устройства, планшеты, десктопы)",
//             "БЭМ (flat)",
//             "Flexbox",
//             "GRID",
//             "Кастомная валидация формы на стороне клиента",
//         ],
//         gitHubPage: 'https://trqktop.github.io/mesto-project/',
//         repository: 'https://github.com/trqktop/mesto-project',
//         newKnowledge: [
//             "БЭМ (flat)",
//             "Модульные окна с формой",
//             "webpack",
//             'form/validation',
//             "Кастомная валидация формы на стороне клиента",
//             'Promise',
//             'fetch/json'
//         ],
//         largeImage: mestoProject,
//         url: './images/works-screen/trqktop.github.io_mesto-project.png'
//     },



//     portfolio: {
//         title: 'portfolio',
//         projectTheme: 'Тема проекта «Мое портфолио»',
//         description: 'Работа выполненна с целью собрать все мои проекты в едином пространстве, данные хранятся в БД и отрисовыываются с помощью js',
//         tech: [
//             "gsap",
//             'smoothscroll',
//             "scrollTrigger",
//             "Модульные окна",
//             "HTML5",
//             "CSS3",
//             "Адаптивная верстка",
//             "Flexbox",
//             "GRID",
//         ],
//         gitHubPage: 'https://trqktop.github.io/portfolioGhPages/',
//         repository: 'https://github.com/trqktop/busafolio',
//         newKnowledge: [
//             "gsap",
//             'smoothscroll',
//             "scrollTrigger",
//             'form/validation',
//         ],
//         largeImage: portfolioProject,
//         url: './images/works-screen/portfolio.png'
//     },
// }
