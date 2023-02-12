import './content.css'
import { Greeting } from '../Greeting/Greeting';
import { About } from '../About/About';
import { Works } from '../Works/Works';
import { MyStack } from '../MyStack/MyStack';

export function Content(props) {
    const { blackTheme,  pageContainer } = { ...props }

    return (
        <main className='content'>
            <Greeting pageContainer={pageContainer} />
            <About pageContainer={pageContainer} />
            <MyStack/>
            <Works blackTheme={blackTheme} />
        </main>
    );
}