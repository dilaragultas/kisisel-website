import { dataContext } from '../context/context.jsx'
import { useContext } from "react";


export default function Projects() {

    const { details } = useContext(dataContext)

    return (
        <>
            <div className="projects">
                <h2 className="projectHeader">{details.projects.title}</h2>
                <div>
                    <img src={details.projects.img} />
                    <div>
                        <h3>{details.projects.altTitle}</h3>
                        <p>{details.projects.text}</p>
                        <div>
                            {details.projects.tools.map((elm, index) => {
                                return (
                                    <p key={index}>{elm.name}</p>
                                )
                            })}
                        </div>
                        <div>
                            {details.projects.links.map((elm) => {
                                return (
                                    <a href={elm.url} target='_blank'>{elm.name}</a>
                                )
                            })}

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}