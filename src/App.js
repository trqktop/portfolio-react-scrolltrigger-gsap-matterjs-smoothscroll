import './App.css';
import Preloader from './components/Preloader/Preloader';
import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap, selector } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from 'smoothscroll-for-websites'
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import portfolio from './pdf-portfolio/portfolio.pdf'
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin)


// fetch('https://kinobd.ru/api/films?page=2')
// .then(res=>res.json())
// .then(res=>console.log(res))


function App() {
    let [sectionSelector, setCurrentSectionSelector] = useState('about')
    let pageContainer = useRef(null)
    let [blackTheme, setBlackTheme] = useState(false)



    useLayoutEffect(() => {


        let ctx = panelSlide(gsap, pageContainer, setCurrentSectionSelector)
        return () => ctx.revert();
    }, [])


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            SmoothScroll({
                animationTime: 1200,
                stepSize: 75,
                accelerationDelta: 30,
                accelerationMax: 1,
                keyboardSupport: true,
                arrowScroll: 50,
                pulseAlgorithm: true,
                pulseScale: 4,
                pulseNormalize: 1,
                touchpadSupport: true,
            })
        }, pageContainer.current)
        return () => ctx.revert();
    }, [])

    // className={true ? 'page__container' : 'page__container page__container-true'}
    return (
        <div className={blackTheme ? 'page__container page__container_black' : 'page__container'}
            ref={pageContainer}>
            <Header gsap={gsap}
                ScrollTrigger={ScrollTrigger}
                ScrollToPlugin={ScrollToPlugin}
                sectionSelector={sectionSelector}
                setCurrentSectionSelector={setCurrentSectionSelector}
                setBlackTheme={setBlackTheme}
                blackTheme={blackTheme}
            />
            <Content gsap={gsap} blackTheme={blackTheme} ScrollTrigger={ScrollTrigger} />
            <Footer portfolio={portfolio} />
            {/* <Preloader blackTheme={blackTheme} /> */}
        </div>
    );
}




function panelSlide(gsap, pageContainer, setCurrentSectionSelector) {
    let ctx = gsap.context(() => {
        const panelGreeting = pageContainer.current.querySelector('.greeting')
        gsap.to(panelGreeting, {
            scrollTrigger: {
                trigger: panelGreeting,
                pin: true,
                start: "+=100% bottom",
                end: '+=100% top',
                pinSpacing: false,
                scrub: 1,
                pinType: 'fixed',
            }
        });
        const panelAbout = pageContainer.current.querySelector('.about')
        const panelWorks = pageContainer.current.querySelector('.works')
        gsap.to(panelAbout, {
            scrollTrigger: {
                trigger: panelAbout,
                pin: true,
                start: "+=100% bottom+=1px",
                onEnter: e => {
                    setCurrentSectionSelector(panelAbout.className)
                },
                onEnterBack: (e) => {
                    setCurrentSectionSelector(panelAbout.className)
                },
                onLeave: (e) => {
                    setCurrentSectionSelector(panelWorks.className)
                },
                end: '+=100% top+=1%',
                pinSpacing: false,
                scrub: 1,
                anticipatePin: 1 / 10,
                // markers: true,
                pinType: 'fixed',
            }
        })


        // gsap.to(panelWorks, {
        //   scrollTrigger: {
        //     trigger: panelWorks,
        //     pin: false,
        //     start: "center center+=30%",
        //     pinSpacing: false,
        //     scrub: 1,
        //     onEnter: e => {
        //       setCurrentSectionSelector(panelWorks.className)
        //     },
        //     onEnterBack: e => {
        //       setCurrentSectionSelector(panelWorks.className)
        //     },
        //     pinType: 'fixed',
        //     markers: true,
        //   }
        // })
        const footer = pageContainer.current.querySelector('.footer')
        gsap.to(footer, {
            scrollTrigger: {
                trigger: footer,
                pin: false,
                pinSpacing: false,
                start: "center bottom",
                pinSpacing: false,
                onEnter: e => {
                    setCurrentSectionSelector(footer.className)
                },
                onLeaveBack: () => {
                    setCurrentSectionSelector(panelWorks.className)
                }
            }
        })


    }, pageContainer.current);
    return ctx
}











ScrollTrigger.refresh()

export default App;
