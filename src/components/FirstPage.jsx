import { useState, useContext } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { dataContext } from '../context/context.jsx'


export default function FirstPage() {

    const [state, setState] = useState(true);
    const { languageChange, details } = useContext(dataContext)

    return (
        <>
            <div >
                <div className="firstLine">
                    <p className="name">Dilara</p>
                    <div className="both">
                        <button type='button' className="languageSwitch" onClick={languageChange}>TÜRKÇE'YE GEÇ</button>
                        <FormGroup switch>
                            <Input
                                type="switch"
                                checked={state}
                                onClick={() => {
                                    setState(!state);
                                }}
                            />
                            <Label check className="darkMode">DARK MODE</Label>
                        </FormGroup>
                        <div className="firstpic">
                            <div className="vertical">
                                <p>{details.firstPage.title}</p>
                                <p>{details.firstPage.text}</p>
                                <div>
                                    {details.firstPage.links.map((elm, index) => {
                                        return (<button key={index}>
                                            <i className={elm.class}></i>
                                            <p> {elm.name} </p>
                                        </button>)
                                    })}

                                </div>
                            </div>
                            <img src={details.firstPage.img} />

                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}