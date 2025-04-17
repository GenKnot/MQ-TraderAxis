import SingleTeamItem from "@/components/SingleTeamItem";
import {teamMembers} from "@/data/team";

export default function TeamSection() {
    return (
        <div className="team-section gray-bg section-padding pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="section-title">
                            <div className="heading-animation">
                                <h2>Our Team</h2>
                            </div>
                            <span className="d-none d-md-block">
                                <i className="las la-arrow-down mt-30"></i>
                            </span>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                        <div className="row">
                            {teamMembers.slice(0, 2).map(member => (
                                <div
                                    key={member.id}
                                    className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInUp animated"
                                    data-wow-delay={member.delay}
                                >
                                    <SingleTeamItem key={member.id} member={member} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    {teamMembers.slice(2).map(member => (
                        <div
                            key={member.id}
                            className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp animated"
                            data-wow-delay={member.delay}
                        >
                            <SingleTeamItem key={member.id} member={member} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
