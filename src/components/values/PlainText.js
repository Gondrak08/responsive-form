import React,{useContext} from 'react'
import FormContext from '../../context/FormContext'
import './../../styles/values/PlainText.scss'



function PlainText({ schema, valueType, k , content, property, handleChange }) {
    const context = useContext(FormContext)
    // console.log(property)
    return (
        <>
            {
                typeof content == 'string' ?
                    <div className="plain-text" >
                        {schema.title ? (<p>{schema.title} </p>) : schema.type ? (<p>{schema.type}</p>) : null}
                        <input id={k} defaultValue={content} type={schema.type} placeholder={schema.title} onChange={(e) => handleChange(e, property, k, valueType)}  />

                     </div>
                    : content instanceof Object ? Object.values(content).map(item => (
                        // console.log(val),
                        <div className="plain-text" >
                            <input defaultValue={item} type={schema.type} placeholder={schema.title} onChange={(e) => handleChange(e, property, k, valueType)} />
                        </div>
                    )) : null
            }
           
        </>
    )
}

export default PlainText
