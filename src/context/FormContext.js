import { createContext, useEffect, useState, useRef } from "react";
import SchemaJson from './Schema.json'

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
    const [strTag, setStrTag] = useState();
    const [boolTag, setBoolTag] = useState();
    const [boolean, setBoolean] = useState(null);
    const [content, setContent] = useState({     
        // "list": [
        //     "azul",
        //     "vermelho"
        // ],
        // "more": {
        //     "objectList": [
        //         {
        //             "status": true,
        //             "label": "vida noturna"
        //         },
        //         {
        //             "status": false,
        //             "label": "gosta de bar"
        //         }
        //     ],
        //     "someOption": "B",
        //     "identifier": 20
        // },
        // "name": "Carlos Moreira",
        // "address": "admin@admin.com",
        // "active": true
    
    })
   
    
    return (
        <FormContext.Provider value={{
            content,
            setContent,
            strTag,
            setStrTag,
            boolean,
            setBoolean,
            boolTag,
            setBoolTag
        }} >
            {children}
        </FormContext.Provider>
    )
}

export default  FormContext;