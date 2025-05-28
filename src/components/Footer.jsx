import { dataContext } from '../context/context.jsx'
import { useContext } from "react";


export default function Footer() {

    const { details } = useContext(dataContext)

    return (
        <>
            <div className="footerContainer">
                <h1 className="footerHeader">{details.footer.title}</h1>
                <p className="footerQ">{details.footer.text}</p>
                <p className="footerG">{details.footer.email}</p>
                <div className="icons">
                    {details.footer.icons.map((elm) => {
                        return (
                            <a href={elm.url} target='_blank'><i className={elm.class}></i></a>
                        )
                    })}
                </div>
            </div>
        </>
    )
}