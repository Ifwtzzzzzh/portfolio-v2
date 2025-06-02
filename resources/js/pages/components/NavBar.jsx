import { navLinks } from '../constants/index.js';

const NavBar = () => {
    return (
        <header className="navbar">
            <div className="inner">
                <a href="#hero" className="logo">
                    Nosa | Ifwtzzzzzh
                </a>
                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact Me</span>
                    </div>
                </a>
            </div>
        </header>
    );
};

export default NavBar;
