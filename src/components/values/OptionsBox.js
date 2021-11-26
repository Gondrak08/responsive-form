import React, { useContext } from 'react'
import FormContext from '../../context/FormContext'
import './../../styles/values/OptionsBox.scss'

function OptionsBox({k, value, valueType, content, property, handleChange }) {
    // const context = useContext(FormContext)
  
    return (
        <div className="options-box" >
            {valueType ? (<p> {valueType} </p>) : null}
            <select className="options-box" style={{ width: '10%' }} defaultValue={content} name="" id="" onChange={(e) => handleChange(e, property, k, valueType)} >
                
                {value.enum.length > 0 ?
                    value.enum.map((option, key) =>
                        (
                         <option key={key}  value={option} selected={content ? content : null}  >{option}</option> )
                        ):''}
            </select>
        </div>
    )
}

export default OptionsBox
