import './App.css';
import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from 'smoothscroll-for-websites'
gsap.registerPlugin(ScrollTrigger);


function App() {
  const [state, setState] = useState({
  })
  let pageContainer = useRef(null)
  useLayoutEffect(() => {
    // ['.greeting', '.about', '.works'].forEach(selector => {
    //   const panel = pageContainer.current.querySelector(selector)

    //   ScrollTrigger.create({
    //     trigger: panel,
    //     pin: true,
    //     start: "+=100% bottom",
    //     end: '+=100% top',
    //     pinSpacing: false,
    //     markers: true,
    //     scrub: 1,
    //     pinType: 'fixed',
    //   })
    // })

    let ctx = gsap.context(() => {
      ['.greeting', '.about', '.works'].forEach(selector => {
        const panel = pageContainer.current.querySelector(selector)
        gsap.to(panel, {
          scrollTrigger: {
            trigger: panel,
            pin: true,
            start: "+=100% bottom",
            end: '+=100% top',
            pinSpacing: false,
            markers: true,
            scrub: 1,
            pinType: 'fixed',
          }
        });
      })
    }, pageContainer);
    return () => ctx.revert();
  }, [])


  useEffect(() => {
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
  }, [])


  // ref={refContainer}
  return (
    <div className='page__container' ref={pageContainer}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
