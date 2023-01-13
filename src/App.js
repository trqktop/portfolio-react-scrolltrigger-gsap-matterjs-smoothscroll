import './App.css';

import Preloader from './components/Preloader/Preloader';
import MKDan from './images/mortal-kombat-3.png'

import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from 'smoothscroll-for-websites'
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SmoothScroll);

function App() {
    let [sectionSelector, setCurrentSectionSelector] = useState(null)
    let [eggVisible, setEggVisible] = useState(false)
    let [blackTheme, setBlackTheme] = useState(JSON.parse(localStorage.getItem('themeIsBlack')) || false)
    let pageContainer = useRef()
    let panelGreeting = useRef()
    let panelAbout = useRef()
    let footer = useRef()
    const DanImg = useRef(null)

    useEffect(() => {
        localStorage.setItem('themeIsBlack', JSON.stringify(blackTheme));
    }, [blackTheme])

    useLayoutEffect(() => {
        let ctx = panelSlide(gsap, pageContainer, setCurrentSectionSelector, panelGreeting, panelAbout, footer)
        return () => ctx.revert();
    }, [])


    useLayoutEffect(() => {
        // const ctx = gsap.context(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 900px)", () => SmoothScroll({
            frameRate: 144,
            animationTime: 900,
            stepSize: 90,
            pulseAlgorithm: 1,
            pulseScale: 5,
            pulseNormalize: 1,
            accelerationDelta: 10,
            accelerationMax: 1,
            keyboardSupport: 1,
            arrowScroll: 20,
            fixedBackground: 0,
            touchpadSupport: true,
        }))
        // }, pageContainer.current);

        return () => mm.revert();
    }, [])

    useLayoutEffect(() => {
        if (eggVisible) {
            const ctx = gsap.context(() => {
                const tl = gsap.timeline()
                tl.to(DanImg.current, {
                    yPercent: -200,
                    duration: .5
                })
                    .to(DanImg.current, {
                        delay: 1,
                        duration: .3,
                        yPercent: 200,
                        onComplete: () => setEggVisible(false)
                    })
                return tl
            })
            return () => ctx.revert()
        }
    }, [eggVisible])


    return (
        <div className={blackTheme ? 'page__container page__container_black' : 'page__container'}
            ref={pageContainer}
        >
            <Header gsap={gsap}
                ScrollTrigger={ScrollTrigger}
                ScrollToPlugin={ScrollToPlugin}
                sectionSelector={sectionSelector}
                setCurrentSectionSelector={setCurrentSectionSelector}
                setBlackTheme={setBlackTheme}
                blackTheme={blackTheme}
            />
            <Content gsap={gsap}
                blackTheme={blackTheme}
                ScrollTrigger={ScrollTrigger}
                panelGreeting={panelGreeting}
                panelAbout={panelAbout}
            />
            <Footer
                forwardRef={footer}
            />
            <Preloader blackTheme={blackTheme} />
            <div className='easter_egg-container'>
                <button className='easter_egg-button' onClick={() => setEggVisible(true)}></button>
                <img className='easter_egg-dan' ref={DanImg} src={MKDan} alt='Дэн Форден'></img>
            </div>
        </div>
    );
}

function panelSlide(gsap, pageContainer, setCurrentSectionSelector, panelGreeting, panelAbout, footer) {
    let mm = gsap.matchMedia(),
        breakPoint = 900;
    let ctx = gsap.context(() => {
        mm.add({
            isDesktop: `(min-width: ${breakPoint}px)`,

        }, (context) => {
            let { isDesktop } = context.conditions;
            if (isDesktop) {
                gsap.to(panelGreeting.current, {
                    y: -100,
                    scrollTrigger: {
                        trigger: panelGreeting.current,
                        pin: true,
                        start: "+=100% bottom",
                        end: () => '+=' + '+=110%',
                        pinSpacing: false,

                        pinType: 'fixed',
                        scrub: true,
                    }
                });
                gsap.to(panelAbout.current, {
                    y: -1,
                    scrollTrigger: {
                        trigger: panelAbout.current,
                        pin: true,
                        start: "+=100% bottom+=1px",
                        onEnter: e => {
                            setCurrentSectionSelector('about')
                        },
                        onEnterBack: (e) => {
                            setCurrentSectionSelector('about')
                        },
                        onLeave: (e) => {
                            setCurrentSectionSelector('works')
                        },
                        end: '+=100% top+=10%',
                        pinSpacing: false,
                        scrub: .1,
                        anticipatePin: .5,
                        pinType: 'fixed',
                    }
                })
                gsap.to(footer.current, {
                    scrollTrigger: {
                        trigger: footer.current,
                        pin: false,

                        start: "center bottom",
                        pinSpacing: false,
                        scrub: false,
                        // markers: true,
                        onEnter: e => {
                            setCurrentSectionSelector('footer')
                        },
                        onLeaveBack: () => {
                            setCurrentSectionSelector('works')
                        }
                    }
                })
            }
        });
        return () => mm.revert()
    }, pageContainer.current);
    return ctx
}





// ScrollTrigger.refresh()
export default App;
