export default function SingleTeamItem({member}) {
    return (
        <div className="single-team-item">
            <div className="team-img">
                <img src={member.img.src} alt={member.name}/>
            </div>
            <div className="team-info">
                <h5>{member.name}</h5>
                <hr/>
                <p>[{member.role}]</p>
            </div>
        </div>
    )
}