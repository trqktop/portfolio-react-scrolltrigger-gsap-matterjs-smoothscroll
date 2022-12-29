import './header.css'

export function Header() {
 
    return (
        <header className='header'>
            <div className='header__logo'>PavelShirin</div>
            <nav className='header__menu'>
                <ul className='header__menu-items'>
                    <li className='header__menu-item'><a className='header__menu-link' href="/">Home</a></li>
                    <li className='header__menu-item'><a className='header__menu-link' href="/link">Page</a></li>
                    <li className='header__menu-item'><a className='header__menu-link' href="/link">Page</a></li>
                </ul>
            </nav>
            <button className='header__theme-button'></button>
        </header>
    );
}