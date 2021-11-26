import React, { useContext } from 'react'
import FormContext from '../../context/FormContext'
import './../../styles/values/CheckBox.scss'

function CheckBox({k, value, valueType, content,property, handleChange }) {
    const context = useContext(FormContext)
    // console.log(property)
    // console.log(value)

    return (
        <div className="check-box-container">
            { value.title ? <p>{value.title}</p> : null }
            { value.description ? <p>{value.description}</p> :null }
            <input className="check-box" type="checkbox" checked={content} name={value.type} onChange={(e) => handleChange(e, property, k, valueType)} />
        </div>
    )
}

export default CheckBox
