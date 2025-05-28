import { dataContext } from '../context/context.jsx'
import { useContext } from "react";

export default function Profile() {
    const { details } = useContext(dataContext)

    return (
        <>
            <div>
                <h1 className="profile"> {details.profile.title} </h1>
                <div className="alldetails">
                    <div className="basic">
                        <h3 className="ProfileHeader">{details.profile.altTitle}</h3>
                        {details.profile.info.map((elm, index) => {
                            return (
                                <div key={index}>
                                    <p>{elm.personalInfo}</p>
                                    <p>{elm.value}</p>
                                </div>
                            )
                        })}
                    </div>

                    <img className="profilepic" src={details.profile.img} />

                    <div className="aboutme">
                        <h3> {details.profile.title2}</h3>
                        <p>{details.profile.text}</p>
                    </div>

                </div>
            </div>
        </>
    )
}