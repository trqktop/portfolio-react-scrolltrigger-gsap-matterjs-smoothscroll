import './content.css'
import { Greeting } from '../Greeting/Greeting';
import { About } from '../About/About';
import { Works } from '../Works/Works';
import { MyStack } from '../MyStack/MyStack';
import { useRef } from 'react';

import gsap from 'gsap';

export function Content(props) {
    const { blackTheme, ScrollTrigger, pageContainer } = { ...props }

    return (
        <main className='content'>
            <Greeting pageContainer={pageContainer} />
            <About pageContainer={pageContainer} />
            <MyStack/>
            <Works blackTheme={blackTheme} />
        </main>
    );
}