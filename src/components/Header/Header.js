import './header.css'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { selector } from 'gsap';
import { Greeting } from '../Greeting/Greeting';


export function Header(props) {
    const { gsap, ScrollTrigger, ScrollToPlugin, sectionSelector, setCurrentSectionSelector } = { ...props }
    const menuRef = useRef(null)
    const activeSectionHeaderItem = useRef(null)
    const hoverMenuItem = useRef(null)

    // useLayoutEffect(() => scrollPageListener(setCurrentSe`ctionSelector, gsap, activeSectionHeaderItem, ScrollTrigger), [])
    useEffect(() => {
        setHoverElementPosition(activeSectionHeaderItem.current, 1, .3)
        console.log(sectionSelector)
    })
    useLayoutEffect(() => {
        setHoverElementPosition(activeSectionHeaderItem.current, 0, -1)
    }, [])


    function setHoverElementPosition(element, dur, del) {
        gsap.to(element, {
            left: function (index, target, targets) {
                return document.getElementById(sectionSelector).getBoundingClientRect().x - 1
            },
            height: function (index, target, targets) {
                return document.getElementById(sectionSelector).getBoundingClientRect().height + 2
            },
            y: function (index, target, targets) {
                return document.getElementById(sectionSelector).getBoundingClientRect().top - 1
            },
            width: function (index, target, targets) {
                return document.getElementById(sectionSelector).getBoundingClientRect().width + 2
            },
            duration: dur,
            delay: del
        })
    }

    return (

        <header className='header'>
            <div className='header__container'>
                <div className='header__logo'>PavelShirin</div>
                <nav className='header__menu'>
                    <ul className='header__menu-items' ref={menuRef} onClick={(e) => scrollToHandler(e, ScrollTrigger, gsap, setCurrentSectionSelector, sectionSelector)}>
                        <li className='header__menu-item' ><a className='header__menu-link' id='about' >О себе</a></li>
                        <li className='header__menu-item' ><a className='header__menu-link' id='works' >Мои работы</a></li>
                        <li className='header__menu-item' ><a className='header__menu-link' id='footer'>Контакты</a></li>
                        <li className='header__interactive-elements'>
                            <div className='header__hover-item' ref={hoverMenuItem}></div>
                            <div className='header__active-section-item' ref={activeSectionHeaderItem}></div>
                        </li>
                    </ul>
                </nav>
                <button className='header__theme-button'></button>
            </div>
        </header>
    );
}





function scrollToHandler(e, ScrollTrigger, gsap, setCurrentSectionSelector, sectionSelector) {
    e.stopPropagation()

    const elementId = e.target.id
    if (elementId) {
        // setCurrentSectionSelector(elementId)
        const STs = ScrollTrigger.getAll();
        STs.forEach(ST => {
            ST.disable()
        })
        gsap.to(window, {
            scrollTo: () => `.${elementId}`,
            onComplete: (e) => {
                const STs = ScrollTrigger.getAll();
                STs.forEach(ST => {
                    ST.enable()
                })
            },
            duration: 1,
            delay: -1,
            ease: "power4",
        })
        // setCurrentSectionSelector(elementId)
    }
}