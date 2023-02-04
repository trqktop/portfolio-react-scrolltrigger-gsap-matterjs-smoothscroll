import './greeting.css'
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';


export function Greeting(props) {
    const { pageContainer } = { ...props }
    const catSvgHand = useRef(null)
    const catSvgSmile = useRef(null)
    const catSvgLefthEye = useRef(null)
    const catSvgRigthEye = useRef(null)
    const panelGreeting = useRef(null)
    const timeline = useRef(null)
    const timeline_2 = useRef(null)
    const timeline_3 = useRef(null)
    const context_1 = useRef(null)
    const context_2 = useRef(null)
    const context_3 = useRef(null)
    const timeline_catHand = useRef(null)
    const timeline_catSvgSmile = useRef(null)
    const timeline_catEyes = useRef(null)


    useLayoutEffect(() => {
        timeline_2.current = gsap.matchMedia();
        const breakPoint = 900;
        timeline_2.current.add({
            isDesktop: `(min-width: ${breakPoint}px)`,
            isMobile: `(max-width: ${breakPoint - 1}px)`,
            all: `(min-width: ${222}px)`,
        }, (context) => {
            let { isDesktop } = context.conditions;
            let { isMobile } = context.conditions;
            if (isDesktop) {
                timeline_3.current = gsap.timeline()
                timeline_3.current.to('.greeting', {
                    scale: .93,
                    scrollTrigger: {
                        trigger: '.greeting',
                        pin: true,
                        start: "top top",
                        end: 'bottom+=300px top',
                        anticipatePin: .5,
                        pinSpacing: false,
                        overwrite: 'auto',
                        onEnterBack: () => {
                            timeline_catHand.current.play()
                            timeline_catSvgSmile.current.play()
                            timeline_catEyes.current.play()
                        },
                        onLeave: () => {
                            timeline_catHand.current.pause()
                            timeline_catSvgSmile.current.pause()
                            timeline_catEyes.current.pause()
                        },
                        pinType: 'fixed',
                        scrub: 2,
                        // fastScrollEnd: true,
                    }
                });
            }
            if (isMobile) {
                timeline_3.current = gsap.timeline()
                timeline_3.current.fromTo('.greeting', {
                    yPercent: 100,
                }, {
                    yPercent: 2,
                    delay: 2.5
                })
            }
        });
        return () => timeline_2.current.revert();
    }, [])


    useLayoutEffect(() => {
        context_1.current = gsap.context(() => {
            const catHand = catSvgHand.current
            timeline_catHand.current = gsap.timeline({ repeatDelay: 0, repeat: -1, delay: -1, repeatRefresh: true, })
            timeline_catHand.current.to(catHand, { duration: .8, ease: "none", rotate: -5.2, ease: "none", transformOrigin: 'bottom right' })
                .to(catHand, { duration: .8, ease: "none", rotate: 5.2, ease: "none", transformOrigin: 'bottom right' })
        }, panelGreeting)
        return () => context_1.current.revert()
    })



    useLayoutEffect(() => {
        context_2.current = gsap.context(() => {
            timeline_catSvgSmile.current = gsap.timeline({ repeatDelay: 0, repeat: -1, delay: -1, repeatRefresh: true })
            timeline_catSvgSmile.current.to(catSvgSmile.current, { duration: 1, rotate: -5.2, ease: "none", transformOrigin: 'bottom right', scaleX: 1.2 })
                .to(catSvgSmile.current, { duration: 1, rotate: 5.2, ease: "none", transformOrigin: 'bottom right', scaleX: 1.5 })
        }, panelGreeting)
        return () => context_2.current.revert()
    }, [])


    useLayoutEffect(() => {
        const catEyes = [catSvgLefthEye.current, catSvgRigthEye.current]
        context_3.current = gsap.context(() => {
            timeline_catEyes.current = gsap.timeline({ repeatDelay: 0, repeat: -1, delay: -1, repeatRefresh: true })
            timeline_catEyes.current.to(catEyes, { duration: .2, ease: "none", transformOrigin: 'center center', scaleY: 0, yoyo: true, delay: 3 })
                .to(catEyes, { duration: .2, ease: "none", transformOrigin: 'center center', scaleY: 1, yoyo: true })
        }, panelGreeting)
        return () => context_3.current.revert()
    }, [])

    return (
        <section className='greeting__ST' ref={panelGreeting}>
            <div className='greeting' >
                <article className='greeting__container'>
                    <span className='greeting__text'>Привет! Меня зовут Павел Ширин.</span>
                    <span className='greeting__text'> Я начинающий Frontend-разработчик и это — мой сайт портфолио.</span>
                    <span className='greeting__text'>Дайте мне минутку рассказать о себе</span>
                    <svg className='greeting__cat-svg' xmlns="http://www.w3.org/2000/svg" width="198" height="166" viewBox="0 0 198 166" fill="none">
                        <g>
                            <g >
                                <path className='greeting-cat-blouse' d="M94.508 77.2582C83.3374 75.4849 74.5553 71.4882 71.3094 70.8367C65.1995 72.2327 51.2613 79.7275 40.9508 102.51C28.9114 134.517 32.9672 152.84 36.5 158C41.9417 167.213 42.6877 163.283 103.405 162.166C151.979 161.273 199.248 170.508 195.825 138.391C195.538 127.503 180.715 104.464 171.837 90.2252C162.958 75.9863 153.2 70.6903 148.331 68.736C143.462 66.7816 138.614 70.9608 131.74 74.032C124.867 77.1031 111.119 79.895 94.508 77.2582Z" fill="#D3DAE6" />
                                <path d="M154.939 103.626C157.612 111.909 162.958 130.15 162.958 136.85" stroke="#595BA7" strokeWidth="3.71579" strokeLinecap="round" strokeLinejoin="round" />
                                <path ref={catSvgSmile} d="M101.095 45.5542C103.223 47.0987 105.084 48.3858 108.542 45.5542" stroke="#595BA7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M84.7703 46.95C72.8368 47.6946 48.168 49.2953 44.9603 49.742" stroke="#595BA7" strokeWidth="3.71579" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M50.9749 62.8641C58.6122 60.3514 75.72 54.6 83.0519 51.6964" stroke="#595BA7" strokeWidth="3.71579" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M128.017 50.0211C137.659 49.2766 158.777 47.7317 166.109 47.5084" stroke="#595BA7" strokeWidth="3.71579" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M125.153 46.3917C127.253 45.368 132.829 42.8739 138.327 41.087C145.201 38.8535 152.648 37.7367 154.652 36.0616" stroke="#595BA7" strokeWidth="3.71579" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M71.3094 68.7271C69.1137 67.145 64.6649 63.1991 62.1445 55.605C58.9941 46.1125 60.1397 34.3864 66.727 25.173C66.2496 24.2424 65.2377 20.8176 65.0086 14.5637C64.7795 8.30976 65.4859 5.07112 65.8678 4.23354C67.2998 5.53644 71.0596 6.36968 72.7415 7.02547C75.6055 8.14224 80.1879 9.25902 85.3432 13.4469C90.4029 10.3758 103.73 6.6346 121.143 11.7718C124.103 10.3758 131.11 7.13715 135.464 5.35031C140.046 3.46944 141.192 2.27919 141.478 2C143.769 3.67516 143.025 18.8633 141.192 22.6603C147.779 28.5233 153.793 46.1125 144.056 65.0976" stroke="#595BA7" strokeWidth="3.71579" strokeLinecap="round" strokeLinejoin="round" />
                                <g ref={catSvgHand} className="greeting__cat-svg-hand">
                                    <path className='greeting-cat-hand' d="M36.941 97.7631C42.8982 103.124 55.8436 122.704 60.1396 132.941C65.8259 143.883 58.5 164.5 36.941 163C19.6939 161.8 13.2876 149.507 11.5 142.5C7.60493 122.621 8.49175 106.046 10.8784 100.834C16.5 103 27.5 103 36.941 97.7631Z" fill="#D3DAE6" />
                                    <path d="M60.1396 132.941C55.8436 122.704 42.8982 103.124 36.941 97.7631C27.5 103 16.5 103 10.8784 100.834C8.49176 106.046 7.60493 122.621 11.5 142.5" stroke="#595BA7" strokeWidth="3.71579" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.7473 70.6815C14.8418 64.5772 14.2092 53.1803 19.2077 51.785C24.2063 50.3897 26.0898 65.8347 26.2709 72.7143C29.712 66.513 34.6924 55.1508 39.039 57.5987C43.1682 59.9242 36.9563 74.6522 34.6924 80.8534C36.3224 79.4 42.0768 73.8486 45.2468 74.5902C52.4068 76.2654 42.8275 88.8291 41.2371 91.0626C36.8905 97.167 34.9573 98.5434 30.0674 99.9968C25.1775 101.45 19.3378 101.404 16.8929 101.114C14.448 100.823 8.34128 100.329 4.80969 94.2249C1.98442 89.3414 1.82142 84.4386 2.09308 82.5976C2.6507 78.8187 6.29603 77.103 9.15627 78.8187C14.8406 82.2285 14.6017 91.3418 10.5146 91.8995C7.89622 92.2568 5.71523 87.9268 4.80969 86.0858M7.72815 76.9531C7.98686 73.9371 9.64261 68.289 14.1959 69.8244C19.8875 71.7437 21.7619 85.4787 17.5591 87.372C15.9742 88.086 14.4546 87.4634 13.9372 87.0978" stroke="#595BA7" strokeWidth="3.71579" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <path className='catSvgRigthEye' ref={catSvgRigthEye} d="M85.8622 38.7046C83.295 38.7046 82.4393 37.2107 82.4393 35.3679C82.4393 33.525 83.9718 32.0311 85.8622 32.0311C87.7526 32.0311 89.2852 33.2824 89.2852 35.3679C89.2852 38.0985 87.7526 38.7046 85.8622 38.7046Z" fill="#595BA7" />
                                <path className='catSvgLefthEye' ref={catSvgLefthEye} d="M121.803 37.8705C119.236 37.8705 118.38 36.3765 118.38 34.5337C118.38 32.6908 119.913 31.1969 121.803 31.1969C123.694 31.1969 125.226 32.4482 125.226 34.5337C125.226 37.2644 123.694 37.8705 121.803 37.8705Z" fill="#595BA7" />
                                <path d="M141.057 4.08542C140.344 9.5077 133.356 16.1813 133.356 21.1865" stroke="#595BA7" strokeWidth="3.71579" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M66.6083 6.17108C68.3198 10.064 72.1706 19.1011 73.8821 24.1063" stroke="#595BA7" strokeWidth="3.71579" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M108.967 82.9171C108.967 84.5855 108.967 88.1726 108.967 89.1736" stroke="#595BA7" strokeWidth="3.71579" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M123.087 82.5001C124.085 85.1417 125.569 88.9234 125.226 87.9224" stroke="#595BA7" strokeWidth="3.71579" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M136.779 78.7462C137.635 80.2755 139.517 83.4177 140.202 83.7514" stroke="#595BA7" strokeWidth="3.71579" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M78.5886 77.912C77.7329 79.1633 75.8502 81.8327 75.1656 82.5001" stroke="#595BA7" strokeWidth="3.71579" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M91.8525 82.0829C91.5672 83.7513 90.9111 87.255 90.5688 87.9223" stroke="#595BA7" strokeWidth="3.71579" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        </g>
                    </svg>
                </article>
            </div>
        </section >
    );
}