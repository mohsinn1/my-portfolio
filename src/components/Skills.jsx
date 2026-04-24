import './Skills.css'

function Skills() {
    return <div id="skills" className="skills-section">
        <h2 className="section-title">My Expertise</h2>

        <div className="skills-grid">
            {/* Card 1 */}
            <div className="skill-card">
                <h3>Frontend</h3>
                <p>React, JavaScript, HTML, CSS</p>
            </div>

            <div className="skill-card">
                <h3>Backend</h3>
                <p>Django, Django REST Framework</p>
            </div>

            <div className="skill-card">
                <h3>Databases</h3>
                <p>MySQL, MongoDB</p>
            </div>



        </div>
    </div>

}

export default Skills;