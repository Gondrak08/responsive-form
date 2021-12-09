import React, { useState, useEffect, useContext } from 'react'
import FormContext from '../../context/FormContext';
import PlainText from './PlainText';
import ContentObject from '../ContentObject';
import './../../styles/values/ListContainer.scss'
import CheckBox from './CheckBox';

function ArrayContainer({ schema, valueType, property, content, setContent, type, handleChange, addField, removeField }) {
    
    const context = useContext(FormContext);
    
    // function addField(k) {
    //     const newField = [...content];
    //     // let obj = { ...context.content };
    //     // obj[property]
    //     // newField.push(schema)
    //     newField.push({ label: 'nada', status: false });
        
    //     context.setContent({ ...context.content, [property]: newField });
    //     console.log(context.content)   
    // }


    // function removeField() {
    //     const field = [...content];
    //     field.splice(0,1);
    //     context.setContent({ ...context.content, [property]: field })
    //     console.log(context.content[property])
    // };
    


    

    return (
        <div className="list-row" >
            <p>{
                schema.title ? schema.title : schema.type ? schema.type : null
            }</p>

            <button className="add-button" onClick={() => addField(content, property, schema.maxItems)}>+</button>

            <button onClick={() => removeField(content, property)}>x</button>

            <div className="list-values" >
                {
                    Object.keys(schema).map((item, key) => {
                        switch (schema[item].type) {
                            
                            case 'string':
                                 return <PlainText
                                    key={key}
                                    k={key}
                                    schema={schema[item]}
                                    valueType={schema[item].type}
                                    content={content}
                                    property={property}
                                    handleChange={handleChange}
                                 />
                          

                            case 'object':
                                return content instanceof Array ? content.map(cont => (
                                    <ContentObject
                                        properties={schema[item].properties}
                                        key={key}
                                        valueType={schema[item].type}
                                        content={cont ?? null}
                                        
                                    />
                                )) : 
                                    (
                                        <ContentObject
                                        properties={schema[item].properties}
                                        key={key}
                                        valueType={schema[item].type}
                                        content={content ? content : null}
                                        />
                                    )
                            default:
                              
                        }
                    })
                }
            </div>
                {/* <button onClick={() => removeField()}>X</button> */}

        </div>
    )
}

export default ArrayContainer

        // {
        //     content ? Object.keys(content).map((item, key) => (
        //         content[item] instanceof Object ?
        //             Object.values(content[item]).map(val => (

        //                 typeof val == 'string' ?
        //                     (
        //                         <div className="values">
        //                             <PlainText
        //                                 key={key}
        //                                 k={key}
        //                                 value={content[item]}
        //                                 valueType={content[item].type}
        //                                 content={val}
        //                                 property={property}
        //                                 handleChange={handleChange}
        //                                 removeField={removeField}
        //                             />
                                    // <button className="delete-button"
                                    //     onClick={() => removeField()}>
                                    //     -
                                    // </button>

        //                         </div>
        //                     ) : typeof val == 'object' ? Object.values(val).map((i) =>
        //                         <div className="values">
        //                             <PlainText
        //                                 key={key}
        //                                 k={key}
        //                                 value={content[item]}
        //                                 valueType={content[item].type}
        //                                 content={i}
        //                                 property={property}
        //                                 removeField={removeField}
        //                                 handleChange={handleChange}
        //                             />
        //                             <button className="delete-button"
        //                                 onClick={() => removeField()}>
        //                                 -
        //                             </button>

        //                         </div>
        //                     )
        //                         :
        //                         <>
        //                             <CheckBox value={content[item]} content={val} handleChange={handleChange} />
        //                             {/* <button onClick={() => removeField()}>X</button> */}
        //                         </>
        //             ))

        //             : (
        //                 <div className="values">
        //                     <PlainText
        //                         key={key}
        //                         k={key}
        //                         value={content[item]}
        //                         valueType={content[item].type}
        //                         content={content[item]}
        //                         property={property}
        //                         removeField={removeField}
        //                         handleChange={handleChange}
        //                     />
        //                     <button className="delete-button"
        //                         onClick={() => removeField()}>
        //                         -
        //                     </button>
        //                 </ div>
        //             )

        //     ))
        //         :
        //         Object.keys(value).map(item => (

        //             value[item].type == 'string' ?
        //                 (
        //                     <PlainText
        //                         value={value}
        //                         valueType={value[item].type}
        //                         content={null}
        //                         property={property}
        //                         removeField={removeField}
        //                     />
        //                 )
        //                 : value[item].properties instanceof Object ?
        //                     Object.keys(value[item].properties).map(val => {
        //                         switch (value[item].properties[val].type) {
        //                             case 'string':
        //                                 return <PlainText
        //                                     value={value[item].properties[val]}
        //                                     valueType={value[item].properties[val].type}
        //                                     content={null}
        //                                     property={val}
        //                                     removeField={removeField}
        //                                 />
        //                             case 'boolean':
        //                                 return <CheckBox
        //                                     value={value[item].properties[val]}
        //                                     content={null} />

        //                             default:
        //                                 break;
        //                         }
        //                     }
        //                     ) : null

        //         ))
        // }