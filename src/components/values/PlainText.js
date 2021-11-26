import React,{useContext} from 'react'
import FormContext from '../../context/FormContext'
import './../../styles/values/PlainText.scss'



function PlainText({ value, valueType, k , content, property, handleChange }) {
    const context = useContext(FormContext)
    // console.log(property)
    return (
        <>
            {
                typeof content == 'string' ?
                    <div className="plain-text" >
                        {value.title ? (<p>{value.title} </p>) : value.type ? (<p>{value.type}</p>) : null}
                        <input id={k} defaultValue={content} type={value.type} placeholder={value.title} onChange={(e) => handleChange(e, property, k, valueType)}  />

                     </div>
                    : content instanceof Object ? Object.values(content).map(val => (
                        // console.log(val),
                        <div className="plain-text" >
                            <input defaultValue={val} type={value.type} placeholder={value.title} onChange={(e) => handleChange(e, property, k, valueType)} />
                        </div>
                    )) : null
            }
           
        </>
    )
}

export default PlainText
