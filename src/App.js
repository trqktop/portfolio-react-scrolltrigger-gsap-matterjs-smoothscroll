import './App.css';
import Preloader from './components/Preloader/Preloader';
import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { useEffect, useRef, useState, useLayoutEffect, forwardRef, createRef, useReducer } from 'react';
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
    let [sectionSelector, setCurrentSectionSelector] = useState(null)
    let [blackTheme, setBlackTheme] = useState(JSON.parse(localStorage.getItem('themeIsBlack')) || false)
    //scrolltrigger var
    let pageContainer = useRef()
    let panelGreeting = useRef()
    let panelAbout = useRef()
    let footer = useRef()
    useEffect(() => {
        localStorage.setItem('themeIsBlack', JSON.stringify(blackTheme));
    })

    useLayoutEffect(() => {
        let ctx = panelSlide(gsap, pageContainer, setCurrentSectionSelector, panelGreeting, panelAbout, footer)
        return () => ctx.revert();
    }, [])


    useLayoutEffect(() => {
        // let ctx = gsap.context(() => {
        setTimeout(() => {
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
        }, 2001)
        // }, pageContainer.current)
        // return () => ctx.revert();
    }, [])

    // className={true ? 'page__container' : 'page__container page__container-true'}
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
            <Footer portfolio={portfolio} forwardRef={footer} />
            <Preloader blackTheme={blackTheme} />
        </div>
    );
}



function panelSlide(gsap, pageContainer, setCurrentSectionSelector, panelGreeting, panelAbout, footer) {
    let ctx = gsap.context(() => {
        gsap.to(panelGreeting.current, {
            y: -1,
            scrollTrigger: {
                trigger: panelGreeting.current,
                pin: true,
                start: "+=100% bottom",
                end: '+=150% top',
                pinSpacing: false,
                scrub: true,
                anticipatePin: 1 / 10,
                pinType: 'fixed',
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
                end: '+=100% top-=20%',
                pinSpacing: false,
                scrub: .3,
                // anticipatePin: 1,
                // markers: true,
                pinType: 'fixed',
            }
        })

        gsap.to(footer.current, {
            scrollTrigger: {
                trigger: footer.current,
                pin: false,
                pinSpacing: false,
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
    }, pageContainer.current);
    return ctx
}












ScrollTrigger.refresh()
export default App;
