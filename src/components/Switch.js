import React,{useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import {IoMdMoon as Moon, IoMdSunny as Sun} from 'react-icons/io';

export default function Switch(){
    const {dark, toggle} = useContext(ThemeContext); 
    return(
        <button className='Switch' 
        onClick={()=>toggle()}>
            <Sun className={`icon ${!dark ? 'active' : ''}`}/>
            <Moon className={`icon ${dark ? 'active' : ''}`}/>
        </button>
    )
}