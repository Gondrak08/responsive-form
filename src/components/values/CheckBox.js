import React, { useContext } from 'react'
import FormContext from '../../context/FormContext'
import './../../styles/values/CheckBox.scss'

function CheckBox({ k, schema, valueType, content,property, handleChange }) {
    const context = useContext(FormContext)
    // console.log(property)
    // console.log(value)

    return (
        <div className="check-box-container">
            {schema.title ? <p>{schema.title}</p> : null }
            {schema.description ? <p>{schema.description}</p> :null }
            <input className="check-box" type="checkbox" checked={content} name={schema.type} onChange={(e) => handleChange(e, property, k, valueType)} />
        </div>
    )
}

export default CheckBox
