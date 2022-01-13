import React, {useState, useContext, useEffect} from 'react'
import '../../styles/ContentObject.scss'

import FormContext from '../../context/FormContext';
import HandleChange from '../functions/HandleChange';

import StringContainer from './StringContainer';
import Checkbox from './CheckBox';
import OptionsBox from './OptionsBox';
import ArrayContainer from './ArrayContainer';
import IntergerContainer from './IntergerContainer';


import { v4 as uuid } from 'uuid';

function ObjectContainer({
    properties,
    property,
    content,
    setContent,
    schema,
    valueType,
    k }){
    
    const unique_id = uuid();
    const context = useContext(FormContext);
  
    async function handleChange(
        e,
        schema,
        content,
        prop,
        value,
        id,
        key,
        type,
        ) {
        
       
        // console.log(property, prop, type);
        console.log(context.content[prop], type);

        Object.keys(schema).map(i => {
            let obj = schema[i]
            if (obj instanceof Object) Object.keys(obj).map(label => {
                

                // ObjectContainer:
                if (property) {
                    if (obj[label].type === 'object') {
                        // ObjectList
                        if (context.content[label][property]) {
                            if (property && label && prop) {
                                if (context.content[label][property].length > 0) {
                                    context.setContent((prevState) => {
                                        prevState[label][property][k][prop] = e.target.checked ? e.target.checked : value
                                        return ({
                                            ...prevState
                                        })
                                    })
                                    console.log(context.content[label][property]);
                                } else {
                                    context.setContent((prevState) => {
                                        prevState[label][property][prop] = value ? value : e.target.checked
                                        return ({
                                            ...prevState
                                        })
                                    })
                                }
                            }
                        } else {
                            context.setContent((state) => {
                                state[property][prop] = value || value;
                                return({...state})
                            })
                           
                        }
                    }
                }


                if (!property) {
                    // ArrayContainer
                    if (context.content[prop] instanceof Object) {
                        context.setContent((state) => {
                            state[prop][key] = value;
                            return ({ ...state });
                        })
                    } else {
                        switch (type) {
                            case 'boolean':
                                context.setContent((state) => {
                                    state[prop] = value;
                                    return ({ ...state })
                                })
                                console.log(context.content[prop])
                                break;
                            case 'string':
                                context.setContent((state) => {
                                    state[prop] = value;
                                    return ({ ...state });
                                })
                                break;
                            case 'interger':
                                context.setContent((state) => {
                                    state[prop] = e.target.valueAsNumber || e.target.value;
                                    return ({ ...state });
                                })
                                break
                            default:
                                break;
                        }
                   }
                }


            })
        })
        
        
        // Object.keys(schema).map((k) => {
        //     let sData = schema[k]
        //     if (sData instanceof Object) Object.keys(sData).map((label) => {

        //         // if (sData[label].type == 'object') {
        //         //     let obj = sData[label];
        //         //     Object.keys(obj).map(o => {
        //         //         let objList = obj[o];
        //         //         Object.keys(objList).map(l => {
                            
        //         //             if (l === 'objectList') {
                                
        //         //                 console.log(l)
        //         //             }

        //         //             if (objList[l].type == 'array') {
                                
        //         //                 let arr = objList[l];

                               
        //         //                 Object.keys(arr).map(x => {
        //         //                     // console.log(typeof arr[x]);
        //         //                     if (arr[x] instanceof Object) {
        //         //                         Object.keys(arr[x]).map(i => {
        //         //                             let obj = arr[x][i]
        //         //                             Object.keys(obj).map(r => {
        //         //                                 if (prop == r) {
        //         //                                     // let ol = sData[label].more
        //         //                                     if (property === 'objectList') {
        //         //                                         let a = l;
        //         //                                         context.setContent((state) => ({
        //         //                                             ...state, [label]: {
        //         //                                                 ...state[label], [property]: {
        //         //                                                     value
        //         //                                             }
        //         //                                         }}))
        //         //                                     }
                                                    
        //         //                                     console.log(context.content)
                                                    
                                                  
        //         //                                }

        //         //                             })

        //         //                         })

        //         //                     }
        //         //                 })

        //         //             }

        //         //         })
        //         //     })
        //         //     // console.log(label, sData[label].type)
        //         // }

        //         if (sData[label].type == 'array') {
        //             // console.log(  label,sData[label].type, sData[label])

        //             if (sData[label].items.type == 'object') {
        //                 let data = sData[label].items;
        //                 Object.keys(data).map(x => {
        //                     let dataB = data[x];
        //                     Object.keys(dataB).map(y => { console.log(y) })
        //                     // console.log(x, data[x])
        //                 }
        //                 )
        //                 // console.log(label, properties[label].type, properties[label])
        //             } else {
        //                 // console.log(label, properties[label].type, properties[label])
        //             }
        //         }

        //     });

        //     // if (schema[label].type === 'array') {
        //     //     if (schema[label].items.type == 'object') {
        //     //         let data = schema[label].items;
        //     //         Object.keys(data).map(x => {
        //     //             let dataB = data[x];
        //     //             Object.keys(dataB).map(y => { console.log(y) })
        //     //             // console.log(x, data[x])
        //     //         }
        //     //         )
        //     //         // console.log(label, properties[label].type, properties[label])
        //     //     } else {
        //     //         // console.log(label, properties[label].type, properties[label])
        //     //     }
        //     // }
        // });
        
        
        // context.setContent(prevState => ({
        //     ...prevState,
        //     [prop]: {
        //         ...prevState,
        //         value
        //     }
        // })
        // );
        // console.log(schema)
       
      
        // console.log(context.content);
    }

    
    // Object.keys(schema).map((k) => {
    //     let sData = schema[k]
    //     if(sData instanceof Object) Object.keys(sData).map((label) => {

    //             switch (sData[label].type) {
    //                 case 'object':
                        
    //                     // console.log(label, sData[label], sData[label].type);
    //                     // Object.keys(sData[label]).map((a) => {
    //                     //     let obj = sData[label][a]
    //                     //     Object.keys(obj).map(b => {
    //                     //         switch (obj[b].type) {
    //                     //             case 'array':
    //                     //                 let objB = obj[b];

    //                     //                 Object.keys(objB).map(c => {
    //                     //                     let objC = objB[c];

    //                     //                     // Object.keys()
    //                     //                 })

    //                     //                 break;

    //                     //             default:
    //                     //                 break;
    //                     //         }
    //                     //     })
    //                     // })
    //                     break;
    //                 case 'array':
    //                     // console.log(label, sData[label], sData[label].type);
    //                     break
    //                 case 'string':
    //                     // console.log(label, sData[label], sData[label].type);
    //                     break;
    //                 case 'boolean':
    //                     // console.log(label, sData[label], sData[label].type);
    //                     break;
    //                 case 'interger':
    //                     // console.log(label, sData[label], sData[label].type);
    //                     break;
    //                 default:
    //                     break;
    //             }
            
    //         // if (sData[label].type == 'object') {
    //         //     let obj = sData[label];
    //         //     Object.keys(obj).map(o => {
    //         //         let objList = obj[o];
    //         //         Object.keys(objList).map(l => {
    //         //             if (objList[l].type == 'array') {
    //         //                 let arr = objList[l];
    //         //                 Object.keys(arr).map(x => {
    //         //                     // console.log(typeof arr[x]);
    //         //                     if (arr[x] instanceof Object) {
    //         //                         Object.keys(arr[x]).map(i => {
    //         //                             let obj = arr[x][i]
    //         //                             Object.keys(obj).map(r => {
    //         //                                 // console.log(r)

    //         //                             })
                                        
    //         //                         })
                                    
    //         //                     }
    //         //                 })
                            
    //         //             }

    //         //         })
    //         //     } )
    //         //     // console.log(label, sData[label].type)
    //         // }

    //         // if (sData[label].type == 'array') {
    //         //     // console.log(  label,sData[label].type, sData[label])

    //         //     if (sData[label].items.type == 'object') {
    //         //         let data = sData[label].items;
    //         //         Object.keys(data).map(x => {
    //         //             let dataB = data[x];
    //         //             Object.keys(dataB).map(y => { console.log(y) })
    //         //             // console.log(x, data[x])
    //         //         }
    //         //         )
    //         //         // console.log(label, properties[label].type, properties[label])
    //         //     } else {
    //         //         // console.log(label, properties[label].type, properties[label])
    //         //     }
    //         // }  
    //     }
        
        
    //     );

    //     // if (schema[label].type === 'array') {
    //     //     if (schema[label].items.type == 'object') {
    //     //         let data = schema[label].items;
    //     //         Object.keys(data).map(x => {
    //     //             let dataB = data[x];
    //     //             Object.keys(dataB).map(y => { console.log(y) })
    //     //             // console.log(x, data[x])
    //     //         }
    //     //         )
    //     //         // console.log(label, properties[label].type, properties[label])
    //     //     } else {
    //     //         // console.log(label, properties[label].type, properties[label])
    //     //     }
    //     // }
    // });



    function addField(cont, prop, maxItems) {
        const newField = cont ? cont : [];
        let obj = { ...context.content };
        if (!newField) {
            context.setContent({ ...context.content, [prop]: newField });
            console.log(context.content);
        } else {
            newField.push(null);
            if (obj[property]) {
                obj[property][prop] = newField;
                context.setContent(obj);
            } else {
                obj[prop] = newField;
                console.log(maxItems)
                context.setContent(obj);
            }
        }

        // if (typeof newField[0] === 'string') {
        //     obj[prop] = newField;
        //     if (newField.length < maxItems) {
        //         newField.push(null);
        //         context.setContent( obj );
        //     }
        // }
        // if (typeof newField[0] === 'object') {
        //     obj[property][prop] = newField;
        //     newField.push({ status: false, label: 'nada' });
        //     context.setContent(obj);
        //     // console.log(typeof newField[0]);
        // }
        
        // console.log(context.content)
        // console.log({
        //     content: property[prop],
        //     cont: cont,
        //     property: property,
        //     prop:prop,
        // })
    }

    function removeField(cont, prop, k) {
        const field = cont;
        let obj = { ...context.content };
        field.splice(k, 1);
        if (obj[property]) {
            obj[property][prop] = field;
            context.setContent(obj)
        } else {
            obj[prop] = field;
            context.setContent(obj)
        }
    }


    return (
        <div className="object-container"  >
            <div className="container">
            {
                properties ? Object.keys(properties).map((value, key) => {
                    // console.log({
                    //     content: content,
                    //     value: value,
                    //     item:content[value]
                    // })
                    switch (properties[value].type) {  
                        case 'string':
                        return properties[value].enum ?
                            <OptionsBox
                                key={key}
                                k={key}
                                schema={schema}
                                schemaValue={properties[value]}
                                valueType={properties[value].type}
                                content={content ? content[value] : null}
                                fullContent={content ? content : null}
                                property={value}
                                handleChange={context.handleChange}

                            />
                            :
                            <StringContainer
                                key={key}
                                k={key}
                                schema={schema}
                                schemaValue={properties[value]}
                                valueType={properties[value].type}
                                content={content ? content[value] : null}
                                fullContent={content ? content : null}
                                property={value}
                                handleChange={handleChange}
                            />

                    case 'boolean':
                        return <Checkbox
                                key={key}
                                k={key}
                                id={unique_id}
                                schema={schema}
                                schemaValue={properties[value]}
                                valueType={properties[value].type}
                                content={content ? content[value] : null}
                                property={value}
                                handleChange={handleChange}
                            />

                    case 'array':
                    // console.log(value);
                    // console.log(content ? content[value] : null, value)
                    return <ArrayContainer
                        key={key}
                        k={key}
                        id={unique_id}
                        schema={schema}
                        schemaValue={properties[value]}
                        valueType={properties[value].type}
                        content={content ? content[value] : null}
                        setContent={setContent}
                        property={value}
                        // type={valueType}
                        handleChange={handleChange}
                        addField={addField}
                        removeField={removeField}
                    />
                    
                    case 'integer':
                        return <IntergerContainer
                            key={key}
                            k={key}
                            schema={schema}
                            schemaValue={properties[value]}
                            valueType={properties[value].type}
                            content={content ? content[value] : null}
                            property={value}
                            handleChange={handleChange}
                        />
                        case 'object':
                            
                            return <ObjectContainer
                                key={key}
                                k={key}
                                id={unique_id}
                                schemaValue={properties[value]}
                                schema={schema}
                                properties={properties[value].properties}
                                valueType={properties[value].type}
                                content={content[value]}
                                property={value}
                                handleChange={handleChange}
                                onChange={() => handleChange(properties[value].type)}
                            />

                    default:
                        return null;
                    
                }
                    
                }) : null
                }
                
            </div>
    
          
        </div>
    )
}

export default ObjectContainer
