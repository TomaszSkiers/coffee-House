// jeszcze się zastanawiam czy tu coś będzie

import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

export function UserProvider({children}) {
    const [userName, setUserName] = useState('')

    //po uruchomieniu apki sprawdzam czy użytkownik jest zapisany w localStorage
    useEffect(()=> {
        const storedUserName = localStorage.getItem('name') || sessionStorage.getItem('name')
        if(storedUserName) {
            setUserName(storedUserName)
        }
    }, [])

    return (
        <UserContext.Provider value={{userName, setUserName}}>
            {children}
        </UserContext.Provider>
    )
}
