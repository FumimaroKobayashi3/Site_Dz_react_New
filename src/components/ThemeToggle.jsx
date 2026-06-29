import { createContext, useState, useContext } from "react"
import './themes.css'

export const createCont = createContext()

export default function ThemeToggle(){
    const { themeTog } = useContext(createCont) 
    
    return(
        <button onClick={themeTog}>темку сменить</button>
    )
}