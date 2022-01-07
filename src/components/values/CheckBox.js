import React from 'react'
import './../../styles/values/CheckBox.scss'
import { v4 as uuid } from 'uuid';


function CheckBox({ k, schema, valueType, content, property, handleChange }) {
    const unique_id = uuid();
    return (
        <div className="check-box-container">
            {
                schema.title ?
                <p>{schema.title}</p>
                : null
            }
            {
                schema.description ?
                <p>{schema.description}</p>
                : null
            }
            
            <input id={unique_id} className="check-box" type="checkbox" checked={content} name={schema.type} onChange={(e) => handleChange(e, property, k, valueType)} />
        </div>
    )
}

export default CheckBox
