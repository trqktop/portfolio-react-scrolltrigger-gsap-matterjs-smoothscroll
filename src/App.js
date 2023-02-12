import './App.css';

import Preloader from './components/Preloader/Preloader';
import MKDan from './images/mortal-kombat-3.png'

import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { useEffect, useRef, useState, useLayoutEffect, useMemo } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from 'smoothscroll-for-websites'
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SmoothScroll);


function App() {

    let [eggVisible, setEggVisible] = useState(false)
    let [blackTheme, setBlackTheme] = useState(JSON.parse(localStorage.getItem('themeIsBlack')) || true)
    let pageContainer = useRef()
    const DanImg = useRef(null)
    const timeline = useRef(null)
    const ctx = useRef(null)







    useEffect(() => {
        localStorage.setItem('themeIsBlack', JSON.stringify(blackTheme));
    }, [blackTheme])


    useLayoutEffect(() => {
        if (eggVisible) {
            ctx.current = gsap.context(() => {
                timeline.current = gsap.timeline()
                timeline.current.to('.easter_egg-dan', {
                    yPercent: -200,
                    duration: .5
                })
                    .to('.easter_egg-dan', {
                        delay: 1,
                        duration: .3,
                        yPercent: 200,
                        onComplete: () => setEggVisible(false)
                    })
                return timeline
            }, pageContainer)
            return () => ctx.current.revert()
        }
    }, [eggVisible])


    return (
        <div className={blackTheme ? 'page__container page__container_black' : 'page__container'}
            ref={pageContainer}
        >
            <Header gsap={gsap}
                ScrollTrigger={ScrollTrigger}
                ScrollToPlugin={ScrollToPlugin}
                setBlackTheme={setBlackTheme}
                blackTheme={blackTheme}
                pageContainer={pageContainer}
            />
            <Content
                blackTheme={blackTheme}
                pageContainer={pageContainer}
            />
            <Footer />
            <Preloader blackTheme={blackTheme} />
            <div className='easter_egg-container'>
                <button className='easter_egg-button' onClick={() => setEggVisible(true)}></button>
                <img className='easter_egg-dan' ref={DanImg} src={MKDan} alt='Дэн Форден'></img>
            </div>
        </div>
    );
}


SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 800,
    // Размер шага в пикселях 
    stepSize: 75,
    // Дополнительные настройки:
    // Ускорение 
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 1,
    // Поддержка клавиатуры
    // keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    // arrowScroll: 50,
    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,
    // Поддержка тачпада
    touchpadSupport: true,
})


ScrollTrigger.refresh()
export default App;
