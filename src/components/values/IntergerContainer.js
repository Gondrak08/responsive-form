import React, { useContext } from 'react'
import FormContext from '../../context/FormContext'

function IntergerContainer({ value, valueType, content, property }) {
    const { HandleChange } = useContext(FormContext)
    return (
        <div style={{ width: '3em' }}>
            <input type="number" placeholder="0" value={content}  onChange={(e) => HandleChange(e, valueType)} />
        </div>
    )
}
export default IntergerContainer;
