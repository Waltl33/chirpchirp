import React from 'react';

const GlobalContext = React.createContext();

function GlobalProvider({ children }) {
    const state = {
        isLoggedIn: false,
        userId: 1,
        page: null,
        username: "",
        name: "",
        pfp: "https://media.istockphoto.com/id/1158245369/photo/young-pensive-man-looking-away.jpg?s=612x612&w=0&k=20&c=vzXPyDYh9W9xPHkuoriDXsQlW7e914GKEWFqJRLb1Ak="
    }

    return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
}

export { GlobalContext, GlobalProvider };