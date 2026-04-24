import './Hero.css'

const handleClick = () => {
    const phoneNumber = "923104084298";
    const message = "Hello Mohsin!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
};

function Hero() {
    return <div id='hero'>
        <h1>Hi! I'm Mohsin</h1>
        <p> I'm a Full-Stack developer specializing in creating responsive, user-centric websites and full-stack applications.</p>
        <div className='hero-btns'>
            <a href="/Resume.pdf" target="_blank" className="primary-btn">My Resume</a>
            <button onClick={handleClick} className='secondary-btn'>Contact Me</button>
        </div>
    </div>
}

export default Hero;