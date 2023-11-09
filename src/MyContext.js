import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();



export const MyProvider = ({ children }) => {

    const [isAuth, setIsAuth] = useState()

    return (
        <MyContext.Provider value={{
            isAuth, setIsAuth
        }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => {
    return useContext(MyContext);
};