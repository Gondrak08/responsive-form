import React,{useContext} from 'react'
import FormContext from '../../context/FormContext'
import './../../styles/values/PlainText.scss'
import { v4 as uuid } from 'uuid';



function PlainText({ k, id, schema, schemaValue, valueType,  content, fullContent, property, handleChange }) {
    const context = useContext(FormContext)
    const unique_id = uuid();
    
    return (
        <>
        {
            typeof content == 'string' ?
                <div className="plain-text" >
                    {
                            schemaValue.title ? (<p>{schemaValue.title} </p>)
                            :
                                schemaValue.type ? (<p>{schemaValue.type}</p>)
                                    :
                                    null
                    }
                    <input
                        id={unique_id}
                        defaultValue={content}
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
                        />

                </div>
                // : content instanceof Object ? Object.keys(content).map(item => (
                //     <div className="plain-text" >
                //         <input
                //             id={id}
                //             key={k}
                //             defaultValue={content[item]}
                //             type={schema.type}
                //             name={property}
                //             label={property}
                //             placeholder={schema.title}
                //             onChange={(e) => handleChange(e, e.target.value, property, k, content)} />
                //     </div>
                // ))
                : null
        }
           
        </>
    )
}

export default PlainText
