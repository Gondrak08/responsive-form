import React from 'react'
import './../../styles/values/CheckBox.scss'
import { v4 as uuid } from 'uuid';


function CheckBox({ k, schema, schemaValue, valueType, content, property, handleChange }) {
    const unique_id = uuid();
    return (
        <div className="check-box-container">
            {
                schemaValue.title ?
                    <p>{schemaValue.title}</p>
                : null
            }
            {
                schemaValue.description ?
                    <p>{schemaValue.description}</p>
                : null
            }
            
            <input id={unique_id} className="check-box" type="checkbox" checked={content} name={schemaValue.type} onChange={(e) => handleChange(
                // e,
                // e.target.checked,
                // property,
                // k,
                // valueType
                e,
                schema,
                content,
                property,
                e.target.checked,
                e.target.id,
                k,
                valueType,
            )} />
        </div>
    )
}

export default CheckBox
