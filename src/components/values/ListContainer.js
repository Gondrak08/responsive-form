import React, { useState, useEffect, useContext } from 'react'
import FormContext from '../../context/FormContext';
import PlainText from './PlainText';
import ContentObject from '../ContentObject';
import './../../styles/values/ListContainer.scss'
import CheckBox from './CheckBox';

function ListContainer({ schema, valueType, property, content, setContent, type, handleChange, addField }) {
    const context = useContext(FormContext);

    
    // console.log(content, property)
    // function addField() {
    //     // const newField = [...content]
    //     // // newField.push(schema)
    //     // newField.push('');
    //     // context.setContent({ ...context.content, [property]: newField });   
    //     // console.log(cont)
    // }

    function removeField(k) {
        const field = [...content];
        field.splice(k, 1);
        setContent({ ...context.content, [property]: field })
        console.log('hello')
    };
    // console.log(content[property])
    


    return (
        <div className="list-row" >
            <p>{
                schema.type
            }</p>

            <button className="add-button" onClick={()=> addField(content)}>+</button>
            
            <div className="list-values" >
                
                {
                    Object.keys(schema).map((item, key) => {
                        // console.log({
                        //     content: content,
                        //     item: item,
                        //     valueItem: value[item],
                        //     value: value,
                        // })

                        switch (schema[item].type) {
                            
                            case 'string':
                                 return <PlainText
                                    key={key}
                                     schema={schema[item]}
                                     valueType={schema[item].type}
                                    content={content}
                                    property={item}
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