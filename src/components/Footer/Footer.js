import './footer.css'


export function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__resume'>skachat</div>
                <div className='footer__contacts-container'>
                    <ul className='footer__contacts'>
                        <li className='footer__contact'>tg</li>
                        <li className='footer__contact'>hh</li>
                        <li className='footer__contact'>git</li>
                        <li className='footer__contact'>mail</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}