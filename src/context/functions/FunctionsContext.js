import { createContext, useEffect, useState } from "react";

const FunctionsContext = createContext({});

export const FunctionsProvider = ({ children }) => {
   
    const [state, setState] = useState({});
    // console.log(state);
    return (
        <FunctionsContext.Provider value={{ state, setState,}} >
            {children}
        </FunctionsContext.Provider>
    )
}

export default FunctionsContext;