import React, {useState, useContext, useEffect} from 'react'
import '../../styles/ContentObject.scss'

import FormContext from '../../context/FormContext';
import HandleChange from '../functions/HandleChange';

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
    valueType,}) {
        
    
    const context = useContext(FormContext);

    const unique_id = uuid();
    
    async function handleChange(
        e,
        schema,
        content,
        prop,
        value,
        id,
        key) {
        
        context.setContent(prevState => ({
            ...prevState,
            [prop]: {
                ...prevState,
                value
            }
        })
        );

    }



    function addField(cont, prop, maxItems) {
        const newField = cont ? cont : [];
        let obj = { ...context.content };
        if (!newField) {
            context.setContent({ ...context.content, [prop]: newField });
            console.log(context.content);
        } else {
            newField.push(null);
            if (obj[property]) {
                obj[property][prop] = newField;
                context.setContent(obj);
            } else {
                obj[prop] = newField;
                console.log(maxItems)
                context.setContent(obj);
            }
        }

        // if (typeof newField[0] === 'string') {
        //     obj[prop] = newField;
        //     if (newField.length < maxItems) {
        //         newField.push(null);
        //         context.setContent( obj );
        //     }
        // }
        // if (typeof newField[0] === 'object') {
        //     obj[property][prop] = newField;
        //     newField.push({ status: false, label: 'nada' });
        //     context.setContent(obj);
        //     // console.log(typeof newField[0]);
        // }
        
        // console.log(context.content)
        // console.log({
        //     content: property[prop],
        //     cont: cont,
        //     property: property,
        //     prop:prop,
        // })
    }

    function removeField(cont, prop, k) {
        const field = cont;
        let obj = { ...context.content };
        field.splice(k, 1);
        if (obj[property]) {
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
                                handleChange={context.handleChange}

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
                        type={valueType}
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
