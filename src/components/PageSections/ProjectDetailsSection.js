// Project Images
import projectDetailsImage from "@/assets/img/project/project-details.jpg";
import challengeImg1 from "@/assets/img/project/challenge-img.jpg";
import challengeImg2 from "@/assets/img/project/challenge-img-2.jpg";
import solutionsImg from "@/assets/img/project/solutions-img.jpg";
import {challenges, galleryImages, projectBrief, projectInfo, solutions} from "@/data/projects";

export default function ProjectDetailsSection() {
    return (
        <div className="project-details-wrap section-padding pt-0">
            <div className="container">

                {/* Project Overview */}
                <div className="row gx-5 justify-content-around align-items-end mt-30">

                    {/* Project Image & Brief */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="project-bg">
                            <img src={projectDetailsImage.src} alt="Project Details" />
                            <div className="project-brief-wrap">
                                {projectBrief.map((item, index) => (
                                    <div key={index} className={`single-brief ${item.className || ''}`}>
                                        <h6>{item.label}</h6>
                                        <p>{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="col-xl-6 col-lg-6">
                        <div className="project-details-inner">
                            <div className="section-title">
                                <h1>Lakefront <i>/</i> <br /> Retreat </h1>
                                <h6 className="text-end">Architecture <br /> Design</h6>
                            </div>
                            <div className="project-details-info">
                                {projectInfo.map((info, index) => (
                                    <div key={index} className="single-info">
                                        <p>{info.label}</p>
                                        <h4>{info.value}</h4>
                                    </div>
                                ))}
                            </div>
                            <div className="project-desc">
                                <p>A contemporary vacation home designed to blend seamlessly into its natural surroundings, featuring expansive views of the lake and surrounding green nature hill mountains.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="gallery-section mt-120">
                    <h4>Gallery</h4>
                    <hr />
                    <div className="row gx-3 gy-3 mt-20">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="row gx-3 gy-3">
                                {galleryImages.filter(img => !img.isBig).map((img, index) => (
                                    <div key={index} className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="project-details-img">
                                            <img src={img.image.src} alt={img.caption} />
                                            <figure><figcaption>{img.caption}</figcaption></figure>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            {galleryImages.filter(img => img.isBig).map((img, index) => (
                                <div key={index} className="project-details-img big-img">
                                    <img src={img.image.src} alt={img.caption} />
                                    <figure><figcaption>{img.caption}</figcaption></figure>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Challenge Section */}
                <div className="challenge-section section-padding pt-100">
                    <div className="row">
                        <div className="col-xl-12 text-end">
                            <h4>Challenge</h4>
                        </div>
                        <div className="col-xl-12 col-lg-10">
                            <div className="section-title">
                                <h2>How to blend a <span>contemporary design seamlessly</span> in a natural environment.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5 align-items-end">
                        <div className="col-xl-3 col-lg-3">
                            {challenges.map((challenge, index) => (
                                <p key={index}>{challenge.text}</p>
                            ))}
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="challenge-img-one">
                                <img src={challengeImg1.src} alt="Challenge 1" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="challenge-img-two">
                                <img src={challengeImg2.src} alt="Challenge 2" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Solutions Section */}
                <hr />
                <div className="solutions-section section-padding pt-100 pb-0">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <h4>Solutions</h4>
                            <p>{solutions.text}</p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-4">
                            <div className="solutions-img">
                                <img src={solutionsImg.src} alt="Solutions" />
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="solutions-content">
                                <h3 dangerouslySetInnerHTML={{ __html: solutions.detailedText }} />
                                <p>{solutions.detailedText2}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
