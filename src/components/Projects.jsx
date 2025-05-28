import { dataContext } from '../context/context.jsx'
import { useContext } from "react";
import '../css/Projects.css'


export default function Projects() {

    const { details } = useContext(dataContext)

    return (
        <>
            <div className="projectsContainer">
                <h2 className="projectHeader">{details.projects.title}</h2>
                <div className='projects'>
                    <img src={details.projects.img} />
                    <div className='projectCover'>
                        <h3 className='projectsTitle'>{details.projects.altTitle}</h3>
                        <p className='projectsText'>{details.projects.text}</p>
                        <div className='projectsTools'>
                            {details.projects.tools.map((elm, index) => {
                                return (
                                    <p className='projectsToolsName' key={index}>{elm.name}</p>
                                )
                            })}
                        </div>
                        <div className='projectsLinks'>
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