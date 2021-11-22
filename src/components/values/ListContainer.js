import React, { useState, useEffect, useContext } from 'react'
import FormContext from '../../context/FormContext';
import PlainText from './PlainText';
import ContentObject from '../ContentObject';
import './../../styles/values/ListContainer.scss'


function ListContainer({ value, valueType, property, content, type }) {
    const context = useContext(FormContext);
    const [data, setData] = useState(value);
    const [cType, setCType] = useState()

   
    

    function addField() {
        const newField = context.content[property];
        newField.push('');
        context.setContent({ ...context.content, [property]: newField });
        
    }
    
    // if(context.content[property] instanceof Array) Object.values(context.content[property]).map((item)=> console.log(item))
   
    return (
        <div className="list-row" >
            <p>{
                value.type
            }</p>

            <button onClick={addField}>+</button>
            
            <div className="list-values" >
                {Object.keys(data).map((item, k) => (
                   
                    data[item].type == 'string' ?
                    <>
                            {
                                context.content[property] instanceof Array ? Object.values(context.content[property]).map(key =>
                                (
                                    <PlainText value={data[item]} key={key} valueType={data[item].type} content={key} />
                                    )
                                )
                                : (
                                    <PlainText value={data[item]} key={k} valueType={data[item].type} content={context.content[property]} />
                                    )
                            }
                            
                        </>
                        : data[item].type == 'object' ?
                            context.content[property] instanceof Array ?
                                Object.values(context.content[property]).map((val) => (
                                    val instanceof Object ? Object.values(val).map(y =>
                                        <ContentObject properties={data[item]} key={y} valueType={data[item].type} content={y} property={item} />
                                        ) : null
                                ))
                            : null : null
                ))}
            </div>
            

        </div>
    )
}

export default ListContainer
