import React, { useState, useEffect, useContext } from 'react'
import FormContext from '../../context/FormContext';
import StringContainer from './StringContainer';
import ObjectContainer from './ObjectContainer';
import './../../styles/values/ListContainer.scss'
import CheckBox from './CheckBox';
import { v4 as uuid } from 'uuid';

function ArrayContainer({ schema, schemaValue, valueType, property, content, setContent, type, handleChange, addField, removeField }) {
    const context = useContext(FormContext);
    const unique_id = uuid();


    return (
        <div className="list-row" >
            <p>
                {
                    schemaValue.title ? schemaValue.title : schemaValue.type ? schemaValue.type : null
                }
            </p>

            <button className="add-button" onClick={() => addField(content, property, schemaValue.maxItems)}>+</button>

            <button onClick={() => removeField(content, property)}>x</button>

            <form className="list-values" >
                {
                    Object.keys(schemaValue).map((item, key) => {
                        switch (schemaValue[item].type) {
                            case 'string':
                                return content instanceof Object ? Object.keys(content).map(cont => (
                                    <StringContainer
                                        key={key}
                                        id={unique_id}
                                        k={cont}
                                        schema={schema}
                                        schemaValue={schemaValue[item]}
                                        valueType={schemaValue[item].type}
                                        content={content[cont]}
                                        property={property}
                                        handleChange={handleChange} />
                                )) :
                                <StringContainer
                                    key={key}
                                    id={unique_id}
                                    k={key}
                                    schema={schema}
                                    schemaValue={schemaValue[item]}
                                    valueType={schemaValue[item].type}
                                    content={content}
                                    property={property}
                                    handleChange={handleChange}
                                 />
                          
                            case 'object':
                                return content instanceof Array ? content.map((cont, index) => (
                                    // console.log(cont, index),
                                    <ObjectContainer
                                        properties={schemaValue[item].properties}
                                        key={index}
                                        k={index}
                                        schema={schema}
                                        valueType={schemaValue[item].type ?? null}
                                        content={cont ?? null}
                                        property={property}

                                    />
                                )) : 
                                    (
                                        <ObjectContainer
                                        properties={schemaValue[item].properties}
                                        key={key}
                                        schema={schema}
                                        // valueType={schema[item].type ?? null }
                                        content={content ? content : null}
                                        property={property}

                                        />
                                    )
                            default:
                                return null;
                              
                        }
                    })
                }
            </form>
               
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