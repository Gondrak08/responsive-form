import React, { useContext } from 'react'
import FormContext from '../../context/FormContext'

function OptionsBox({ value, valueType, content, property }) {
    const context = useContext(FormContext)
    
    return (
        <>
            <select   style={{width:'10%'}} name="" id="" >
                {value.enum.length > 0 ? value.enum.map((option, key) => 
                    <option key={key} defaultValue={content} >{option}</option>
                ):''}
            </select>
        </>
    )
}

export default OptionsBox
