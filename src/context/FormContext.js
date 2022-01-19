import { createContext, useEffect, useState } from "react";
import SchemaJson from './Schema.json'

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
    const [state, setState] = useState({
        property: null,
        prop: null,
        cont: null,
    });
    console.log(state);

    const [tag, setTag] = useState({});

    const [content, setContent] = useState({     
        "list": [
            "azul",
            "vermelho"
        ],
        "more": {
            "objectList": [
                {
                    "status": true,
                    "label": "vida noturna"
                },
                {
                    "status": false,
                    "label": "gosta de bar"
                }
            ],
            "someOption": "B",
            "identifier": 20
        },
        "name": "Carlos Moreira",
        "address": "admin@admin.com",
        "active": true
    
    })
   
    
    return (
        <FormContext.Provider value={{ content, setContent, state, setState, tag, setTag,}} >
            {children}
        </FormContext.Provider>
    )
}

export default  FormContext;