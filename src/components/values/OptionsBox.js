import React from 'react'
import './../../styles/values/OptionsBox.scss'
import { v4 as uuid } from 'uuid';

function OptionsBox({ k, schema, valueType, content, property, handleChange }) {
    const unique_id = uuid();
  
    return (
        <div className="options-box" >
            {valueType ? (<p> {valueType} </p>) : null}
            <select id={unique_id} className="options-box" style={{ width: '10%' }} defaultValue={content} name="" id="" onChange={(e) => handleChange(e, property, k, valueType)} >
                
                {
                    schema.enum.length > 0 ?
                    schema.enum.map((option, key) =>
                        (
                        <option id={unique_id}   key={key}  value={option} selected={content ? content : null}  >{option}</option> )
                        )
                        : ''
                }
            </select>
        </div>
    )
}

export default OptionsBox
