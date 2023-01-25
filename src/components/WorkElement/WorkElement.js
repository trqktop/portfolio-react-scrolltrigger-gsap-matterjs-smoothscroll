import { useEffect, useLayoutEffect, useRef, useState } from "react"
import Modals from "../Modals/Modals"
import gsap from 'gsap';

import './WorkElement.css'
export function WorkElement(props) {
    const { data, blackTheme, hoverListener, hoverLeaveListener, elementsContainer } = { ...props }
    const [isHover, setHoverState] = useState(false)
    const [modalIsOpened, modalState] = useState(false)
    const { projectName, title, projectTheme, description, gitHubPage, images, newKnowledge, tech } = { ...data }
    const [windowWidth, setWindowWidth] = useState(null)
    const el = useRef(null)
    const timeline = useRef(null)
    useLayoutEffect(() => {
        // const ctx = gsap.context(() => {
        let mm = gsap.matchMedia(),
            breakPoint = 900;
        mm.add({
            isDesktop: `(min-width: ${breakPoint}px)`,
            isMobile: `(max-width: ${breakPoint - 1}px)`,
            reduceMotion: "(prefers-reduced-motion: reduce)"
        }, (context) => {
            let { isDesktop, isMobile, reduceMotion } = context.conditions;
            if (isMobile) {
                timeline.current = gsap.timeline()
                timeline.current.to(el.current, {
                    scrollTrigger: {
                        trigger: el.current,
                        pinSpacing: false,
                        pin: false,
                        start: "top center",
                        end: "bottom center",
                        onEnter: () => setHoverState(true),
                        onEnterBack: () => setHoverState(true),
                        onLeave: () => setHoverState(false),
                        onLeaveBack: () => setHoverState(false),
                    }
                })
            }
        })
        // }, elementsContainer)
        setHoverState(false)
        return () => mm.revert()
    }, [])

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [windowWidth])


    return (
        <>
            <li className={'works__item'} ref={el}
                onMouseEnter={(e) => {
                    setHoverState(true)
                    if (windowWidth > 900) {
                        hoverListener(e)
                    }
                }}
                onMouseLeave={(e) => {
                    setHoverState(false)
                    if (windowWidth > 900) {
                        hoverLeaveListener(e)
                    }
                }}
                onClick={() => modalState(true)}
                id={projectName}>
                <figure className="works__item-container">
                    <div className="works__image-container">
                        < img
                            className={isHover ? "works__screen works__screen_hover" : "works__screen"}
                            src={images}
                            alt={projectName} />
                    </div>
                    <figcaption className="tech">
                        <div className={isHover ? 'tech__container tech__container_focus' : 'tech__container'}>
                            <h4 className="tech__project-name tech__element">{title}</h4>
                            <ul className="tech__elements">
                                <li className="tech__element">{tech[0]}</li>
                                <li className="tech__element">{tech[1]}</li>
                                <li className="tech__element">{tech[2]}</li>
                            </ul>
                        </div>
                        <div className="tech__project-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2"
                                    stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M12.4697 11.5303C12.1768 11.2374 12.1768 10.7626 12.4697 10.4697L20.1893 2.75H16.6562C16.242 2.75 15.9062 2.41421 15.9062 2C15.9062 1.58579 16.242 1.25 16.6562 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V7.34375C22.75 7.75796 22.4142 8.09375 22 8.09375C21.5858 8.09375 21.25 7.75796 21.25 7.34375V3.81066L13.5303 11.5303C13.2374 11.8232 12.7626 11.8232 12.4697 11.5303Z"
                                    fill="white" />
                            </svg>
                        </div>
                    </figcaption>
                </figure>
            </li >
            <Modals
                blackTheme={blackTheme}
                modalIsOpened={modalIsOpened}
                modalState={modalState}
                windowWidth={windowWidth}
                gsap={gsap}
                data={data} />
        </>
    )
}