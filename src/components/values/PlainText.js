import React,{useContext} from 'react'
import FormContext from '../../context/FormContext'
import './../../styles/values/PlainText.scss'



function PlainText({ value, valueType, content, property }) {
    const context = useContext(FormContext)
    // console.log(content);
    

    return (
        <>
            {
                value ?
                <div className="plain-text" >
                    <p>{value.title ? value.title : value.type}</p>
                        
                        <input defaultValue={content} type={value.type} placeholder={value.title} onChange={(e) => context.HandleChange(e, valueType)} />

                        {/* {context.content[property] ? Object.values(context.content[property]).map(key =>
                        (
                        <PlainText value={data[item]} key={key} valueType={data[item].type} content={key} />
                        )
                        ) : null} */}

                </div>
                    : null
            }
        </>
    )
}

export default PlainText
