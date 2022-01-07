import React,{useContext} from 'react'
import FormContext from '../../context/FormContext'
import './../../styles/values/PlainText.scss'
import { v4 as uuid } from 'uuid';
import { logRoles } from '@testing-library/dom';



function PlainText({k, id, schema, valueType,  content, fullContent, property, handleChange }) {
    const context = useContext(FormContext)
    const unique_id = uuid();
//    console.log(fullContent)
    

    return (
        <>
        {
            typeof content == 'string' ?
                <div className="plain-text" >
                    {
                        schema.title ? (<p>{schema.title} </p>)
                            :
                                schema.type ? (<p>{schema.type}</p>)
                                    :
                                    null
                    }
                        {/* e, property, valueType, content, k */}
                    <input
                        id={unique_id}
                        defaultValue={content}
                        key={k}
                        type={schema.type}
                        name={property}
                        label={property}
                        placeholder={schema.title}
                            onChange={(e) => handleChange(e, e.target.value, property, k, content, e.target.id, fullContent)} />

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
