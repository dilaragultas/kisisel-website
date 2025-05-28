import { dataContext } from '../context/context.jsx'
import { useContext } from "react";
import '../css/Profile.css'

export default function Profile() {
    const { details } = useContext(dataContext)

    return (
        <>
            <div className='profileContainer'>
                <h1 className="profile"> {details.profile.title} </h1>
                <div className="alldetails">
                    <div className="basic">
                        <h3 className="ProfileHeader">{details.profile.altTitle}</h3>
                        {details.profile.info.map((elm, index) => {
                            return (
                                <div className='personalInfo' key={index}>
                                    <p className='personalInfoQ'>{elm.personalInfo}</p>
                                    <p className='personalInfoA'>{elm.value}</p>
                                </div>
                            )
                        })}
                    </div>

                    <img className="profilepic" src={details.profile.img} />

                    <div className="aboutme">
                        <h3 className='aboutMeTitle'> {details.profile.title2}</h3>
                        <p className='aboutMeText'>{details.profile.text}</p>
                    </div>

                </div>
            </div>
        </>
    )
}