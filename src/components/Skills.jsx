import { dataContext } from '../context/context.jsx'
import { useContext } from "react";

export default function Skills() {

    const { details } = useContext(dataContext)

    return (
        <>
            <div className="skills">
                <p> {details.skills.title} </p>
                <div className="">
                    {details.skills.img.map((elm, index) => {
                        return (
                            <div key={index} className="skillsPic">
                                <img src={elm.link} />
                                <p>{elm.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}