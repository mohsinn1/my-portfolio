import './Projects.css'

function Projects() {
    return (
        <div id="projects" className="projects-section">
            <h2 className="section-title">Featured Projects</h2>

            <div className="projects-grid">

                <div className="project-card">
                    <h3>Place Rec App</h3>
                    <p>A full-stack Django and React application for recommending places.</p>
                    <a href="https://github.com/mohsinn1/place-rec-app" className="project-link" target='_blank'>View on GitHub </a>
                </div>

                <div className="project-card">
                    <h3>Padel Bot</h3>
                    <p>A Node JS + WhatsApp Baileys Bot to track Weekend sport scores.</p>
                    <a href="https://github.com/mohsinn1/padel-bot" className="project-link" target='_blank'>View on GitHub </a>
                </div>

            </div>
        </div>
    )
}
export default Projects;
