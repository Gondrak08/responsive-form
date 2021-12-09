import React, { useContext } from 'react'
import FormContext from '../../context/FormContext'

function IntergerContainer({ schema, valueType, k, content, property, handleChange }) {
    const context = useContext(FormContext)
    // console.log(content)
    return (
        <div style={{ width: '3em' }}>
            {schema ? <p>{schema.type} </p> : 'null'}
            <input type="number" placeholder="0" value={content} onChange={(e) => handleChange(e, property, k, valueType)} />
        </div>
    )
}
export default IntergerContainer;
