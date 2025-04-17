import SingleTeamItem from "@/components/SingleTeamItem";
import {teamMembers} from "@/data/team";

export default function TeamSectionThree() {
    return (
        <div id="team-page" className="team-section section-padding pt-50 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="section-title">
                            <h2>Our Team</h2>
                            <span><i className="las la-arrow-down mt-30"></i></span>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="row">
                            {teamMembers.slice(0, 2).map(member => (
                                <div key={member.id} className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <SingleTeamItem key={member.id} member={member} />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="row">
                    {teamMembers.slice(2).map(member => (
                        <div key={member.id} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <SingleTeamItem member={member} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}