import React, { useContext } from 'react'
import FormContext from '../../context/FormContext'
function CheckBox({ value, valueType, content,property }) {
    const context = useContext(FormContext)
    return (
        <div className="CheckBox">
            { value.title ? <p>{value.title}</p> : null }
            { value.description ? <p>{value.description}</p> :null }
            <input type="checkbox" value={value.default} checked={content} name={value.type} onChange={(e) => context.HandleChange(e, valueType)} />
        </div>
    )
}

export default CheckBox
