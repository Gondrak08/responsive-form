import { createContext, useEffect, useState } from "react";
import SchemaJson from './Schema.json'
const FormContext = createContext({});

export const FormProvider = ({ children }) => {
    const [schema, setSechema] = useState(null);
    useEffect(() => {
        setSechema(SchemaJson)
    }, [])
    const { type, properties } = schema ?? {};
    const [formData, setFormData] = useState(null)
    
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
        "name": "João Marciano Neto",
        "address": 'Rua Fernando Neto',
        "active": true,
        "list": ['Livros', 'Bolos'],
        "someOption": "B",
        "identifier": 32,
        "objectList": [
            {
                "status": false,
                "label": 'casa verde',
            },
            {
                "status": true,
                "label": 'casa vermelha',
            }
          
        ]
            
        
            
            
       
    })

    
    return (
        <FormContext.Provider value={{content, setContent,}} >
            {children}
        </FormContext.Provider>
    )
}

export default  FormContext;