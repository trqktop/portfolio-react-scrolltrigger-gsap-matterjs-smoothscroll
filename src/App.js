import './App.css';
import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap, selector } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from 'smoothscroll-for-websites'
import ScrollToPlugin from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin)


function App() {
  const [state, setState] = useState([])
  let [sectionSelector, setCurrentSectionSelector] = useState('about')

  let pageContainer = useRef(null)


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
    }, pageContainer)
    return () => ctx.revert();
  }, [])

  // className={true ? 'page__container' : 'page__container page__container-true'}
  return (
    <div className={'page__container'} ref={pageContainer}>
      <Header gsap={gsap} ScrollTrigger={ScrollTrigger} ScrollToPlugin={ScrollToPlugin} sectionSelector={sectionSelector} setCurrentSectionSelector={setCurrentSectionSelector} />
      <Content gsap={gsap} />
      <Footer />
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
        start: "+=100% bottom",
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
        markers: true,
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


  }, pageContainer);
  return ctx
}














ScrollTrigger.refresh()

export default App;
