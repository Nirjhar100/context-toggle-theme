import React,{useState, useLayoutEffect} from 'react'

const ThemeContext = React.createContext({
    dark:false,
    toggle:()=>{},
})

export default ThemeContext

export function ThemeProvider(props){
    //keep state of current theme
    const [dark, setDark]=useState(false);

    

    const applyTheme=theme=>{
        const root = document.getElementsByTagName('html')[0];
        root.style.cssText = theme.join(';');
    }

    const toggle=()=>{
        const body = document.getElementsByTagName('body')[0];
        body.style.cssText = 'transition: background .5s ease';

        setDark(!dark);
        window.localStorage.setItem('darkTheme',!dark)
    }

     //paints the app before it render elements
     useLayoutEffect(() => {
        const lastTheme = window.localStorage.getItem('darkTheme');

        if(lastTheme==='true'){
            setDark(true)
            applyTheme(darkTheme)
        }
        if (!lastTheme || lastTheme === 'false') {
            setDark(false);
            applyTheme(lightTheme);
        } 
    }, [dark])
    //styles
    const lightTheme = [
        '--border: rgba(0,0,0,.2)',
        '--shadow: #000',
        '--heading: rgba(255,100,0,1)',
        '--main: #1d8f13',
        '--text: #000',
        '--textAlt: #fff',
        '--inactive: rgba(0,0,0,.3)',
        '--background: white',
      ];
      
      const darkTheme = [
        '--border: rgba(255,255,255,.1)',
        '--shadow: #000',
        '--heading: rgba(255,255,5,.9)',
        '--main: #79248f',
        '--text: rgb(255, 255, 255)',
        '--textAlt: #fff',
        '--inactive: rgba(255,255,255,.3)',
        '--background: #2D2D2D',
      ];

    return(
        <ThemeContext.Provider value = {{
            dark,toggle,
        }}>
            {props.children}
        </ThemeContext.Provider>

    ) 

    

     
}