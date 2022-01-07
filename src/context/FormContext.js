import { createContext, useEffect, useState } from "react";
import SchemaJson from './Schema.json'

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
    // const [schema, setSechema] = useState(null);
    // useEffect(() => {
    //     setSechema(SchemaJson)
    // }, [])
    // const { type, properties } = schema ?? {};
    // const [formData, setFormData] = useState(null)
    
    // async function HandleChange(e, valueType) {
    //     Object.values(properties).forEach((val, k) => {
    //         if (valueType == val.type) {
    //             let value;
    //             switch (valueType) {
    //                 case 'boolean':
    //                     value = e.target.checked;
    //                     break;
    //                 case 'string':
    //                     value = e.target.value;
    //                     break;
    //                 default:
    //                     value = e.target.value;
    //                     break;
    //             }
    //             setContent({...content, value},)
    //         }
    //     })
        
    //    console.log(content);
    // }

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
        <FormContext.Provider value={{ content, setContent}} >
            {children}
        </FormContext.Provider>
    )
}

export default  FormContext;