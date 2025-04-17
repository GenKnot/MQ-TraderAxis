import {projects} from "@/data/projects";

export default function ProjectSection() {
    return (
        <div id="project-2" className="project-section section-padding pt-0 pb-100">
            <div className="project-two-wrapper">
                <div className="row">
                    {projects.slice(0, 2).map((project) => (
                        <div key={project.id} className={project.layout}>
                            <a href={project.link} className="single-project-wrapper"
                               style={{ backgroundImage: `url(${project.image.src})`, backgroundSize: "cover" }}>
                                <div className="project-info-inner d-flex">
                                    <div className="project-info">
                                        <h3>{project.title}</h3>
                                        <p>[{project.category}]</p>
                                    </div>
                                    <div className="project-details-link">
                                        <i className="las la-arrow-right"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="row mt-4">
                    {projects.slice(2).map((project) => (
                        <div key={project.id} className={project.layout}>
                            <a href={project.link} className="single-project-wrapper"
                               style={{ backgroundImage: `url(${project.image.src})`, backgroundSize: "cover" }}>
                                <div className="project-info-inner">
                                    <div className="project-info">
                                        <h3>{project.title}</h3>
                                        <p>[{project.category}]</p>
                                    </div>
                                    <div className="project-details-link">
                                        <i className="las la-arrow-right"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
