import React, { useState, useEffect, useContext } from 'react'
import FormContext from '../../context/FormContext';
import PlainText from './PlainText';
import ContentObject from '../ContentObject';
import './../../styles/values/ListContainer.scss'
import CheckBox from './CheckBox';

function ListContainer({ value, valueType, property, content, type, handleChange }) {
    const context = useContext(FormContext);


    function addField() {
        const newField = context.content[property];
        newField.push('');
        context.setContent({ ...context.content, [property]: newField });
    }
    function removeField(k) {
        const field = context.content[property];
        field.splice(k, 1);
        context.setContent({ ...context.content, [property]: field })
        console.log('hello')
    };
    
    // console.log(content)
    
    return (
        <div className="list-row" >
            <p>{
                value.type
            }</p>

            <button className="add-button" onClick={addField}>+</button>
            
            <div className="list-values" >


                {
                    Object.keys(value).map((item, key) => {
                        switch (value[item].type) {
                            case 'string':
                                 return <PlainText
                                    key={key}
                                    value={value[item]}
                                    valueType={value[item].type}
                                    content={null}
                                    property={item}
                                 />
                            
                            case 'object':
                              
                                return <ContentObject
                                    properties={value[item].properties}
                                    key={key}
                                    valueType={value[item].type}
                                    
                                    
                                />
                            default:
                              
                        }
                    })
                }
            </div>
                {/* <button onClick={() => removeField()}>X</button> */}

        </div>
    )
}

export default ListContainer

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
        //                             <button className="delete-button"
        //                                 onClick={() => removeField()}>
        //                                 -
        //                             </button>

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