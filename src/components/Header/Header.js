import './header.css'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { selector } from 'gsap';
import { Greeting } from '../Greeting/Greeting';


export function Header(props) {
    const { gsap, ScrollTrigger, ScrollToPlugin, sectionSelector, setCurrentSectionSelector, setBlackTheme } = { ...props }
    const menuRef = useRef(null)
    const activeSectionHeaderItem = useRef(null)
    const hoverMenuItem = useRef(null)
    const [isHover, setHoverState] = useState(false)

    // useLayoutEffect(() => scrollPageListener(setCurrentSe`ctionSelector, gsap, activeSectionHeaderItem, ScrollTrigger), [])
    useEffect(() => {
        setHoverElementPosition(activeSectionHeaderItem.current, 1, .3)

    })
    useLayoutEffect(() => {
        setHoverElementPosition(activeSectionHeaderItem.current, 0, -1)
        setHoverElementPosition(hoverMenuItem.current, 0, -1)
        window.onresize = () => setHoverElementPosition(activeSectionHeaderItem.current, 0, -1)
    }, [])


    function setHoverElementPosition(element, dur, del) {

        const rect = document.getElementById(sectionSelector).getBoundingClientRect()
        const elPos = {
            left: rect.x - 1,
            height: rect.height + 2,
            y: rect.top - 1,
            width: rect.width + 2
        }
        const tl = gsap.to(element, {
            left: elPos.left,
            height: elPos.height,
            y: elPos.y,
            width: elPos.width,
            duration: dur,
            delay: del
        })
        return tl
    }

    function setHoverElementPositionHandler(e) {
        setHoverState(true)
        const rect = e.target.getBoundingClientRect()
        const elPos = {
            left: rect.x - 1,
            height: rect.height + 2,
            y: rect.top - 1,
            width: rect.width + 2
        }
        const hover = hoverMenuItem.current
        const tl = gsap.timeline()
        tl.to(hover, {
            left: elPos.left,
            height: elPos.height,
            y: elPos.y,
            width: elPos.width,
            duration: .2,
            ease: "slow(0.7, 0.7, false)",
        })
        e.target.classList.add('header__menu-link_hover')
    }

    function hideHoverElementHandler(e) {
        setHoverState(false)
    }
    function leaveHoverElementHandler(e) {
        e.target.classList.remove('header__menu-link_hover')
    }
    return (
        <header className='header'>
            <div className='header__container'>
                <div className='header__logo'>PavelShirin</div>
                <nav className='header__menu'>
                    <ul className='header__menu-items'
                        ref={menuRef}
                        onClick={(e) => scrollToHandler(e, ScrollTrigger, gsap, setCurrentSectionSelector, sectionSelector)}
                        onMouseLeave={hideHoverElementHandler}>
                        <li className='header__menu-item' ><a className='header__menu-link' id='about' 
                         onMouseLeave={leaveHoverElementHandler} onMouseEnter={setHoverElementPositionHandler}>О себе</a></li>
                        <li className='header__menu-item' ><a className='header__menu-link' id='works' 
                         onMouseLeave={leaveHoverElementHandler} onMouseEnter={setHoverElementPositionHandler}>Мои работы</a></li>
                        <li className='header__menu-item' ><a className='header__menu-link' id='footer'
                          onMouseLeave={leaveHoverElementHandler} onMouseEnter={setHoverElementPositionHandler}>Контакты</a></li>
                        <li className='header__interactive-elements'>
                            <div className={isHover ? 'header__hover-item header__hover-item_active' : 'header__hover-item'} ref={hoverMenuItem}></div>
                            <div className='header__active-section-item' ref={activeSectionHeaderItem}></div>
                        </li>
                    </ul>
                </nav>
                <button onClick={() => setBlackTheme((prev) => !prev)} className='header__theme-button'></button>
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