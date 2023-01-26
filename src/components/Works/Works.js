import './works.css'
import { data } from '../../data/data';
import { WorkElement } from '../WorkElement/WorkElement';
import { useLayoutEffect, useRef, } from 'react';
import gsap from 'gsap';

export function Works(props) {
    const { blackTheme } = { ...props }
    const catTailSvg = useRef(null)
    const elementsContainer = useRef(null)
    const elements = useRef(null)
    const timeline_1 = useRef(null)
    const timeline_2 = useRef(null)
    const timeline_3 = useRef(null)
    const timeline_4 = useRef(null)
    const timeline_5 = useRef(null)
    const context = useRef(null)
    useLayoutEffect(() => {
        elements.current = Array.from(elementsContainer.current.childNodes)
        context.current = gsap.context(() => {
            timeline_1.current = gsap.timeline({ repeatDelay: 0, repeat: -1, yoyo: true, delay: -1 })
            timeline_1.current.to(catTailSvg.current, {
                x: 0, duration: .5, ease: "none", transformOrigin: 'center bottom', attr: {
                    d: ('M42.3535 81.499C42.0432 74.5876 47.5683 67.2723 50.3697 64.4785L57.2884 57.522L83.2499 62.7394L84.1153 70.5655V94.1354C83.2102 94.6511 74.4353 94.5593 70.2691 96.6524C66.8076 98.3915 57.3084 96.7142 53.0849 96.1985C48.6027 98.7773 39.4999 104 36.5191 105.783C33.0684 107.847 31.2359 108.528 28.9999 113C27.5 116 25.5 124.5 22.4999 124.5C15.3689 124.5 19.9999 118.614 19.9999 116C19.9999 112 23.8445 105.959 29.6827 101.872C34.4999 98.5 40.8615 93.2882 44.7403 91.8698C43.8352 91.311 42.6638 88.4103 42.3535 81.499Z')
                }
            })
                .to(catTailSvg.current, {
                    x: 0, duration: .2, ease: "power1.inOut", transformOrigin: 'center bottom', attr: {
                        d: ('M42.3536 81.499C42.0432 74.5876 47.5684 67.2723 50.3697 64.4785L57.2884 57.522L83.25 62.7394L84.1153 70.5655V94.1354C83.2103 94.6511 74.4353 94.5593 70.2692 96.6524C66.8077 98.3915 57.3085 96.7142 53.0849 96.1985C48.6028 98.7773 39.5 104 36.5192 105.783C33.0685 107.847 29.6828 111 25.5 116C22.5 119.586 20 123.5 17 122.5C10.235 120.245 15.0659 114.758 17.0001 113C22.5001 108 23.8446 105.959 29.6828 101.872C34.5 98.5 40.8616 93.2882 44.7404 91.8698C43.8353 91.311 42.6639 88.4103 42.3536 81.499Z')
                    }
                })
                .to(catTailSvg.current, {
                    x: 0, duration: .5, ease: "none", transformOrigin: 'center bottom', attr: {
                        d: ('M42.3536 81.499C42.0433 74.5876 47.5684 67.2723 50.3698 64.4785L57.2885 57.522L83.25 62.7394L84.1154 70.5655V94.1354C83.2103 94.6511 74.4354 94.5593 70.2692 96.6524C66.8077 98.3915 57.3086 96.7142 53.085 96.1985C48.6028 98.7773 39.5 104 36.5192 105.783C33.0685 107.847 29.6829 111 25.5 116C22.5 119.586 10.0001 119 10 116C9.99991 111.257 14.3861 112 17 112C23.5 112 23.8446 105.959 29.6829 101.872C34.5 98.5 40.8616 93.2882 44.7404 91.8698C43.8353 91.311 42.6639 88.4103 42.3536 81.499Z')
                    }
                })
        }, elementsContainer)
        return () => context.current.revert()
    }, [])

    function hoverListener(e) {
        // const currentElements = elements.current.filter(item => {
        //     if (item.id) {
        //         if (e.currentTarget.id !== item.id)
        //             return item
        //     }
        // })
        timeline_3.current = gsap.context(() => {
            timeline_2.current = gsap.timeline()
            timeline_2.current.to('.works__item', {
                '-webkit-filter': 'grayscale(100%)',
                filter: 'grayscale(100%)',
                scale: .96
            })
            timeline_5.current = gsap.timeline()
            timeline_5.current.to([e.currentTarget, '.works__item_soon'], {
                opacity: 1,
                delay: 0,
                '-webkit-filter': 'grayscale(0%)',
                filter: 'grayscale(0%)',
                scale: 1,
                ease: 'none',
            })
        }, elementsContainer)
        // return () => ctx.revert()

    }

    function hoverLeaveListener(e) {
        timeline_4.current = gsap.context(() => {
            timeline_4.current = gsap.timeline()
            timeline_4.current.to('.works__item', {
                '-webkit-filter': 'grayscale(0%)',
                filter: 'grayscale(0%)',
                scale: 1,
            })
            // const c = gsap.to(elements.current, {
            //     opacity: 1,
            //     scale: 11,
            //     '-webkit-filter': 'grayscale(0%)',
            //     filter: 'grayscale(0%)',
            // })
        }, elementsContainer)
        // return () => ctx.revert()
    }


    return (
        <section className='works' >
            <div className='works__container'>
                <h2 className='works__title'>Мои работы</h2>
                <ul className='works__list' ref={elementsContainer}>
                    {data.map((project, i) => (
                        <WorkElement
                            hoverListener={hoverListener}
                            hoverLeaveListener={hoverLeaveListener}
                            key={i + ' work-element'}
                            blackTheme={blackTheme}
                            data={project}
                            elementsContainer={elementsContainer}

                        />
                    ))}
                    <li className='works__item works__item_soon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="152" height="124" viewBox="0 0 152 124"
                            fill="none">
                            <path className="tail" ref={catTailSvg}
                                d="M42.3535 81.499C42.0432 74.5876 47.5684 67.2723 50.3697 64.4785L57.2884 57.522L83.25 62.7394L84.1154 70.5655V94.1354C83.2103 94.6511 74.4353 94.5593 70.2692 96.6524C66.8077 98.3915 57.3085 96.7142 53.0849 96.1985C48.6027 98.7773 38.6913 103.41 36.5192 105.783C33.804 108.749 36.6647 112.445 37.4404 113.219C38.2162 113.993 46.0384 116.652 43.0096 121.435C39.1943 127.459 29.3525 118.552 28.002 116.314C26.1346 113.219 25.5454 107.674 29.6828 101.872C32.9927 97.23 40.8615 93.2882 44.7404 91.8698C43.8353 91.311 42.6638 88.4103 42.3535 81.499Z"
                                fill="#595BA7" />
                            <path className="package"
                                d="M117 73.9183C114.508 78.1691 94.1539 89.6861 84.2885 94.9133L84.1587 70.5487L76.3702 65.1056C76.1972 65.3216 74.475 66.7126 68.9712 70.5487C62.351 75.1629 56.1635 73.6465 53.827 72.7393C50.0076 71.2564 48.9808 67.8271 49.7597 65.1056C50.3827 62.9283 53.0481 60.4832 54.3029 59.5328C53.7837 59.2218 47.4231 58.8848 44.3077 58.7552L49.7597 54.4785H51.9664C57.6347 50.8553 71.9135 43.0002 83.6827 40.5654C99.8827 41.2912 110.164 47.7825 112.976 50.7201C116.091 57.3556 116.957 68.9503 117 73.9183Z"
                                fill="white" stroke="#595BA7" strokeWidth="2" strokeLinejoin="round" />
                            <path className="package-corner"
                                d="M44.4018 58.3911C44.1836 60.9053 44.2054 66.8599 46.0385 70.565"
                                stroke="#595BA7" strokeWidth="2" />
                            <path className="package-inside"
                                d="M66.5275 61.7205C64.9414 61.3985 60.9446 60.6162 58.5865 60.1304C57.2518 60.6604 53.6871 62.5685 53.0464 65.9608C52.2456 70.201 57.3177 70.8636 59.5868 70.466C61.8558 70.0685 64.1603 69.4386 65.9423 68.3912C67.5489 67.447 71.5751 64.3223 72.8654 63.1738C71.5751 62.5113 69.4039 62.3043 66.5275 61.7205Z"
                                fill="#595BA7" />
                            <path className="package-corner"
                                d="M87.5769 68.3914C93.0647 65.2415 103.344 59.7882 110.942 52.7393"
                                stroke="#595BA7" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span className='works__item-comming-soon'>coming soon...</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}

