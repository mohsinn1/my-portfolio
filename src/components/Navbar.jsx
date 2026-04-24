import { useState } from 'react';
import './Navbar.css'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        const phoneNumber = "923104084298";
        const message = "Hello Mohsin!";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="space"></div>
            
            <div className="hamburger" onClick={toggleMenu}>
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </div>

            <div className={`links ${isMenuOpen ? 'active' : ''}`}>
                <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            </div>

            <div className="contact">
                <button onClick={handleClick}>Contact Me</button>
            </div>
        </nav>
    );
}

export default Navbar;