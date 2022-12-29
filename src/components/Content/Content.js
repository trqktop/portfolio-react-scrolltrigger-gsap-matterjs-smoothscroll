import './content.css'
import { Greeting } from '../Greeting/Greeting';
import { About } from '../About/About';
import { Works } from '../Works/Works';


export function Content() {
    

    return (
        <main className='content'>
            <Greeting />
            <About />
            <Works />
        </main>
    );
}