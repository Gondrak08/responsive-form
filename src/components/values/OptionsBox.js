import React, { useContext } from 'react'
import FormContext from '../../context/FormContext'

function OptionsBox({ value, valueType, content, property }) {
    const context = useContext(FormContext)
    // console.log(value)

    return (
        <>
            <select style={{width:'10%'}} name="" id="" onChange={(e) => context.HandleChange(e, valueType)} >
                {value.enum.length > 0 ? value.enum.map((option, key) => (
                    <option key={key} value={content}>{option}</option>
                )):''}
            </select>
        </>
    )
}

export default OptionsBox
