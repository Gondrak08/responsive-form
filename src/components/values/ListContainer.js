import React, { useState, useEffect, useContext } from 'react'
import FormContext from '../../context/FormContext';
import PlainText from './PlainText';
import ContentObject from '../ContentObject';
import './../../styles/values/ListContainer.scss'


function ListContainer({ value, valueType, property, content }) {
    const context = useContext(FormContext);
    
    const [data, setData] = useState(value);

    // console.log(property)
    
    // console.log(value.properties)
    // if (context.content[property]) Object.values(context.content[property]).map(key => console.log(key))

    function addField() {
        const newField = context.content[property];
        newField.push('');
        context.setContent({ ...context.content, [property]: newField });
    }
    
    return (
        <div className="list-row" >
            <p>{
                value.type
            }</p>

            <button onClick={addField}>+</button>
            
            <div className="list-values" >
                {Object.keys(data).map((item, k) => (
                    // console.log(context.content[item]),
                    data[item].type == 'string' ?
                        <>
                            {
                                context.content[property] ? Object.values(context.content[property]).map(key =>
                                (
                                    <PlainText value={data[item]} key={key} valueType={data[item].type} content={key} />
                                    )
                                ) : null
                            }
                            
                        </>
                        : data[item].type == 'object' ?
                            <>
                                
                                <ContentObject properties={data[item].properties} key={k} valueType={data[item].type} content={context.content[item]} property={item} />
                            </>
                            : null
                ))}
            </div>
            

        </div>
    )
}

export default ListContainer
