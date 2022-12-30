import './works.css'
import { useState } from 'react';
import htl from '../../images/works/how-to-learn-plus.png'
import m from '../../images/works/mesto-project.png'
import rt from '../../images/works/mesto-project.png'
import p from '../../images/works/portfolio.png'
export function Works() {
    const [data, setData] = useState([
        {
            projectName: 'portfolio',
            images: p
        },
        {
            projectName: 'mesto',
            images: m
        },
        {
            projectName: 'russiaTravel',
            images: rt
        },
        {
            projectName: 'howToLearn',
            images: htl,
        },

    ])



    const works = data.map((work, i) => {
        return (
            <li className='works__item' key={i} id={work.projectName}><img className='works__work-screen' src={work.images} alt={work.projectName} /></li>
        )
    })





    return (
        <section className='works'>
            <div className='works__container'>
                <h2 className='works__title'>Мои работы</h2>
                <ul className='works__list'>
                    {works}
                    <li className='works__item works__item_soon'>coming soon...</li>
                </ul>
            </div>
        </section>
    );
}