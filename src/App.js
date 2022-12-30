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

  // useLayoutEffect(() => {

  // }, [])




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

  // window.onresize = function (event) {
  //   const STs = ScrollTrigger.getAll();
  //   STs.forEach(ST => {
  //     ST.enable()
  //   })
  // };

  // ref={refContainer}
  return (
    <div className='page__container' ref={pageContainer}>
      <Header gsap={gsap} ScrollTrigger={ScrollTrigger} ScrollToPlugin={ScrollToPlugin} sectionSelector={sectionSelector} setCurrentSectionSelector={setCurrentSectionSelector} />
      <Content />
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
    gsap.to(panelAbout, {
      scrollTrigger: {
        trigger: panelAbout,
        pin: true,
        start: "+=100% bottom",
        end: '+=100% top',
        pinSpacing: false,
        onUpdate: self => {
          if (self.progress.toFixed(3) > .6)
            setCurrentSectionSelector('works')
          else {
            setCurrentSectionSelector('about')
          }
        },
        scrub: 1,
        pinType: 'fixed',
      }
    })

    const panelWorks = pageContainer.current.querySelector('.works')
    gsap.to(panelWorks, {
      scrollTrigger: {
        trigger: panelWorks,
        pin: false,
        start: "center bottom",
        pinSpacing: false,
        onUpdate: self => {
          console.log(self.progress.toFixed(3))
          if (self.progress.toFixed(3) > 0.6) {
            setCurrentSectionSelector('footer')
          }
          else {
            setCurrentSectionSelector('works')
          }
        },
        scrub: 1,
        pinType: 'fixed',
        markers: true,
      }
    })

  }, pageContainer);
  return ctx
}












ScrollTrigger.refresh()

export default App;
