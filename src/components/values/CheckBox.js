import React, {useContext} from 'react'
import FormContext from '../../context/FormContext'
import './../../styles/values/CheckBox.scss'
import { v4 as uuid } from 'uuid';


function CheckBox({ k, schema, schemaValue, valueType, content, property, handleChange }) {
    const context = useContext(FormContext)

    const unique_id = uuid();
    context.setTag(property)

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
