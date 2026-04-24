import './Navbar.css'



const handleClick = () => {
    const phoneNumber = "923104084298";
    const message = "Hello Mohsin!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // Opens in a new tab
};

function Navbar() {
    return <nav className="navbar">

        <div className="space"></div>
        <div className="links">
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
        </div>
        <div className="contact">
            <button onClick={handleClick}>Contact Me</button>

        </div>


    </nav>
}

export default Navbar;