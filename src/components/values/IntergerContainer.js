import React, { useContext } from 'react'
import FormContext from '../../context/FormContext'

function IntergerContainer({ value, valueType, k, content, property, handleChange }) {
    const context = useContext(FormContext)
    // console.log(value)
    return (
        <div style={{ width: '3em' }}>
            {value ? <p>{value.type} </p> : 'null'}
            <input type="number" placeholder="0" value={content} onChange={(e) => handleChange(e, property, k, valueType)} />
        </div>
    )
}
export default IntergerContainer;
