import React, { createContext, useEffect, useState } from 'react'
import { useColorScheme, } from 'react-native'


export const appContext = createContext()



export const AppProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(useColorScheme() == "dark")
    let colorScheme = useColorScheme()





    useEffect(() => {
    //   
    
      return () => {
        setDarkMode((prev) => !prev)
      }
    }, [colorScheme])
    

    

    



    


    return (
        <appContext.Provider value={{
          darkMode,
        }}>{children}</appContext.Provider>
      )
}