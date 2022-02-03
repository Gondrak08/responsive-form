import React,{useContext, useEffect} from 'react'
import FormContext from '../../context/FormContext'
import FunctionsContext from '../../context/functions/FunctionsContext';
import './../../styles/values/PlainText.scss'
import { v4 as uuid } from 'uuid';



function PlainText({ k, id, schema, schemaValue, valueType, content, fullContent, property, handleChange, handleDragStart, handleDragEnter, handleDragDrop, dragging  }) {
    const context = useContext(FormContext)
    const unique_id = uuid();
    useEffect(() => {
        context.setStrTag(property)
    },[property])
    // context.setStrTag(property)
    // console.log(k)
    return (
        <>
        {
                <div className="plain-text" >
                    {
                        schemaValue.title ? (<p>{schemaValue.title} </p>)
                        :
                            schemaValue.type ? (<p>{schemaValue.type}</p>)
                                :
                                null
                    }
                    {
                        handleDragStart ?
                        
                         (<input
                            id={unique_id}
                            defaultValue={content ? content : null}
                            key={k}
                            type={schemaValue.type}
                            name={property}
                            label={property}
                            placeholder={schemaValue.title}
                            onChange={(e) => handleChange(
                                e,
                                schema,
                                content,
                                property,
                                e.target.value,
                                e.target.id,
                                k,
                                valueType
                            )}
                            draggable
                            onDragStart={(e) => handleDragStart(e, k)}
                            onDragEnter={dragging ? (e) => {handleDragEnter(e, k)}: null}
                        />)
                            :
                            (<input
                                id={unique_id}
                                defaultValue={content ? content : null}
                                key={k}
                                type={schemaValue.type}
                                name={property}
                                label={property}
                                placeholder={schemaValue.title}
                                onChange={(e) => handleChange(
                                    e,
                                    schema,
                                    content,
                                    property,
                                    e.target.value,
                                    e.target.id,
                                    k,
                                    valueType
                                )}
                            />)
                    }

                </div>
        }
           
        </>
    )
}

export default PlainText
