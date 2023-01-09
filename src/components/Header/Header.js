import './header.css'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { selector } from 'gsap';
import { Greeting } from '../Greeting/Greeting';


export function Header(props) {
    const { gsap, ScrollTrigger, ScrollToPlugin, sectionSelector, setCurrentSectionSelector, setBlackTheme, blackTheme } = { ...props }
    const menuRef = useRef(null)
    const activeSectionHeaderItem = useRef(null)
    const hoverMenuItem = useRef(null)
    const [isHover, setHoverState] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const firstUpdate = useRef(true);
    const svgButtonTheme = useRef(null)



    useLayoutEffect(() => {
        if (windowWidth > 900) {
            const ctx = gsap.context(() => {
                // setHoverElementPosition(hoverMenuItem.current, 0, -1)

                window.onresize = () => {
                    setHoverElementPosition(activeSectionHeaderItem.current, 0, -1)
                    setHoverElementPosition(hoverMenuItem.current, 0, -1)
                    setWindowWidth(window.innerWidth)
                }
            }, menuRef.current)
            return () => ctx.revert();
        }
    }, [windowWidth])


    useEffect(() => {
        if (blackTheme) {
            let ctx = gsap.context(() => {
                const tl = gsap.timeline()
                    .to(svgButtonTheme.current, {
                        duration: .3,
                        rotate: 360,
                        transformOrigin: 'center center',
                        attr: {
                            d: "M20.9863 1.49536C21.8148 1.49536 22.4863 2.16693 22.4863 2.99536V6.99536C22.4863 7.82379 21.8148 8.49536 20.9863 8.49536C20.1579 8.49536 19.4863 7.82379 19.4863 6.99536V2.99536C19.4863 2.16693 20.1579 1.49536 20.9863 1.49536ZM30 21C30 25.9706 25.9706 30 21 30C16.0294 30 12 25.9706 12 21C12 16.0294 16.0294 12 21 12C25.9706 12 30 16.0294 30 21ZM22.5 35C22.5 34.1716 21.8284 33.5 21 33.5C20.1716 33.5 19.5 34.1716 19.5 35V39C19.5 39.8284 20.1716 40.5 21 40.5C21.8284 40.5 22.5 39.8284 22.5 39V35ZM33.5 21C33.5 20.1716 34.1716 19.5 35 19.5H39C39.8284 19.5 40.5 20.1716 40.5 21C40.5 21.8284 39.8284 22.5 39 22.5H35C34.1716 22.5 33.5 21.8284 33.5 21ZM3 19.5C2.17157 19.5 1.5 20.1716 1.5 21C1.5 21.8284 2.17157 22.5 3 22.5H7C7.82843 22.5 8.5 21.8284 8.5 21C8.5 20.1716 7.82843 19.5 7 19.5H3ZM6.79896 6.78547C7.38475 6.19968 8.33449 6.19968 8.92028 6.78547L11.7487 9.6139C12.3345 10.1997 12.3345 11.1494 11.7487 11.7352C11.1629 12.321 10.2132 12.321 9.62738 11.7352L6.79896 8.90679C6.21318 8.32101 6.21318 7.37126 6.79896 6.78547ZM34.0563 6.78547C34.6421 6.19968 35.5918 6.19968 36.1776 6.78547C36.7634 7.37126 36.7634 8.32101 36.1776 8.90679L33.3492 11.7352C32.7634 12.321 31.8137 12.321 31.2279 11.7352C30.6421 11.1494 30.6421 10.1997 31.2279 9.6139L34.0563 6.78547ZM35.4679 35.4554C34.8821 36.0412 33.9324 36.0412 33.3466 35.4554L30.5181 32.627C29.9324 32.0412 29.9324 31.0915 30.5181 30.5057C31.1039 29.9199 32.0537 29.9199 32.6395 30.5057L35.4679 33.3341C36.0537 33.9199 36.0537 34.8696 35.4679 35.4554ZM8.92028 35.4554C8.33449 36.0412 7.38475 36.0412 6.79896 35.4554C6.21318 34.8696 6.21318 33.9199 6.79896 33.3341L9.62738 30.5057C10.2132 29.9199 11.1629 29.9199 11.7487 30.5057C12.3345 31.0915 12.3345 32.0412 11.7487 32.627L8.92028 35.4554Z"
                        },
                        fill: 'white'
                    })
            }, svgButtonTheme.current)
            return () => ctx.revert();
        }
        else {
            let ctx = gsap.context(() => {
                const tl2 = gsap.timeline({})
                    .to(svgButtonTheme.current,
                        {
                            duration: .3,
                            rotate: 360,
                            transformOrigin: 'center center', attr: {
                                d: "M13.5665 22.1829C19.7208 22.1829 24.7099 17.1161 24.7099 10.8658C24.7099 9.69374 24.5345 8.56325 24.2088 7.5C29.8348 8.95264 33.9961 14.1312 33.9961 20.2969C33.9961 27.5889 28.1756 33.5002 20.9955 33.5002C13.939 33.5002 8.19551 27.7905 8 20.6719C9.63787 21.633 11.539 22.1829 13.5665 22.1829Z"
                            },
                            fill: "#1F1F21"
                        })
            }, svgButtonTheme.current)
            return () => ctx.revert();
        }
    }, [blackTheme])

    // function changeBUttonBg() {
    //     <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
    //         <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9863 1.49536C21.8148 1.49536 22.4863 2.16693 22.4863 2.99536V6.99536C22.4863 7.82379 21.8148 8.49536 20.9863 8.49536C20.1579 8.49536 19.4863 7.82379 19.4863 6.99536V2.99536C19.4863 2.16693 20.1579 1.49536 20.9863 1.49536ZM30 21C30 25.9706 25.9706 30 21 30C16.0294 30 12 25.9706 12 21C12 16.0294 16.0294 12 21 12C25.9706 12 30 16.0294 30 21ZM22.5 35C22.5 34.1716 21.8284 33.5 21 33.5C20.1716 33.5 19.5 34.1716 19.5 35V39C19.5 39.8284 20.1716 40.5 21 40.5C21.8284 40.5 22.5 39.8284 22.5 39V35ZM33.5 21C33.5 20.1716 34.1716 19.5 35 19.5H39C39.8284 19.5 40.5 20.1716 40.5 21C40.5 21.8284 39.8284 22.5 39 22.5H35C34.1716 22.5 33.5 21.8284 33.5 21ZM3 19.5C2.17157 19.5 1.5 20.1716 1.5 21C1.5 21.8284 2.17157 22.5 3 22.5H7C7.82843 22.5 8.5 21.8284 8.5 21C8.5 20.1716 7.82843 19.5 7 19.5H3ZM6.79896 6.78547C7.38475 6.19968 8.33449 6.19968 8.92028 6.78547L11.7487 9.6139C12.3345 10.1997 12.3345 11.1494 11.7487 11.7352C11.1629 12.321 10.2132 12.321 9.62738 11.7352L6.79896 8.90679C6.21318 8.32101 6.21318 7.37126 6.79896 6.78547ZM34.0563 6.78547C34.6421 6.19968 35.5918 6.19968 36.1776 6.78547C36.7634 7.37126 36.7634 8.32101 36.1776 8.90679L33.3492 11.7352C32.7634 12.321 31.8137 12.321 31.2279 11.7352C30.6421 11.1494 30.6421 10.1997 31.2279 9.6139L34.0563 6.78547ZM35.4679 35.4554C34.8821 36.0412 33.9324 36.0412 33.3466 35.4554L30.5181 32.627C29.9324 32.0412 29.9324 31.0915 30.5181 30.5057C31.1039 29.9199 32.0537 29.9199 32.6395 30.5057L35.4679 33.3341C36.0537 33.9199 36.0537 34.8697 35.4679 35.4554ZM8.92028 35.4554C8.33449 36.0412 7.38475 36.0412 6.79896 35.4554C6.21318 34.8697 6.21318 33.9199 6.79896 33.3341L9.62738 30.5057C10.2132 29.9199 11.1629 29.9199 11.7487 30.5057C12.3345 31.0915 12.3345 32.0412 11.7487 32.627L8.92028 35.4554Z" fill="white" />
    //     </svg>
    // }



    useEffect(() => {
        if (windowWidth > 900) {
            if (firstUpdate.current) {
                setCurrentSectionSelector('about')
                setHoverElementPosition(activeSectionHeaderItem.current, .1, .1)
                setHoverElementPosition(hoverMenuItem.current, .1, .1)
                setTimeout(() => {
                    firstUpdate.current = false;
                }, 500)
            }
            else {
                setHoverElementPosition(activeSectionHeaderItem.current, .8, .3)
            }
        }

    }, [sectionSelector])

    // setHoverElementPosition(activeSectionHeaderItem.current, .8, .3)



    function setHoverElementPosition(element, dur, del, opac) {

        if (sectionSelector) {
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
                delay: del,
                opacity: opac ? opac : 1
            })
            return tl
        }

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
                <span className='header__logo'>Pavel Shirin</span>
                <nav className='header__menu'>
                    <ul className='header__menu-items'
                        style={windowWidth > 900 ? { display: 'flex' } : { display: 'none' }}
                        ref={menuRef}
                        onClick={(e) => scrollToHandler(e, ScrollTrigger, gsap, setCurrentSectionSelector, sectionSelector)}
                        onMouseLeave={hideHoverElementHandler}>
                        <li className='header__menu-item'><a className='header__menu-link' id='about'
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

                <button onClick={() => setBlackTheme((prev) => !prev)} className='header__theme-button'>
                    <svg className='header__theme-button-svg-bg' xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" fill="none">
                        <path ref={svgButtonTheme} fillRule="evenodd" clipRule="evenodd" d="M13.5665 22.6829C19.7208 22.6829 24.7099 17.6161 24.7099 11.3658C24.7099 10.1937 24.5345 9.06326 24.2088 8C29.8348 9.45264 33.9961 14.6312 33.9961 20.7969C33.9961 28.0889 28.1756 34.0002 20.9955 34.0002C13.939 34.0002 8.19551 28.2905 8 21.172C9.63787 22.133 11.539 22.6829 13.5665 22.6829Z" fill="#1F1F21" />
                    </svg>
                </button>
            </div>
        </header >
    );
}





function scrollToHandler(e, ScrollTrigger, gsap, setCurrentSectionSelector, sectionSelector) {
    e.stopPropagation()
    const elementId = e.target.id
    if (elementId) {
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