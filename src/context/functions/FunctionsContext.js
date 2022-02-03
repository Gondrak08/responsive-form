import { createContext, useEffect, useState, useContext, useRef } from "react";
import FormContext from "../FormContext";
const FunctionsContext = createContext({});

export const FunctionsProvider = ({ children }) => {
    const [property, setProperty] = useState(null);
    const [k, setK] = useState(null)
    const context = useContext(FormContext)
   

    const handleDragDrop = (e, params) => {
        console.log("estou sendo arrastado", e, params)
    }

    async function handleChange(e, schema, content, prop, value, id, key, type) {
        e.preventDefault();

        Object.keys(schema).map(i => {
            let obj = schema[i]
            if (obj instanceof Object) Object.keys(obj).map(label => {
                // ObjectContainer:
                if (property) {
                    if (obj[label].type === 'object') {
                        // ObjectList
                        if (context.content[label][property]) {
                            if (property && label && prop) {
                                if (context.content[label][property].length > 0) {
                                    context.setContent((prevState) => {
                                        prevState[label][property][k][prop] = e.target.checked ? e.target.checked : value
                                        return ({
                                            ...prevState
                                        })
                                    })
                                    console.log(context.content[label][property]);
                                } else {
                                    context.setContent((prevState) => {
                                        prevState[label][property][prop] = value ? value : e.target.checked
                                        return ({
                                            ...prevState
                                        })
                                    })
                                }
                            }
                        } else {
                            context.setContent((state) => {
                                state[property][prop] = value || value;
                                return ({ ...state })
                            })
                            console.log(context.content[property])
                        }
                    }
                }


                if (!property) {
                    // ArrayContainer
                    if (context.content[prop] instanceof Object) {
                        context.setContent((state) => {
                            state[prop][key] = value;
                            return ({ ...state });
                        })
                        console.log(context.content);
                    } else {
                        switch (type) {
                            case 'boolean':
                                context.setContent((state) => {
                                    state[prop] = value;
                                    return ({ ...state })
                                })
                                console.log(context.content[prop])
                                break;
                            case 'string':
                                context.setContent((state) => {
                                    state[prop] = value;
                                    return ({ ...state });
                                })
                                break;
                            case 'interger':
                                context.setContent((state) => {
                                    state[prop] = e.target.valueAsNumber || e.target.value;
                                    return ({ ...state });
                                })
                                break
                            default:
                                break;
                        }
                    }
                }

            })
        })
        // console.log(context.content)
    }


    return (
        <FunctionsContext.Provider value={{ property, setProperty,  k, setK, handleDragDrop, handleChange}} >
            {children}
        </FunctionsContext.Provider>
    )
}

export default FunctionsContext;