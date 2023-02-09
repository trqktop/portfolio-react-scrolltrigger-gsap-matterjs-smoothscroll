import './header.css'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';


function getheaderMenuRectData(menuRef, setHeaderMenuRect) {
    if (menuRef) {
        const elements = Array.from(menuRef.childNodes).filter(item => item.classList.contains('header__menu-item'))
        let data = {}
        elements.forEach(element => {
            const elementId = element.children[0].id
            const rect = element.children[0].getBoundingClientRect()
            const elPos = {
                [elementId]: {
                    left: rect.x - 1,
                    height: rect.height + 2,
                    y: rect.top - 1,
                    width: rect.width + 2
                }
            }
            data = {
                ...data,
                [elementId]: elPos[elementId]
            }
        })
        setHeaderMenuRect({ ...data })
        return data
    }
}





function setHoverElementPositionHandler(e, windowWidth, firstUpdateToHoverElement, headerMenuRect, hoverMenuItem, setHoverState, gsap) {
    if (windowWidth > 900) {
        if (firstUpdateToHoverElement.current) {
            const ctx = setHoverElementPosition(0, e, headerMenuRect, hoverMenuItem, setHoverState, gsap)
            setTimeout(() => firstUpdateToHoverElement.current = false, 1)
        }
        else {
            const ctx = setHoverElementPosition(.3, e, headerMenuRect, hoverMenuItem, setHoverState, gsap)
        }
    }
}


function setHoverElementPosition(dur, e, headerMenuRect, hoverMenuItem, setHoverState, gsap) {
    if (hoverMenuItem.current) {
        const currentElementRect = headerMenuRect[e.target.id]
        const ctx = gsap.context(() => {
            gsap.to(hoverMenuItem.current,
                {
                    ...currentElementRect,
                    duration: dur
                })
        })

        e.target.classList.add('header__menu-link_hover')
        setHoverState(true)
    }
}





