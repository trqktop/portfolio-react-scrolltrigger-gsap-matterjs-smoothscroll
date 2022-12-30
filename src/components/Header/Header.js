import './header.css'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { selector } from 'gsap';


export function Header(props) {
    const { gsap, ScrollTrigger, ScrollToPlugin, sectionSelector ,setCurrentSectionSelector} = { ...props }
  
    const menuRef = useRef(null)
    const activeSectionHeaderItem = useRef(null)

    useLayoutEffect(() => scrollPageListener(setCurrentSectionSelector, gsap, activeSectionHeaderItem, ScrollTrigger), [])
    useEffect(() => {
        setElementPosition(sectionSelector, gsap, activeSectionHeaderItem)
        window.onresize = () => setElementPosition(sectionSelector, gsap, activeSectionHeaderItem)
    })

    return (
        <header className='header'>
            <div className='header__container'>
                <div className='header__logo'>PavelShirin</div>
                <nav className='header__menu'>
                    <ul className='header__menu-items' ref={menuRef} onClick={(e) => scrollToHandler(e, ScrollTrigger, gsap, setCurrentSectionSelector)}>
                        <li className='header__menu-item' ><a className='header__menu-link' id='about'>О себе</a></li>
                        <li className='header__menu-item' ><a className='header__menu-link' id='works'>Мои работы</a></li>
                        <li className='header__menu-item' ><a className='header__menu-link' id='footer'>Контакты</a></li>
                        <li className='header__interactive-elements'>
                            <div className='header__hover-item'></div>
                            <div className='header__active-section-item' ref={activeSectionHeaderItem}></div>
                        </li>
                    </ul>
                </nav>
                <button className='header__theme-button'></button>
            </div>
        </header>
    );
}

function scrollPageListener(setCurrentSectionSelector, gsap, activeSectionHeaderItem, ScrollTrigger) {
    // const selectors = ['.about', '.works', '.footer']
    // selectors.forEach(selector => {
    //     ScrollTrigger.create({
    //         trigger: selector,
    //         markers: true,
    //         pin: false,
    //         pinSpacing:false,
 
    //         // onEnter: () => setCurrentSectionSelector(selector.slice(1)),
    //         onToggle: () => { setCurrentSectionSelector(selector.slice(1)) }
    //     })
    // })
    // // setElementPosition(sectionSelector, gsap, activeSectionHeaderItem)
}



function setElementPosition(sectionSelector, gsap, activeSectionHeaderItem) {
    const headerHoverElement = document.querySelector(`#${sectionSelector}`)
    const rect = headerHoverElement.getBoundingClientRect()
    const tl = gsap.timeline()
    const element = activeSectionHeaderItem.current
    tl.to(element,
        {
            height: rect.height,
            width: rect.width,
            top: rect.y,
            left: rect.x
        }
    ).to(element, { opacity: 1 })
}


function scrollToHandler(e, ScrollTrigger, gsap, setCurrentSectionSelector) {
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
    }
}