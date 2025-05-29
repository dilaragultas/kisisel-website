import { useState, useContext } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { dataContext } from '../context/context.jsx'
import '../css/firstPage.css'


export default function FirstPage() {

    const handleGithub = () => {
        window.open('https://github.com/dilaragultas', '_blank')
    }

    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/%C3%B6zlem-dilara-g%C3%BClta%C5%9F-y%C4%B1ld%C4%B1r%C4%B1m-184799180/', '_blank')
    }

    const { languageChange, details, languageChoice, darkMode, darkModeChanger } = useContext(dataContext)

    return (
        <>
            <div className="firstPage">
                <div className="firstLine">
                    <p className="name">Dilara</p>
                    <div className="both">
                        {languageChoice === 'en' ? (<button type='button' className="languageSwitch" onClick={languageChange}>TÜRKÇE'YE GEÇ</button>) : (<button type='button' className="languageSwitch" onClick={languageChange}>SWITCH TO ENGLISH</button>)}
                        {darkMode ? (<FormGroup switch>
                            <Input
                                type="switch"
                                id='switch'
                                onClick={darkModeChanger}
                            />
                            <Label htmlFor="switch" check className="darkMode">LIGHT MODE</Label>
                        </FormGroup>) : (<FormGroup switch>
                            <Input
                                type="switch"
                                id="switch"
                                checked={!darkMode}
                                onClick={darkModeChanger}
                            />
                            <Label htmlFor="switch" check className="darkMode">DARK MODE</Label>
                        </FormGroup>)}
                    </div>
                    <div className="firstpic">
                        <div className="vertical">
                            <p className="firstText">{details.firstPage.title}</p>
                            <p className="secondText">{details.firstPage.text}</p>
                            <div>
                                {details.firstPage.links.map((elm, index) => {
                                    return (<button className='linkbutton' key={index} onClick={index === 0 ? handleGithub : handleLinkedIn}>
                                        <i className={`${elm.class} firstIcons`}></i>
                                        <p className="linktext"> {elm.name} </p>
                                    </button>)
                                })}

                            </div>
                        </div>
                        <img src={details.firstPage.img} />

                    </div>

                </div>

            </div>



        </>
    )
}