export function Header(props) {
    const { gsap, ScrollTrigger, setBlackTheme, blackTheme, pageContainer } = { ...props }
    const menuRef = useRef(null)
    const activeSectionHeaderItem = useRef(null)
    const hoverMenuItem = useRef(null)
    const [isHover, setHoverState] = useState(false)
    const [windowWidth, setWindowWidth] = useState(null)
    const svgButtonTheme = useRef(null)
    const firstUpdate = useRef(true);
    const firstUpdateToHoverElement = useRef(true)
    const [headerMenuRect, setHeaderMenuRect] = useState({})
    const headerMainRef = useRef(null)
    let [sectionSelector, setCurrentSectionSelector] = useState(null)
    const context = useRef(null)
    const timeline_1 = useRef(null)
    const timeline_2 = useRef(null)
    const timeline_3 = useRef(null)
    const timeline_4 = useRef(null)
    const [scrollto, scrolltoState] = useState(null)
    const context_2 = useRef(null)
    const timeline_5 = useRef(null)


    const timeline_6 = useRef(null)
    const timeline_7 = useRef(null)


    useEffect(() => {
        timeline_7.current = gsap.matchMedia();
        const breakPoint = 900;
        timeline_7.current.add({
            isDesktop: `(min-width: ${breakPoint}px)`,
            isMobile: `(max-width: ${breakPoint - 1}px)`,
            all: `(min-width: ${222}px)`,
        }, (context) => {
            let { isDesktop } = context.conditions;
            let { isMobile } = context.conditions;
            if (isDesktop) {

                if (scrollto) {
                    const elementId = scrollto.target.id
                    if (elementId) {
                        const STS = ScrollTrigger.getAll()
                        STS.forEach(st => st.disable())
                        timeline_5.current = gsap.timeline()
                        timeline_5.current.to(window, {
                            scrollTo: () => `.${elementId}`,
                            duration: .001,
                            delay: .001,
                            ease: "power4",
                            onComplete: () => STS.forEach(st => st.enable())
                        })
                    }

                }
            }
        })
        return () => timeline_7.current.revert()
    }, [scrollto])




    function setactiveSectionHeaderItemPosition(dur, sectionSelector, activeSectionHeaderItem, headerMenuRect, gsap, menuRef) {
        if (sectionSelector || activeSectionHeaderItem.current) {
            const currentElementRect = headerMenuRect[sectionSelector]
            const ctx = gsap.context(() => gsap.to(activeSectionHeaderItem.current,
                {
                    ...currentElementRect,
                    duration: dur
                })
                , menuRef
            )
            return ctx
        }

    }

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        window.onresize = () => {
            setWindowWidth(window.innerWidth)
            const data = getheaderMenuRectData(menuRef.current, setHeaderMenuRect)
            setactiveSectionHeaderItemPosition(1, sectionSelector, activeSectionHeaderItem, data, gsap, menuRef)
            ScrollTrigger.refresh()
        }
    }, [windowWidth, blackTheme])


    useEffect(() => {
        if (windowWidth > 900) {
            if (firstUpdate.current) {
                document.fonts.ready
                    .then(res => {
                        const data = getheaderMenuRectData(menuRef.current, setHeaderMenuRect)
                        context_4.current = setactiveSectionHeaderItemPosition(0, 'about', activeSectionHeaderItem, data, gsap, menuRef)
                    })
                firstUpdate.current = false
            }
            else {
                const data = getheaderMenuRectData(menuRef.current, setHeaderMenuRect)
                setactiveSectionHeaderItemPosition(1, sectionSelector, activeSectionHeaderItem, data, gsap, menuRef)
            }

        }


    }, [sectionSelector, windowWidth])


    // useEffect(() => {
    //     getheaderMenuRectData(menuRef.current, setHeaderMenuRect)

    //     setTimeout(() => {
    //         getheaderMenuRectData(menuRef.current, setHeaderMenuRect)
    //     }, 1000)
    // }, [])


    useLayoutEffect(() => {
        if (blackTheme) {
            const ctx = gsap.context(() => {
                timeline_1.current = gsap.timeline()
                    .to(svgButtonTheme.current, {
                        duration: .3,
                        rotate: 360,
                        transformOrigin: 'center center',
                        attr: {
                            d: "M20.9863 1.49536C21.8148 1.49536 22.4863 2.16693 22.4863 2.99536V6.99536C22.4863 7.82379 21.8148 8.49536 20.9863 8.49536C20.1579 8.49536 19.4863 7.82379 19.4863 6.99536V2.99536C19.4863 2.16693 20.1579 1.49536 20.9863 1.49536ZM30 21C30 25.9706 25.9706 30 21 30C16.0294 30 12 25.9706 12 21C12 16.0294 16.0294 12 21 12C25.9706 12 30 16.0294 30 21ZM22.5 35C22.5 34.1716 21.8284 33.5 21 33.5C20.1716 33.5 19.5 34.1716 19.5 35V39C19.5 39.8284 20.1716 40.5 21 40.5C21.8284 40.5 22.5 39.8284 22.5 39V35ZM33.5 21C33.5 20.1716 34.1716 19.5 35 19.5H39C39.8284 19.5 40.5 20.1716 40.5 21C40.5 21.8284 39.8284 22.5 39 22.5H35C34.1716 22.5 33.5 21.8284 33.5 21ZM3 19.5C2.17157 19.5 1.5 20.1716 1.5 21C1.5 21.8284 2.17157 22.5 3 22.5H7C7.82843 22.5 8.5 21.8284 8.5 21C8.5 20.1716 7.82843 19.5 7 19.5H3ZM6.79896 6.78547C7.38475 6.19968 8.33449 6.19968 8.92028 6.78547L11.7487 9.6139C12.3345 10.1997 12.3345 11.1494 11.7487 11.7352C11.1629 12.321 10.2132 12.321 9.62738 11.7352L6.79896 8.90679C6.21318 8.32101 6.21318 7.37126 6.79896 6.78547ZM34.0563 6.78547C34.6421 6.19968 35.5918 6.19968 36.1776 6.78547C36.7634 7.37126 36.7634 8.32101 36.1776 8.90679L33.3492 11.7352C32.7634 12.321 31.8137 12.321 31.2279 11.7352C30.6421 11.1494 30.6421 10.1997 31.2279 9.6139L34.0563 6.78547ZM35.4679 35.4554C34.8821 36.0412 33.9324 36.0412 33.3466 35.4554L30.5181 32.627C29.9324 32.0412 29.9324 31.0915 30.5181 30.5057C31.1039 29.9199 32.0537 29.9199 32.6395 30.5057L35.4679 33.3341C36.0537 33.9199 36.0537 34.8696 35.4679 35.4554ZM8.92028 35.4554C8.33449 36.0412 7.38475 36.0412 6.79896 35.4554C6.21318 34.8696 6.21318 33.9199 6.79896 33.3341L9.62738 30.5057C10.2132 29.9199 11.1629 29.9199 11.7487 30.5057C12.3345 31.0915 12.3345 32.0412 11.7487 32.627L8.92028 35.4554Z"
                        },
                        fill: 'white'
                    })
            }, headerMainRef)
            return () => ctx.revert();
        }
        else {
            const ctx2 = gsap.context(() => {
                timeline_2.current = gsap.timeline({})
                    .to(svgButtonTheme.current,
                        {
                            duration: .3,
                            rotate: 360,
                            transformOrigin: 'center center', attr: {
                                d: "M13.5665 22.1829C19.7208 22.1829 24.7099 17.1161 24.7099 10.8658C24.7099 9.69374 24.5345 8.56325 24.2088 7.5C29.8348 8.95264 33.9961 14.1312 33.9961 20.2969C33.9961 27.5889 28.1756 33.5002 20.9955 33.5002C13.939 33.5002 8.19551 27.7905 8 20.6719C9.63787 21.633 11.539 22.1829 13.5665 22.1829Z"
                            },
                            fill: "#1F1F21"
                        })

            }, headerMainRef)
            return () => ctx2.revert();
        }
    }, [blackTheme])


    const context_4 = useRef(null)




    useLayoutEffect(() => {
        if (windowWidth > 900) {
            context.current = gsap.context(() => {
                timeline_3.current = gsap.timeline()
                timeline_3.current.to('.about', {
                    scrollTrigger: {
                        trigger: '.about',
                        pin: false,
                        start: "+=100% bottom+=1px",
                        end: 'center top',
                        onEnter: e => {
                            setCurrentSectionSelector('about')
                        },
                        onEnterBack: (e) => {
                            setCurrentSectionSelector('about')
                        },
                        // onLeave: (e) => {
                        //     setCurrentSectionSelector('works')
                        // },
                        pin: false,
                    }
                })
                timeline_4.current = gsap.timeline()
                timeline_4.current.to('footer', {
                    scrollTrigger: {
                        trigger: 'footer',
                        pin: false,
                        start: "center bottom",
                        end: 'bottom bottom',
                        onEnter: e => {
                            setCurrentSectionSelector('footer')
                        },
                        onLeaveBack: () => {
                            setCurrentSectionSelector('works')
                        }
                    }
                })


                // timeline_7
                timeline_6.current = gsap.timeline()
                timeline_6.current.to('.my-stack', {
                    scrollTrigger: {
                        trigger: '.my-stack',
                        pin: false,
                        start: "center bottom",
                        end: 'bottom+=30% bottom',
                        // markers: true,
                        onEnter: e => {
                            setCurrentSectionSelector('my-stack')
                        },
                        onLeave: () => {
                            setCurrentSectionSelector('works')
                        },
                        onEnterBack: () => {
                            setCurrentSectionSelector('my-stack')
                        }
                    }
                })

            }, pageContainer)
            return () => context.current.revert()
        }
    }, [windowWidth])

















    const context_5 = useRef(null)
    function leaveHoverElementHandler(e) {
        e.target.classList.remove('header__menu-link_hover')
    }
    return (
        <header className={windowWidth > 900 ? 'header' : 'header header_mobile'} ref={headerMainRef}>
            <div className='header__container'>
                <span className='header__logo'>Pavel Shirin</span>
                <nav className='header__menu'>
                    {/* {windowWidth > 900 ? */}
                    <ul className='header__menu-items'
                        style={windowWidth > 900 ? { display: 'flex' } : { display: 'none' }}
                        ref={menuRef}
                        onClick={(e) => scrolltoState(e)}
                        onMouseLeave={() => setHoverState(false)}>
                        <li className='header__menu-item'><a className='header__menu-link' id='about'
                            onMouseLeave={leaveHoverElementHandler} onMouseEnter={(e) => setHoverElementPositionHandler(e, windowWidth, firstUpdateToHoverElement, headerMenuRect, hoverMenuItem, setHoverState, gsap)}>О себе</a></li>
                        <li className='header__menu-item'><a className='header__menu-link' id='my-stack'
                            onMouseLeave={leaveHoverElementHandler} onMouseEnter={(e) => setHoverElementPositionHandler(e, windowWidth, firstUpdateToHoverElement, headerMenuRect, hoverMenuItem, setHoverState, gsap)}>Мои cтэк</a></li>
                        <li className='header__menu-item' ><a className='header__menu-link' id='works'
                            onMouseLeave={leaveHoverElementHandler} onMouseEnter={(e) => setHoverElementPositionHandler(e, windowWidth, firstUpdateToHoverElement, headerMenuRect, hoverMenuItem, setHoverState, gsap)}>Мои работы</a></li>
                        <li className='header__menu-item' ><a className='header__menu-link' id='footer'
                            onMouseLeave={leaveHoverElementHandler} onMouseEnter={(e) => setHoverElementPositionHandler(e, windowWidth, firstUpdateToHoverElement, headerMenuRect, hoverMenuItem, setHoverState, gsap)}>Контакты</a></li>
                        <li className='header__interactive-elements'>
                            <div className={isHover ? 'header__hover-item header__hover-item_active' : 'header__hover-item'} ref={hoverMenuItem}></div>
                            <div className='header__active-section-item' ref={activeSectionHeaderItem}></div>
                        </li>
                    </ul>
                    {/* } */}
                </nav>

                <button onMouseUp={() => setBlackTheme((prev) => !prev)} className='header__theme-button'>
                    <svg className='header__theme-button-svg-bg' xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" fill="none">
                        <path ref={svgButtonTheme} fillRule="evenodd" clipRule="evenodd" d="M13.5665 22.6829C19.7208 22.6829 24.7099 17.6161 24.7099 11.3658C24.7099 10.1937 24.5345 9.06326 24.2088 8C29.8348 9.45264 33.9961 14.6312 33.9961 20.7969C33.9961 28.0889 28.1756 34.0002 20.9955 34.0002C13.939 34.0002 8.19551 28.2905 8 21.172C9.63787 22.133 11.539 22.6829 13.5665 22.6829Z" fill="#1F1F21" />
                    </svg>
                </button>
            </div>
        </header >
    );
}

