import React, {useState, useContext, useEffect} from 'react'
import '../../styles/ContentObject.scss'

import FormContext from '../../context/FormContext';
import FunctionsContext from '../../context/functions/FunctionsContext';

import StringContainer from './StringContainer';
import Checkbox from './CheckBox';
import OptionsBox from './OptionsBox';
import ArrayContainer from './ArrayContainer';
import IntergerContainer from './IntergerContainer';


import { v4 as uuid } from 'uuid';

function ObjectContainer({
    properties,
    property,
    content,
    setContent,
    schema,
    valueType,
    k }){
    
    const unique_id = uuid();
    const context = useContext(FormContext);
    const contextFunctions = useContext(FunctionsContext);


    // Handling data function:
    async function handleChange(e, schema, content, prop, value, id, key,type){
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
                                return({...state})
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
        
    }



    function addField(e, cont, prop, maxItems) {
        const newField = cont ? cont : [];
        let obj = { ...context.content };
        
        if (property) {
            if (context.tag) {
                newField.push({
                    [context.tag]: ''
                })
                obj[property][prop] = newField;
                context.setContent(obj);
                
            } else {
                newField.push({})
                obj[property][prop] = newField;
                context.setContent(obj);
            }
          
            
        } 
        
        if (!property) {
            newField.push('');
            obj[prop] = newField;
            context.setContent(obj);
            console.log('no property')
        }

        console.log(context.content);
    }


    function removeField(cont, prop, k) {
        const field = cont;
        let obj = { ...context.content };
        field.splice(k, 1);
        if (property) {
            obj[property][prop] = field;
            context.setContent(obj)
        } else {
            obj[prop] = field;
            context.setContent(obj)
        }
    }


    return (
        <div className="object-container"  >
            <div className="container">
            {
                properties ? Object.keys(properties).map((value, key) => {
                    // console.log({
                    //     content: content,
                    //     value: value,
                    //     item:content[value]
                    // })
                    switch (properties[value].type) {  
                        case 'string':
                          
                        return properties[value].enum ?
                            <OptionsBox
                                key={key}
                                k={key}
                                schema={schema}
                                schemaValue={properties[value]}
                                valueType={properties[value].type}
                                content={content ? content[value] : null}
                                fullContent={content ? content : null}
                                property={value}
                                handleChange={handleChange}

                            />
                            :
                            <StringContainer
                                key={key}
                                k={key}
                                schema={schema}
                                schemaValue={properties[value]}
                                valueType={properties[value].type}
                                content={content ? content[value] : null}
                                fullContent={content ? content : null}
                                property={value}
                                handleChange={handleChange}
                            />

                    case 'boolean':
                        return <Checkbox
                                key={key}
                                k={key}
                                id={unique_id}
                                schema={schema}
                                schemaValue={properties[value]}
                                valueType={properties[value].type}
                                content={content ? content[value] : null}
                                property={value}
                                handleChange={handleChange}
                            />

                    case 'array':
                    // console.log(value);
                    // console.log(content ? content[value] : null, value)
                    return <ArrayContainer
                        key={key}
                        k={key}
                        id={unique_id}
                        schema={schema}
                        schemaValue={properties[value]}
                        valueType={properties[value].type}
                        content={content ? content[value] : null}
                        setContent={setContent}
                        property={value}
                        // type={valueType}
                        handleChange={handleChange}
                        addField={addField}
                        removeField={removeField}
                    />
                    
                    case 'integer':
                        return <IntergerContainer
                            key={key}
                            k={key}
                            schema={schema}
                            schemaValue={properties[value]}
                            valueType={properties[value].type}
                            content={content ? content[value] : null}
                            property={value}
                            handleChange={handleChange}
                        />
                        case 'object':
                            
                            return <ObjectContainer
                                key={key}
                                k={key}
                                id={unique_id}
                                schemaValue={properties[value]}
                                schema={schema}
                                properties={properties[value].properties}
                                valueType={properties[value].type}
                                content={content[value]}
                                property={value}
                                handleChange={handleChange}
                                onChange={() => handleChange(properties[value].type)}
                            />

                    default:
                        return null;
                    
                }
                    
                }) : null
                }
                
            </div>
    
          
        </div>
    )
}

export default ObjectContainer
