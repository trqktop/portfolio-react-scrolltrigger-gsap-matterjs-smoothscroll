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


  let pageContainer = useRef(null)


  useLayoutEffect(() => {
    let ctx = panelSlide(gsap, pageContainer)
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
      <Header gsap={gsap} ScrollTrigger={ScrollTrigger} ScrollToPlugin={ScrollToPlugin} />
      <Content />
      <Footer />
    </div>
  );
}






function panelSlide(gsap, pageContainer) {
  let ctx = gsap.context(() => {
    ['.greeting', '.about', '.works'].forEach((selector, i) => {
      const panel = pageContainer.current.querySelector(selector)
      gsap.to(panel, {
        scrollTrigger: {
          trigger: panel,
          pin: true,
          start: "+=100% bottom",
          end: '+=100% top',
          pinSpacing: false,
          scrub: 1,
          pinType: 'fixed',
        }
      });
    })
  }, pageContainer);
  return ctx
}












ScrollTrigger.refresh()

export default App;
