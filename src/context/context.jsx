import { languages } from "../../data";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const dataContext = createContext()

export default function DataContextProvider({ children }) {
    const [languageChoice, setLanguageChoice] = useState('en')
    const [details, setDetails] = useState(languages.en)
    const [darkMode, setDarkMode] = useState(false)

    function postData() {
        axios.post('https://reqres.in/api/workintech', languages[languageChoice], {
            headers: { 'x-api-key': 'reqres-free-v1' }
        }).then((res) => {
            setDetails(res.data)
        }).catch((err) => console.error(err))
    }

    useEffect(() => {
        postData()
    }, [languageChoice])

    function languageChange() {
        if (languageChoice === 'tr') {
            setLanguageChoice('en')
        } else { setLanguageChoice('tr') }
    }

    function darkModeChanger() {
        setDarkMode(!darkMode)
    }

    return (
        <dataContext.Provider value={{ languageChange, details, languageChoice, darkMode, darkModeChanger }}>
            {children}
        </dataContext.Provider>
    )
}