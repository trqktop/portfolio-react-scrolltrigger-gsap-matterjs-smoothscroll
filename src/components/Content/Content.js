import './content.css'
import { Greeting } from '../Greeting/Greeting';
import { About } from '../About/About';
import { Works } from '../Works/Works';


export function Content(props) {
    const { gsap } = { ...props }

    return (
        <main className='content'>
            <Greeting gsap={gsap} />
            <About gsap={gsap} />
            <Works gsap={gsap} />
        </main>
    );
}