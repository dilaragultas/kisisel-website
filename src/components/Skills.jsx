import { dataContext } from '../context/context.jsx'
import { useContext } from "react";
import '../css/Skills.css'

export default function Skills() {

    const { details } = useContext(dataContext)

    return (
        <>
            <div className="skillsContainer">
                <p className='skillsTitle'> {details.skills.title} </p>
                <div className="skillsPic">
                    {details.skills.img.map((elm, index) => {
                        return (
                            <div key={index} className="skillsEach">
                                <img src={elm.link} />
                                <p className='skillsName'>{elm.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}