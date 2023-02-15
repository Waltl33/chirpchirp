import React from 'react';

const GlobalContext = React.createContext();

function GlobalProvider({ children }) {
    const state = {
        isLoggedIn: false,
        userId: null,
        page: null,
        username: null,
        name: null,
        email: null,
        banner: null,
        pfp: null
    }

    return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
}

export { GlobalContext, GlobalProvider };